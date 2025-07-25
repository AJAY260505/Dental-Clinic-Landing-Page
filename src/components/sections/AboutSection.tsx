import { Award, Star, Heart } from "lucide-react";
import dentistPortrait from "@/assets/dentist-portrait.jpg";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <img 
              src={dentistPortrait} 
              alt="Dr. R. Farid Rahman" 
              className="rounded-2xl shadow-card w-full max-w-sm sm:max-w-md h-auto"
            />
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 font-poppins leading-tight">
              Meet Dr. R. Farid Rahman
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 15 years of experience in general and cosmetic dentistry, 
              Dr. Rahman is dedicated to providing high-quality, compassionate dental care 
              to the people of Madurai and surrounding areas.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 mr-3" />
                <span className="font-medium text-sm sm:text-base">
                  BDS from Tamil Nadu Government Dental College & Hospital
                </span>
              </div>
              <div className="flex items-start">
                <Star className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 mr-3" />
                <span className="font-medium text-sm sm:text-base">
                  15+ Years of Clinical Experience
                </span>
              </div>
              <div className="flex items-start">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 mr-3" />
                <span className="font-medium text-sm sm:text-base">
                  Member of Indian Dental Association (IDA)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
