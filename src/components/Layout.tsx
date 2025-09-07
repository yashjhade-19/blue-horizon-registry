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
    <div className="min-h-screen bg-gradient-sky flex">
      {/* Left Sidebar Navigation */}
      <nav className="w-64 bg-card/80 backdrop-blur-sm border-r shadow-card flex flex-col">
        <div className="p-6 border-b">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-gradient-ocean rounded-lg flex items-center justify-center">
              <Activity className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="ml-2 text-xl font-bold text-foreground">
              Blue Ledger
            </span>
          </div>
        </div>
        
        <div className="flex-1 py-6">
          <div className="space-y-2 px-3">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-smooth",
                    isActive
                      ? "bg-primary/10 text-primary border-r-2 border-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;