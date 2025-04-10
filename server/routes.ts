import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import { sendContactNotification } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submissions
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body with zod schema
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Add the current timestamp
      const submissionData = {
        ...validatedData,
        createdAt: new Date().toISOString()
      };
      
      // Store the submission
      const newSubmission = await storage.createContactSubmission(submissionData);
      
      // Send email notification
      let emailStatus = { success: false, message: "Email notification not attempted" };

      if (process.env.SENDGRID_API_KEY) {
        emailStatus = await sendContactNotification(newSubmission);
        console.log("Email notification status:", emailStatus);
      } else {
        console.log("SendGrid API key not available, skipping email notification");
      }

      // Return success
      res.status(201).json({ 
        message: "Contact submission received successfully",
        submission: newSubmission
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "Validation error",
          errors: validationError.details
        });
      } else {
        console.error("Error processing contact submission:", error);
        res.status(500).json({ message: "An error occurred while processing your request" });
      }
    }
  });
  
  const httpServer = createServer(app);
  return httpServer;
}
