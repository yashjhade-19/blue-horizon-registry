import StatsCard from "@/components/StatsCard";
import IndiaMap from "@/components/IndiaMap";
import CarbonCreditsChart from "@/components/CarbonCreditsChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trees, Award, Activity, MapPin } from "lucide-react";

const Dashboard = () => {

  const recentActivities = [
    { id: 1, activity: "New project verified in Kerala", time: "2 hours ago", status: "success" },
    { id: 2, activity: "Satellite data updated for Tamil Nadu project", time: "4 hours ago", status: "info" },
    { id: 3, activity: "Carbon credits issued for Maharashtra mangroves", time: "1 day ago", status: "success" },
    { id: 4, activity: "Field verification pending in Gujarat", time: "2 days ago", status: "warning" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor your blue carbon projects and track environmental impact
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Trees Verified"
          value="2.4M"
          change="+12% from last month"
          icon={Trees}
          trend="up"
        />
        <StatsCard
          title="Carbon Credits Generated"
          value="15,847"
          change="+8% from last month"
          icon={Award}
          trend="up"
        />
        <StatsCard
          title="Active Projects"
          value="64"
          change="+4 new projects"
          icon={Activity}
          trend="up"
        />
        <StatsCard
          title="States Covered"
          value="28"
          change="+3 new states"
          icon={MapPin}
          trend="up"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Map Section */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Project Locations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <IndiaMap />
          </CardContent>
        </Card>

        {/* Carbon Credits Chart */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Carbon Credits Growth
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CarbonCreditsChart />
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{activity.activity}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  activity.status === 'success' ? 'bg-success/10 text-success' :
                  activity.status === 'warning' ? 'bg-warning/10 text-warning' :
                  'bg-primary/10 text-primary'
                }`}>
                  {activity.status}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;