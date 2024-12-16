"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Truck,
  ClipboardList,
  Settings,
} from "lucide-react";

export default function SupplierLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  const navItems = [
    {
      title: "Dashboard",
      href: "/supplier",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "Products",
      href: "/supplier/products",
      icon: <Package className="h-5 w-5" />,
    },
    {
      title: "Orders",
      href: "/supplier/orders",
      icon: <Truck className="h-5 w-5" />,
    },
    {
      title: "Inventory",
      href: "/supplier/inventory",
      icon: <ClipboardList className="h-5 w-5" />,
    },
    {
      title: "Settings",
      href: "/supplier/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r bg-muted/20">
        <div className="flex h-16 items-center border-b px-6">
          <h2 className="text-lg font-semibold">Supplier Portal</h2>
        </div>
        <nav className="space-y-1 p-4">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
            >
              <Link href={item.href}>
                {item.icon}
                <span className="ml-3">{item.title}</span>
              </Link>
            </Button>
          ))}
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <div className="container py-8">{children}</div>
      </main>
    </div>
  );
}