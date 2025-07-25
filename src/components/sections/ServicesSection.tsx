import { Card, CardContent } from "@/components/ui/card";
import { servicesData } from "@/constants/data";
import { LucideIcon } from "lucide-react";
import * as icons from "lucide-react";

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-dental-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-poppins">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive dental care using the latest technology and techniques
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = icons[service.icon as keyof typeof icons] as LucideIcon;
            return (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 bg-gradient-card">
                <CardContent className="p-8 text-center">
                  <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 font-poppins">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
