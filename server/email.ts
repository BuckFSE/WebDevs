import { MailService } from '@sendgrid/mail';
import { ContactSubmission } from '@shared/schema';

// Initialize the mail service
const mailService = new MailService();

// This will be set from the environment variable when available
// mailService.setApiKey(process.env.SENDGRID_API_KEY || '');

export interface EmailResult {
  success: boolean;
  message: string;
}

export async function sendContactNotification(
  submission: ContactSubmission
): Promise<EmailResult> {
  // Check if API key is set
  if (!process.env.SENDGRID_API_KEY) {
    console.error('SendGrid API key is not available');
    return { 
      success: false, 
      message: 'Email service is not configured'
    };
  }
  
  // Set the API key
  mailService.setApiKey(process.env.SENDGRID_API_KEY);

  // Create the email content
  const emailContent = {
    to: 'buckhgsmd@gmail.com', // Recipient email
    from: 'noreply@yourdomain.com', // This should be a verified sender in your SendGrid account
    subject: `New Contact Form Submission: ${submission.subject}`,
    text: `
Name: ${submission.name}
Email: ${submission.email}
Subject: ${submission.subject}

Message:
${submission.message}

Submitted on: ${submission.createdAt}
    `,
    html: `
<h2>New Contact Form Submission</h2>
<p><strong>From:</strong> ${submission.name} (${submission.email})</p>
<p><strong>Subject:</strong> ${submission.subject}</p>
<h3>Message:</h3>
<p>${submission.message.replace(/\n/g, '<br>')}</p>
<p><em>Submitted on: ${submission.createdAt}</em></p>
    `
  };

  try {
    // Send the email
    await mailService.send(emailContent);
    return { 
      success: true, 
      message: 'Email notification sent' 
    };
  } catch (error) {
    console.error('Error sending email notification:', error);
    return { 
      success: false, 
      message: 'Failed to send email notification' 
    };
  }
}