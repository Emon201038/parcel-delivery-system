"use client";

import { useEffect, useRef } from "react";

interface AnimatedSectionProps {
  title: string;
  description: string;
  gifUrl: string;
  reverse?: boolean;
}

export function AnimatedSection({
  title,
  description,
  gifUrl,
  reverse = false,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-8 py-12 transition-opacity duration-700`}
    >
      <div className="flex-1">
        <h3 className="text-3xl font-bold mb-4 text-primary">{title}</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      <div className="flex-1">
        <img
          src={gifUrl || "/placeholder.svg"}
          alt={title}
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
