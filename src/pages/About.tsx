import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Award, Users, Calendar } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Antonio Martinez",
      role: "Head Baker & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With 25 years of baking experience, Antonio brings traditional recipes with modern techniques."
    },
    {
      name: "Maria Rodriguez",
      role: "Pastry Chef",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Specializes in wedding cakes and intricate sugar art decorations."
    },
    {
      name: "David Chen",
      role: "Cake Designer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Creates stunning custom designs that bring customers' visions to life."
    }
  ];

  const milestones = [
    { year: "2003", title: "Antonio Bakery Founded", description: "Started as a small family bakery" },
    { year: "2008", title: "First Award", description: "Won 'Best Local Bakery' award" },
    { year: "2015", title: "Expanded Team", description: "Grew to 15 skilled bakers and decorators" },
    { year: "2020", title: "Online Ordering", description: "Launched online platform for easy ordering" },
    { year: "2024", title: "10,000+ Customers", description: "Celebrating over 10,000 happy customers" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Antonio Bakery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A story of passion, tradition, and the pursuit of creating the perfect cake for every celebration.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Antonio Bakery began in 2003 when Antonio Martinez, a passionate baker from a long line of bakers, 
                  decided to share his family's treasured recipes with the world. What started as a small neighborhood 
                  bakery has grown into the city's most beloved cake destination.
                </p>
                <p>
                  Our commitment to quality has never wavered. We use only the finest ingredients, from Madagascar 
                  vanilla beans to Belgian chocolate, ensuring every bite is a moment of pure joy. Each cake is 
                  crafted by hand with techniques passed down through generations, combined with modern innovations 
                  to create something truly special.
                </p>
                <p>
                  Today, we're proud to be part of thousands of celebrations, from intimate birthday parties to 
                  grand weddings. Every cake tells a story, and we're honored to help write yours.
                </p>
              </div>
              <Button variant="hero" size="lg">
                View Our Gallery
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/placeholder.svg?height=500&width=600"
                alt="Antonio in his bakery"
                className="rounded-3xl shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-vanilla/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Antonio Bakery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ChefHat, title: "Craftsmanship", desc: "Every cake is a work of art" },
              { icon: Award, title: "Quality", desc: "Only the finest ingredients" },
              { icon: Users, title: "Community", desc: "Part of your celebrations" },
              { icon: Calendar, title: "Tradition", desc: "Recipes passed down generations" }
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center bg-card border-0 shadow-soft">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The talented individuals who bring magic to every cake we create.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-warm transition-all duration-300 bg-card border-0">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-vanilla/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our sweet journey over the years.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-20 text-right">
                    <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;