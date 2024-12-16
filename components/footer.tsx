import Link from "next/link";
import { Settings } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Settings className="h-6 w-6" />
              <span className="text-xl font-bold">MechCommerce</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Your trusted partner for industrial MRO supplies and services.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/products/tools" className="text-sm text-muted-foreground hover:text-foreground">
                  Tools & Equipment
                </Link>
              </li>
              <li>
                <Link href="/products/safety" className="text-sm text-muted-foreground hover:text-foreground">
                  Safety Supplies
                </Link>
              </li>
              <li>
                <Link href="/products/electrical" className="text-sm text-muted-foreground hover:text-foreground">
                  Electrical
                </Link>
              </li>
              <li>
                <Link href="/products/plumbing" className="text-sm text-muted-foreground hover:text-foreground">
                  Plumbing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services/inventory" className="text-sm text-muted-foreground hover:text-foreground">
                  Inventory Management
                </Link>
              </li>
              <li>
                <Link href="/services/technical" className="text-sm text-muted-foreground hover:text-foreground">
                  Technical Support
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="text-sm text-muted-foreground hover:text-foreground">
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/training" className="text-sm text-muted-foreground hover:text-foreground">
                  Training
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm text-muted-foreground hover:text-foreground">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm text-muted-foreground hover:text-foreground">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} MechCommerce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}