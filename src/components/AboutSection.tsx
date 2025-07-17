import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Award, Clock, Heart } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: ChefHat,
      title: "Expert Bakers",
      description: "Our skilled bakers have over 20 years of experience crafting perfect cakes."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "We use only the finest ingredients sourced from trusted suppliers."
    },
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "All our cakes are baked fresh daily to ensure maximum flavor and quality."
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every cake is crafted with passion and attention to detail."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                About <span className="text-primary">Antonio</span> Bakery
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For over two decades, Antonio Bakery has been crafting exceptional cakes 
                that bring joy to life's most precious moments. From intimate birthday 
                celebrations to grand wedding festivities, we pour our heart into every creation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to quality begins with carefully selected ingredients and 
                traditional baking techniques passed down through generations. Each cake 
                tells a story, and we're honored to be part of yours.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Our Story
              </Button>
              <Button variant="elegant" size="lg">
                Meet Our Team
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-warm transition-all duration-300 bg-card-gradient border-0">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;