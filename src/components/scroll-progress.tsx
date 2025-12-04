"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

export function ScrollProgress() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const scrollProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setCompletion(Number((scrollProgress / scrollHeight).toFixed(2)) * 100);
      }
    };

    window.addEventListener("scroll", updateScrollCompletion);
    return () => {
      window.removeEventListener("scroll", updateScrollCompletion);
    };
  }, []);

  return (
    <Progress
      value={completion}
      className="fixed top-0 left-0 right-0 h-1 w-full rounded-none z-50 bg-transparent [&>*]:bg-gradient-to-r [&>*]:from-blue-900 [&>*]:via-cyan-300 [&>*]:to-blue-900 [&>*]:[background-size:200%_auto] [&>*]:animate-animated-gradient"
    />
  );
}
