import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PenTool, ShieldCheck, Truck, Headphones } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Quality Tools",
      description: "Premium industrial tools and equipment from trusted brands",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Safety First",
      description: "Comprehensive range of safety equipment and supplies",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Fast Delivery",
      description: "Next-day delivery available on most items",
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Expert Support",
      description: "24/7 technical support from industry experts",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Industrial Power Drill",
      price: 299.99,
      category: "Tools",
      image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      name: "Safety Helmet",
      price: 49.99,
      category: "Safety",
      image: "https://images.unsplash.com/photo-1578874691223-64558a3ca096?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      name: "LED Work Light",
      price: 129.99,
      category: "Lighting",
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: 4,
      name: "Precision Tool Set",
      price: 199.99,
      category: "Tools",
      image: "https://images.unsplash.com/photo-1581147036324-c1c9bf55b8dd?w=800&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4 py-24">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <Badge className="mb-4 w-fit">New Products Available</Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
                Industrial Solutions for Your Business
              </h1>
              <p className="mb-8 text-lg text-muted-foreground">
                Access premium MRO supplies and expert services to keep your
                operations running smoothly.
              </p>
              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <Link href="/products">Shop Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=60"
                alt="Industrial equipment"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Why Choose MechCommerce</h2>
            <p className="text-muted-foreground">
              We provide comprehensive solutions for all your industrial needs
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-4 rounded-full bg-primary/10 p-2 w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Featured Products</h2>
            <p className="text-muted-foreground">
              Discover our most popular industrial supplies
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">
                      ${product.price.toFixed(2)}
                    </span>
                    <Button>Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}