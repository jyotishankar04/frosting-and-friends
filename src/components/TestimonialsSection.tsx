import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { reviews } from "@/data/dummyData";

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-vanilla/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy customers have to say about their Antonio experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="group hover:shadow-warm transition-all duration-300 bg-card border-0">
              <CardContent className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${
                        i < review.rating 
                          ? "fill-yellow-400 text-yellow-400" 
                          : "text-gray-300"
                      }`} 
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {review.rating}.0
                  </span>
                </div>

                {/* Comment */}
                <p className="text-foreground leading-relaxed">
                  "{review.comment}"
                </p>

                {/* User Info */}
                <div className="flex items-center space-x-3 pt-4">
                  <img 
                    src={review.userAvatar}
                    alt={review.userName}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-foreground">
                      {review.userName}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(review.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                {/* Review Images */}
                {review.images.length > 0 && (
                  <div className="pt-4">
                    <img 
                      src={review.images[0]}
                      alt="Customer's cake"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center space-x-2 text-2xl font-bold text-foreground">
            <Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />
            <span>4.8</span>
            <span className="text-muted-foreground text-lg font-normal">
              average rating from 500+ reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;