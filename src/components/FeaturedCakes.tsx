import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, ShoppingCart } from "lucide-react";
import { cakes } from "@/data/dummyData";

const FeaturedCakes = () => {
  const featuredCakes = cakes.filter(cake => cake.featured);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Featured <span className="text-primary">Cakes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular and specially crafted cakes, perfect for any celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCakes.map((cake) => (
            <Card key={cake.id} className="group hover:shadow-elegant transition-all duration-300 bg-card border-0 overflow-hidden">
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={cake.image}
                    alt={cake.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 space-y-2">
                    {cake.bestseller && (
                      <Badge className="bg-strawberry text-white">
                        Bestseller
                      </Badge>
                    )}
                    {!cake.inStock && (
                      <Badge variant="secondary">
                        Out of Stock
                      </Badge>
                    )}
                  </div>

                  {/* Price */}
                  <div className="absolute top-4 right-4 bg-card/95 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="font-bold text-foreground">${cake.price}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {cake.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cake.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {cake.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Rating & Delivery */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{cake.rating}</span>
                      <span>({cake.reviews})</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{cake.deliveryTime}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    variant={cake.inStock ? "hero" : "outline"} 
                    className="w-full"
                    disabled={!cake.inStock}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {cake.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="elegant" size="lg">
            View All Cakes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCakes;