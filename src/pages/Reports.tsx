import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, PieChart, TrendingUp, Globe } from "lucide-react";

const Reports = () => {
  const projectTypeData = [
    { type: "Mangrove Restoration", count: 28, percentage: 44 },
    { type: "Seagrass Conservation", count: 16, percentage: 25 },
    { type: "Salt Marsh Protection", count: 12, percentage: 19 },
    { type: "Kelp Forest Recovery", count: 8, percentage: 12 },
  ];

  const regionData = [
    { region: "Western India", projects: 24, credits: 4890 },
    { region: "Southern India", projects: 15, credits: 3124 },
    { region: "Eastern India", projects: 12, credits: 2567 },
    { region: "Northern India", projects: 8, credits: 1879 },
    { region: "Central India", projects: 5, credits: 1234 },
  ];

  const monthlyGrowth = [
    { month: "Jan", projects: 8, credits: 1245 },
    { month: "Feb", projects: 12, credits: 1876 },
    { month: "Mar", projects: 15, credits: 2341 },
    { month: "Apr", projects: 18, credits: 2987 },
    { month: "May", projects: 22, credits: 3654 },
    { month: "Jun", projects: 26, credits: 4231 },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
        <p className="text-muted-foreground">
          Comprehensive insights into blue carbon project performance and impact
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">34%</p>
                <p className="text-sm text-muted-foreground">Growth Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Globe className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">28</p>
                <p className="text-sm text-muted-foreground">States</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <BarChart3 className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">89%</p>
                <p className="text-sm text-muted-foreground">Verification Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <PieChart className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">4.2M</p>
                <p className="text-sm text-muted-foreground">CO2 Captured (tons)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Project Types Distribution */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-primary" />
              Project Types Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projectTypeData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ 
                        backgroundColor: `hsl(${195 + index * 30}, 70%, ${50 + index * 10}%)` 
                      }}
                    />
                    <span className="text-sm font-medium text-foreground">{item.type}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-foreground">{item.count}</div>
                    <div className="text-xs text-muted-foreground">{item.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                Pie chart visualization would appear here showing the distribution of project types
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Regional Distribution */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Regional Project Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {regionData.map((region, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">{region.region}</p>
                    <p className="text-sm text-muted-foreground">{region.projects} projects</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">{region.credits}</p>
                    <p className="text-xs text-muted-foreground">credits</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Growth Chart */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Monthly Growth Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center mb-6">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">Bar chart showing monthly project and credit growth</p>
            </div>
          </div>
          
          {/* Data Table */}
          <div className="grid grid-cols-6 gap-4">
            {monthlyGrowth.map((data, index) => (
              <div key={index} className="text-center p-3 bg-muted/20 rounded-lg">
                <p className="font-semibold text-foreground">{data.month}</p>
                <p className="text-sm text-muted-foreground">{data.projects} projects</p>
                <p className="text-sm text-primary font-medium">{data.credits} credits</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Impact Summary */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Environmental Impact Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-ocean rounded-lg text-primary-foreground">
              <p className="text-3xl font-bold mb-2">2.4M</p>
              <p className="text-sm opacity-90">Trees Protected/Restored</p>
            </div>
            <div className="text-center p-6 bg-gradient-ocean rounded-lg text-primary-foreground">
              <p className="text-3xl font-bold mb-2">15,847</p>
              <p className="text-sm opacity-90">Carbon Credits Generated</p>
            </div>
            <div className="text-center p-6 bg-gradient-ocean rounded-lg text-primary-foreground">
              <p className="text-3xl font-bold mb-2">1,256 ha</p>
              <p className="text-sm opacity-90">Ecosystem Area Covered</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;