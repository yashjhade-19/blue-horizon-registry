import StatsCard from "@/components/StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trees, Award, Activity, MapPin, BarChart3 } from "lucide-react";

const Dashboard = () => {
  // Mock data for charts
  const carbonCreditsData = [
    { month: 'Jan', credits: 1200 },
    { month: 'Feb', credits: 1500 },
    { month: 'Mar', credits: 1800 },
    { month: 'Apr', credits: 2200 },
    { month: 'May', credits: 2800 },
    { month: 'Jun', credits: 3200 },
  ];

  const recentActivities = [
    { id: 1, activity: "New project verified in Costa Rica", time: "2 hours ago", status: "success" },
    { id: 2, activity: "Satellite data updated for Philippines project", time: "4 hours ago", status: "info" },
    { id: 3, activity: "Carbon credits issued for Indonesia mangroves", time: "1 day ago", status: "success" },
    { id: 4, activity: "Field verification pending in Kenya", time: "2 days ago", status: "warning" },
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
          title="Countries Covered"
          value="23"
          change="+2 new regions"
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
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Interactive map showing project locations</p>
                <p className="text-sm text-muted-foreground/70">64 active projects across 23 countries</p>
              </div>
            </div>
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
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Line chart showing monthly carbon credit generation</p>
                <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                  {carbonCreditsData.slice(-3).map((data, index) => (
                    <div key={index} className="text-center">
                      <div className="font-semibold text-foreground">{data.credits}</div>
                      <div className="text-muted-foreground">{data.month}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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