import React from "react";
import {
  ClipboardList,
  HeadphonesIcon,
  BookOpen,
  BarChart3,
} from "lucide-react";

export const services = [
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