import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { stats } from "@/lib/constants";

export default function Stats() {
  return (
    <section className="bg-primary text-white py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <StatItem key={index} value={stat.value} label={stat.label} suffix={stat.suffix} />
          ))}
        </div>
      </div>
    </section>
  );
}

type StatItemProps = {
  value: number;
  label: string;
  suffix?: string;
};

function StatItem({ value, label, suffix = "" }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = Math.ceil(value / (duration / 16)); // Assuming 60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start > value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="stat-item">
      <div className="text-4xl md:text-5xl font-bold mb-2">
        {count}{suffix}
      </div>
      <p className="text-white/80 text-lg">{label}</p>
    </div>
  );
}
