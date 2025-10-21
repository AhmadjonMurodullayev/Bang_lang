"use client";

import { Counter } from "@/components/counter";
import { Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  count: number;
  label: string;
}

export default function StatsCard({ count, label }: StatsCardProps) {
  return (
    <Card className="absolute -bottom-6 left-0 shadow-xl max-w-xs border-0 rounded-lg">
      <CardContent className="p-6 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
          <Globe className="h-6 w-6 text-primary" />
        </div>
        <div>
          <Counter
            end={count}
            duration={1500}
            className="text-3xl font-bold text-foreground"
            suffix="+"
          />
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
}


