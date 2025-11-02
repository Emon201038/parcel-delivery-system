import { AnimatedSection } from "@/components/animated-section";
import { FAQ } from "@/components/FAQ";
import InfiniteBrandCarousel from "@/components/infinite_brand_carousel";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Package, Truck, Shield, Clock, Search } from "lucide-react";
import { Link, useNavigate } from "react-router";

export default function HomePage() {
  document.title = "Home | ParcelPro";

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    navigate(
      `/track?${new URLSearchParams({
        q: formData.get("trackingId") as string,
      }).toString()}`
    );
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20"
        // style={{
        //   backgroundImage: `url(/images/banner.jpg)`,
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Fast & Reliable
            <span className="text-primary block">Parcel Delivery</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professional parcel delivery service connecting senders and
            receivers with real-time tracking and secure handling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tracking Section */}
      <section className="px-4 w-full flex justify-center items-center">
        <Card className="max-w-4xl w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Parcel Tracking
            </CardTitle>
            <CardDescription>
              Enter your tracking ID to view detailed parcel information and
              status updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="trackingId" className="sr-only">
                  Tracking ID
                </Label>
                <Input
                  type="text"
                  id="trackingId"
                  name="trackingId"
                  placeholder="Enter tracking ID (e.g., TRK-20250731-2075JZ)"
                  required
                />
              </div>
              <Button type="submit">Track Parcel</Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose ParcelPro?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive parcel delivery solutions with advanced
              tracking and role-based management systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Package className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Easy Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Simple and intuitive parcel booking process with instant
                  confirmation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Real-time Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Track your parcels in real-time with detailed status updates
                  and location info.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Secure Handling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Your parcels are handled with utmost care and security
                  throughout the journey.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Fast Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Quick and reliable delivery service with time-bound
                  commitments.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-16">
          <AnimatedSection
            title="How It Works"
            description="Our streamlined process makes sending parcels incredibly easy. Simply book your delivery, pack your items, and we handle the rest. Our professional team ensures your parcels reach their destination safely and on time."
            gifUrl="/images/parcel-delivery-process-animation.jpg"
          />

          <AnimatedSection
            title="Secure & Reliable"
            description="We prioritize the safety of your parcels with secure packaging, insured deliveries, and professional handling. Our trained delivery personnel ensure your items are treated with care."
            gifUrl="/images/secure-delivery-animation.jpg"
          />
        </div>
      </section>

      {/* Top Enterprises */}
      <section className="mt-4 px-4">
        <h1 className="text-xl opacity-70 text-center">Top Enterprises</h1>
        <InfiniteBrandCarousel />
      </section>

      {/* FAQ */}
      <section className="w-full py-16 md:py-24">
        <FAQ />
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Send Your First Parcel?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands of satisfied customers who trust ParcelPro for their
            delivery needs.
          </p>
          <Link to="/register">
            <Button size="lg" variant="secondary">
              Create Account
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
