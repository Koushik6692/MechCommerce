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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  ClipboardList,
  HeadphonesIcon,
  BookOpen,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: "inventory",
    title: "Inventory Management",
    description: "Optimize your inventory with our smart management solutions",
    icon: <ClipboardList className="h-6 w-6" />,
    features: [
      "Real-time inventory tracking",
      "Automated reordering",
      "Stock level optimization",
      "Inventory forecasting",
      "Multi-location management",
    ],
    price: "Starting at $299/month",
  },
  {
    id: "technical",
    title: "Technical Support",
    description: "24/7 expert technical support for all your equipment",
    icon: <HeadphonesIcon className="h-6 w-6" />,
    features: [
      "24/7 support availability",
      "Expert technicians",
      "Remote diagnostics",
      "Priority response",
      "Preventive maintenance",
    ],
    price: "Starting at $199/month",
  },
  {
    id: "training",
    title: "Training Programs",
    description: "Comprehensive training for your team",
    icon: <BookOpen className="h-6 w-6" />,
    features: [
      "Online courses",
      "On-site training",
      "Certification programs",
      "Custom curricula",
      "Progress tracking",
    ],
    price: "Custom pricing",
  },
  {
    id: "consulting",
    title: "Business Consulting",
    description: "Strategic consulting for operational excellence",
    icon: <BarChart3 className="h-6 w-6" />,
    features: [
      "Process optimization",
      "Cost reduction analysis",
      "Supply chain consulting",
      "Efficiency audits",
      "Growth strategy",
    ],
    price: "Custom pricing",
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold">Our Services</h1>
        <p className="text-muted-foreground">
          Comprehensive solutions to optimize your operations
        </p>
      </div>

      <Tabs defaultValue="inventory" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <TabsTrigger key={service.id} value={service.id}>
              {service.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {services.map((service) => (
          <TabsContent key={service.id} value={service.id}>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    {service.icon}
                  </div>
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
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}