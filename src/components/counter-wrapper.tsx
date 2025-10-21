"use client";

import { Counter } from "@/components/counter";

interface CounterWrapperProps {
  end: number;
  duration: number;
  className: string;
  suffix: string;
}

export default function CounterWrapper({ end, duration, className, suffix }: CounterWrapperProps) {
  return (
    <Counter
      end={end}
      duration={duration}
      className={className}
      suffix={suffix}
    />
  );
}


