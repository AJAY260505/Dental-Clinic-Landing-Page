import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroDentist from "@/assets/hero-dentist.jpg";
import logo from "@/assets/logo.png";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero min-h-screen flex items-center overflow-hidden">
      {/* Logo + Clinic Name */}
      <div className="absolute top-4 left-4 z-50 flex items-center space-x-2 sm:space-x-4">
        <img 
          src={logo} 
          alt="Rahim Dental Logo" 
          className="h-12 w-auto sm:h-16"
        />
        <h1 className="text-white text-lg sm:text-2xl font-semibold font-poppins tracking-wide">
          Rahim Dental Clinic
        </h1>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins leading-tight">
              Your Smile, <br />
              <span className="text-dental-light">Our Passion</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Experience world-class dental care with our team of experienced professionals. 
              We combine modern technology with gentle, personalized treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Book Appointment Button */}
              <a href="#contact" className="inline-block scroll-smooth">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg"
                >
                  Book Appointment
                </Button>
              </a>

              {/* Call Now Button */}
              <a href="#contact" className="inline-block scroll-smooth">
                <Button 
                  size="lg" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img 
              src={heroDentist} 
              alt="Professional dentist" 
              className="rounded-2xl shadow-card max-w-full w-full sm:w-4/5 md:w-3/4 lg:w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
