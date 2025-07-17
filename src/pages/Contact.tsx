import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with us for orders, questions, or just to say hello!
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="bg-card border-0 shadow-soft">
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Send us a Message</h2>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-md border border-input bg-background"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-md border border-input bg-background"
                  />
                  <textarea 
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background"
                  />
                  <Button variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span>123 Baker Street, Sweet City, SC 12345</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <span>hello@antonio.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6 text-primary" />
                    <div>
                      <div>Mon-Sat: 8AM-9PM</div>
                      <div>Sunday: 10AM-6PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;