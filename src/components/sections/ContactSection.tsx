import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { contactInfo } from "@/constants/data";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-dental-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Appointment Form */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6 font-poppins">
              Book Your Appointment
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to start your journey to a healthier, more beautiful smile?
              Schedule your consultation today.
            </p>
            <Card className="shadow-card border-0">
              <CardContent className="p-8">
                <form
                  action="https://formspree.io/f/xkgwnpza"
                  method="POST"
                  className="space-y-6"
                >
                  <input type="hidden" name="_redirect" value="/thank-you" />
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-foreground font-medium">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-foreground font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Your phone number"
                        className="mt-2"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="date" className="text-foreground font-medium">
                      Preferred Appointment Date
                    </Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Additional Notes
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your dental concerns or questions"
                      className="mt-2"
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 font-semibold py-6"
                  >
                    Schedule Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right: Contact Info & Map */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 font-poppins">
              Visit Our Clinic
            </h3>

            {/* Contact Info */}
            <Card className="shadow-card border-0 mb-8">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Address</h4>
                      {contactInfo.address.lines.map((line, index) => (
                        <p key={index} className="text-muted-foreground">{line}</p>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
                      {contactInfo.hours.lines.map((line, index) => (
                        <p key={index} className="text-muted-foreground">{line}</p>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground">{contactInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">{contactInfo.email}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps Embed with Directions */}
            <Card className="shadow-card border-0 overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  title="Clinic Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.997535271587!2d80.1994!3d13.0522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52669ea2a2db15%3A0xc6a84b15b3c87f6f!2sYour%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1716477778997!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[300px]"
                />
                <div className="flex justify-center p-4 bg-white">
                  <a
                    href="https://maps.app.goo.gl/TQYgX8sAtd53cawv9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-primary/90 transition"
                  >
                    📍 Get Directions
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
