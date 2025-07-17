import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroCake from "@/assets/hero-cake.jpg";

const HeroSection = () => {
  return (
    <section className="bg-hero-gradient min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Button variant="outline" size="sm" className="rounded-full">
                <Play className="h-3 w-3 mr-2" />
                Watch Video
              </Button>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                The Ideal{" "}
                <span className="text-primary relative">
                  Prepared
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full"></div>
                </span>
                <br />
                Cake Regular!
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                These cakes are made with butter or another fat, like vegetable 
                shortening. The common way is to mix the fat and sugar, then 
                add eggs, and then add flour.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-base">
                Read More
              </Button>
              <Button variant="elegant" size="lg" className="text-base">
                Order Now
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img 
                src={heroCake} 
                alt="Beautiful strawberry layered cake"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-strawberry/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-caramel/30 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;