import { featuresData } from "@/constants/data";
import { LucideIcon } from "lucide-react";
import * as icons from "lucide-react";

export const WhyChooseUsSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-poppins">
            Why Choose Rahim Dental?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing exceptional dental care that exceeds your expectations.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => {
            const Icon = icons[feature.icon as keyof typeof icons] as LucideIcon || icons.HelpCircle;

            return (
              <div key={index} className="text-center group">
                <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-poppins">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
