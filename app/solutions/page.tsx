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
import {
  Factory,
  Building2,
  Warehouse,
  HardHat,
  CheckCircle2,
} from "lucide-react";

const solutions = [
  {
    title: "Manufacturing",
    description: "Complete solutions for manufacturing facilities",
    icon: <Factory className="h-6 w-6" />,
    benefits: [
      "Automated inventory management",
      "Predictive maintenance",
      "Quality control systems",
      "Production optimization",
      "Safety compliance",
    ],
  },
  {
    title: "Construction",
    description: "Comprehensive tools and equipment for construction projects",
    icon: <HardHat className="h-6 w-6" />,
    benefits: [
      "Equipment rental services",
      "Project management tools",
      "Safety equipment",
      "Material management",
      "Site monitoring",
    ],
  },
  {
    title: "Facilities Management",
    description: "Solutions for efficient facility operations",
    icon: <Building2 className="h-6 w-6" />,
    benefits: [
      "Building maintenance",
      "Energy management",
      "Security systems",
      "Cleaning supplies",
      "Emergency response",
    ],
  },
  {
    title: "Warehousing",
    description: "Optimize your warehouse operations",
    icon: <Warehouse className="h-6 w-6" />,
    benefits: [
      "Inventory tracking",
      "Storage solutions",
      "Order fulfillment",
      "Material handling",
      "Logistics management",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <Badge className="mb-4">Industry Solutions</Badge>
        <h1 className="mb-4 text-4xl font-bold">
          Tailored Solutions for Your Industry
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          We provide comprehensive solutions designed specifically for your
          industry's unique challenges and requirements.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {solutions.map((solution, index) => (
          <Card key={index} className="relative overflow-hidden">
            <div className="absolute right-0 top-0 h-24 w-24 bg-primary/10" />
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-3">{solution.icon}</div>
                <div>
                  <CardTitle className="text-2xl">{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="mb-4 text-lg font-semibold">Key Benefits</h3>
              <ul className="space-y-3">
                {solution.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Button className="mt-6 w-full">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}