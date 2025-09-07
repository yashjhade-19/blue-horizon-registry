import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Activity, BarChart3, FileText, Home, Info, Map } from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Dashboard", href: "/dashboard", icon: Activity },
  { name: "Projects", href: "/projects", icon: Map },
  { name: "Reports", href: "/reports", icon: BarChart3 },
  { name: "About", href: "/about", icon: Info },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-sky">
      <nav className="bg-card/80 backdrop-blur-sm border-b shadow-card sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Logo/Brand */}
            <div className="flex items-center">
              <div className="h-8 w-8 bg-gradient-ocean rounded-lg flex items-center justify-center">
                <Activity className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="ml-2 text-xl font-bold text-foreground">
                Blue Ledger
              </span>
            </div>

            {/* Right side - Navigation */}
            <div className="hidden sm:flex sm:space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-smooth",
                      isActive
                        ? "border-primary text-primary"
                        : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                    )}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default Layout;