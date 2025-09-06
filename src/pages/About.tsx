import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Users, Target, Award } from "lucide-react";

const About = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">About Blue Carbon Registry</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Leading the global transition to sustainable coastal ecosystem management through innovative 
          monitoring, reporting, and verification technologies.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To empower coastal communities and organizations worldwide by providing cutting-edge tools 
              for monitoring, protecting, and monetizing blue carbon ecosystems. We bridge the gap between 
              environmental conservation and economic sustainability.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              A world where coastal ecosystems are valued, protected, and thriving through transparent, 
              technology-driven conservation efforts that generate sustainable income for local communities 
              while combating climate change.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* About the Solution */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>The Blue Carbon Solution</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Blue carbon ecosystems—including mangroves, seagrass beds, and salt marshes—are among the most 
            effective natural carbon sinks on Earth. Despite covering less than 2% of the ocean area, these 
            ecosystems sequester carbon at rates up to 10 times higher than terrestrial forests.
          </p>
          <p className="text-muted-foreground">
            Our comprehensive MRV (Monitoring, Reporting, and Verification) system combines satellite imagery, 
            IoT sensors, AI-powered analysis, and blockchain technology to create a transparent, verifiable 
            platform for blue carbon project management and carbon credit generation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="h-12 w-12 bg-gradient-ocean rounded-lg flex items-center justify-center mx-auto mb-2">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Community Driven</h3>
              <p className="text-sm text-muted-foreground">
                Empowering local communities to participate in and benefit from conservation efforts
              </p>
            </div>
            
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="h-12 w-12 bg-gradient-ocean rounded-lg flex items-center justify-center mx-auto mb-2">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Science Based</h3>
              <p className="text-sm text-muted-foreground">
                Rigorous scientific methodologies ensure accurate measurement and verification
              </p>
            </div>
            
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="h-12 w-12 bg-gradient-ocean rounded-lg flex items-center justify-center mx-auto mb-2">
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Impact Focused</h3>
              <p className="text-sm text-muted-foreground">
                Creating measurable environmental and social impact through technology
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">contact@bluecarbonregistry.org</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Address</p>
                  <p className="text-sm text-muted-foreground">
                    123 Ocean Conservation Way<br />
                    Blue Carbon City, BC 12345
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Subject</label>
                <Input placeholder="Subject of your message" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us how we can help you..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button className="w-full bg-gradient-hero hover:opacity-90 transition-smooth">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;