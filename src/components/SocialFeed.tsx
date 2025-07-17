import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Instagram, Twitter } from "lucide-react";
import { socialPosts } from "@/data/dummyData";

const SocialFeed = () => {
  return (
    <section className="py-20 bg-vanilla/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Follow Our <span className="text-primary">Sweet Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with us on social media for behind-the-scenes content, new cake reveals, and customer celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {socialPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-warm transition-all duration-300 bg-card border-0 overflow-hidden">
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={post.image}
                    alt="Social media post"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Platform Badge */}
                  <div className="absolute top-4 left-4">
                    {post.platform === 'instagram' ? (
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Instagram className="h-5 w-5 text-white" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Twitter className="h-5 w-5 text-white" />
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-4">
                  <p className="text-foreground leading-relaxed">
                    {post.content}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm">{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-sm">12</span>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-foreground">
            Connect With Us
          </h3>
          <div className="flex justify-center space-x-6">
            <Button variant="outline" size="lg" className="space-x-2">
              <Instagram className="h-5 w-5" />
              <span>@antonio_bakery</span>
            </Button>
            <Button variant="outline" size="lg" className="space-x-2">
              <Twitter className="h-5 w-5" />
              <span>@AntonioCakes</span>
            </Button>
          </div>
          <p className="text-muted-foreground">
            Tag us in your photos with <span className="font-semibold text-primary">#AntonioCakes</span> for a chance to be featured!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;