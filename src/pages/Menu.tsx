import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, ShoppingCart, Filter } from "lucide-react";
import { cakes } from "@/data/dummyData";
import { useState } from "react";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  
  const categories = ["All", "Birthday", "Wedding", "Special", "Eggless"];
  
  const filteredCakes = cakes.filter(cake => 
    selectedCategory === "All" || cake.category === selectedCategory
  );

  const sortedCakes = [...filteredCakes].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return b.featured ? 1 : -1;
    }
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Menu</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our delicious collection of handcrafted cakes, perfect for every occasion and celebration.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "hero" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            {/* Sort */}
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-input rounded-md bg-background text-foreground"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Cakes Grid */}
      <section className="py-16 bg-vanilla/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedCakes.map((cake) => (
              <Card key={cake.id} className="group hover:shadow-elegant transition-all duration-300 bg-card border-0 overflow-hidden">
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative overflow-hidden h-56">
                    <img 
                      src={cake.image}
                      alt={cake.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 space-y-2">
                      {cake.bestseller && (
                        <Badge className="bg-strawberry text-white text-xs">
                          Bestseller
                        </Badge>
                      )}
                      {cake.featured && (
                        <Badge className="bg-primary text-primary-foreground text-xs">
                          Featured
                        </Badge>
                      )}
                      {!cake.inStock && (
                        <Badge variant="secondary" className="text-xs">
                          Out of Stock
                        </Badge>
                      )}
                    </div>

                    {/* Price */}
                    <div className="absolute top-3 right-3 bg-card/95 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="font-bold text-foreground text-sm">${cake.price}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                        {cake.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                        {cake.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {cake.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs px-2 py-0">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Rating & Delivery */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{cake.rating}</span>
                        <span>({cake.reviews})</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{cake.deliveryTime}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button 
                      variant={cake.inStock ? "hero" : "outline"} 
                      size="sm"
                      className="w-full"
                      disabled={!cake.inStock}
                    >
                      <ShoppingCart className="h-3 w-3 mr-2" />
                      {cake.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="elegant" size="lg">
              Load More Cakes
            </Button>
          </div>
        </div>
      </section>

      {/* Custom Cake CTA */}
      <section className="py-16 bg-primary-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Don't See What You're Looking For?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              We specialize in custom cakes designed just for you. Share your vision and we'll bring it to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="elegant" size="lg" className="bg-white text-primary hover:bg-white/90">
                Request Custom Cake
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;