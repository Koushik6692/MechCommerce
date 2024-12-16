"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
    price: string;
  };
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="rounded-lg bg-primary/10 p-3">{service.icon}</div>
          <div>
            <CardTitle className="text-2xl">{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-lg font-semibold">Key Features</h3>
          <ul className="space-y-3">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <div>
            <Badge className="mb-2">Pricing</Badge>
            <p className="text-2xl font-bold">{service.price}</p>
          </div>
          <Button size="lg" className="w-full">
            Get Started
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}