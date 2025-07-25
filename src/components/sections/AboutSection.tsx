import { Award, Star, Heart } from "lucide-react";
import dentistPortrait from "@/assets/dentist-portrait.jpg";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={dentistPortrait} 
              alt="Dr. R. Farid Rahman" 
              className="rounded-2xl shadow-card max-w-md mx-auto"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6 font-poppins">
              Meet Dr. R. Farid Rahman
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 15 years of experience in general and cosmetic dentistry, 
              Dr. Rahman is dedicated to providing high-quality, compassionate dental care 
              to the people of Madurai and surrounding areas.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Award className="h-6 w-6 text-primary mr-3" />
                <span className="font-medium">BDS from Tamil Nadu Government Dental College & Hospital</span>
              </div>
              <div className="flex items-center">
                <Star className="h-6 w-6 text-primary mr-3" />
                <span className="font-medium">15+ Years of Clinical Experience</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-6 w-6 text-primary mr-3" />
                <span className="font-medium">Member of Indian Dental Association (IDA)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
