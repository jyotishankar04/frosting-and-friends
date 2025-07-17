import { Card, CardContent } from "@/components/ui/card";
import { Cake, Cookie, Wheat, ChefHat } from "lucide-react";
import chocolateCupcake from "@/assets/chocolate-cupcake.jpg";
import artisanBread from "@/assets/artisan-bread.jpg";
import chocolateCookies from "@/assets/chocolate-cookies.jpg";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      title: "Chocolate Cake",
      description: "These cakes are made with butter",
      image: chocolateCupcake,
      icon: Cake,
      color: "chocolate",
    },
    {
      id: 2,
      title: "Cake",
      description: "These cakes are made with butter",
      image: chocolateCupcake,
      icon: ChefHat,
      color: "caramel",
    },
    {
      id: 3,
      title: "Cookies",
      description: "These Cookies another fat, like vegetable",
      image: chocolateCookies,
      icon: Cookie,
      color: "strawberry",
    },
    {
      id: 4,
      title: "Bread",
      description: "These Bread add eggs, and then add flour",
      image: artisanBread,
      icon: Wheat,
      color: "primary",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      chocolate: "bg-chocolate text-white",
      caramel: "bg-caramel text-white", 
      strawberry: "bg-strawberry text-white",
      primary: "bg-primary text-primary-foreground",
    };
    return colorMap[color as keyof typeof colorMap] || "bg-primary text-primary-foreground";
  };

  return (
    <section className="py-20 bg-vanilla/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <Card 
                key={product.id} 
                className="group hover:shadow-warm transition-all duration-300 bg-card-gradient border-0 overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Icon Overlay */}
                    <div className={`absolute top-4 right-4 w-12 h-12 rounded-full ${getColorClasses(product.color)} flex items-center justify-center shadow-soft`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;