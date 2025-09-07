import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Activity, BarChart3, FileText, Home, Info, Map, Menu } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

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

function AppSidebar() {
  const { open } = useSidebar();
  const location = useLocation();

  return (
    <Sidebar className="border-r shadow-card bg-card/80 backdrop-blur-sm">
      <SidebarContent>
        <div className="p-6 border-b">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-gradient-ocean rounded-lg flex items-center justify-center">
              <Activity className="h-5 w-5 text-primary-foreground" />
            </div>
            {open && (
              <span className="ml-2 text-xl font-bold text-foreground">
                Blue Ledger
              </span>
            )}
          </div>
        </div>
        
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild>
                      <Link
                        to={item.href}
                        className={cn(
                          "flex items-center gap-3 text-sm font-medium transition-smooth",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        )}
                      >
                        <Icon className="h-5 w-5" />
                        {open && <span>{item.name}</span>}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gradient-sky flex w-full">
        {/* Header with toggle button */}
        <header className="fixed top-0 left-0 right-0 h-14 bg-card/80 backdrop-blur-sm border-b shadow-sm flex items-center px-4 z-50">
          <SidebarTrigger className="p-2 hover:bg-muted/50 rounded-lg transition-smooth" />
        </header>

        <AppSidebar />
        
        {/* Main Content Area */}
        <main className="flex-1 pt-14 overflow-auto">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;