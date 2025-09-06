import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: "up" | "down" | "neutral";
}

const StatsCard = ({ title, value, change, icon: Icon, trend }: StatsCardProps) => {
  const trendColor = {
    up: "text-success",
    down: "text-destructive",
    neutral: "text-muted-foreground"
  }[trend];

  return (
    <Card className="shadow-card hover:shadow-elevated transition-smooth">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground">{value}</p>
            <p className={`text-xs ${trendColor}`}>{change}</p>
          </div>
          <div className="h-12 w-12 bg-gradient-ocean rounded-lg flex items-center justify-center">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;