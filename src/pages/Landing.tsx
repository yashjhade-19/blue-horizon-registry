import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Shield, BarChart3, ArrowRight } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Blue Carbon Registry
            <span className="block text-primary">& MRV System</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Advanced monitoring, reporting, and verification system for coastal carbon ecosystems. 
            Track, verify, and monetize blue carbon projects with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/dashboard">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 transition-smooth shadow-elevated">
                View Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Comprehensive Blue Carbon Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Empowering coastal communities and organizations to monetize their blue carbon assets
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-elevated transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 bg-gradient-ocean rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Real-time Monitoring</h3>
                <p className="text-muted-foreground">
                  Track mangrove forests, seagrass beds, and salt marshes with satellite imagery and IoT sensors.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elevated transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 bg-gradient-ocean rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">MRV Compliance</h3>
                <p className="text-muted-foreground">
                  Automated monitoring, reporting, and verification ensuring compliance with international standards.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elevated transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 bg-gradient-ocean rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Carbon Credits</h3>
                <p className="text-muted-foreground">
                  Generate verified carbon credits from your blue carbon projects with transparent tracking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-ocean">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to start your blue carbon journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join the global movement to protect and monetize coastal ecosystems
          </p>
          <Link to="/dashboard">
            <Button size="lg" variant="secondary" className="shadow-elevated">
              Explore Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;