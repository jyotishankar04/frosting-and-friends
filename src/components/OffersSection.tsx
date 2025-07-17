import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Percent, Gift, Clock } from "lucide-react";
import { coupons } from "@/data/dummyData";

const OffersSection = () => {
  return (
    <section className="py-20 bg-primary-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-white">
            Special <span className="text-warm-cream">Offers</span> & Deals
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Don't miss out on our amazing deals! Save more on your favorite cakes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Offer */}
          <Card className="lg:col-span-2 bg-card/95 backdrop-blur-sm border-0 shadow-elegant">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <Badge className="bg-strawberry text-white mb-2">
                    Limited Time
                  </Badge>
                  <h3 className="text-2xl font-bold text-foreground">
                    Weekend Special - 25% OFF
                  </h3>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Get 25% off on all birthday cakes this weekend! Perfect time to surprise 
                your loved ones with their favorite flavors. Valid till Sunday midnight.
              </p>
              
              <div className="flex items-center space-x-4">
                <Button variant="hero" size="lg">
                  Order Now
                </Button>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Ends in 2 days</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Coupon Codes */}
          <div className="space-y-6">
            {coupons.filter(coupon => coupon.active).map((coupon) => (
              <Card key={coupon.id} className="bg-card/95 backdrop-blur-sm border-0 shadow-soft">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Percent className="h-5 w-5 text-primary" />
                      <span className="font-bold text-lg text-foreground">
                        {coupon.code}
                      </span>
                    </div>
                    <Badge variant="outline">
                      Active
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      {coupon.type === 'percentage' 
                        ? `${coupon.value}% OFF` 
                        : `$${coupon.value} OFF`
                      }
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Min order: ${coupon.minOrder} • 
                      Expires: {new Date(coupon.expiry).toLocaleDateString()}
                    </p>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    Copy Code
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-card/95 backdrop-blur-sm border-0 shadow-elegant">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">
                  Never Miss a Sweet Deal!
                </h3>
                <p className="text-muted-foreground">
                  Subscribe to our newsletter and be the first to know about exclusive offers and new cake releases.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Button variant="hero">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;