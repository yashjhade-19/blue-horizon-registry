import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Trees, Award } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      userName: "Maria Santos",
      coordinates: "14.5995° N, 120.9842° E",
      location: "Palawan, Philippines",
      areaSize: "45.2 ha",
      treesDetected: 12847,
      creditsGenerated: 1247,
      status: "Verified",
      projectType: "Mangrove Restoration"
    },
    {
      id: 2,
      userName: "James Wilson",
      coordinates: "9.7489° N, 83.7534° W",
      location: "Costa Rica",
      areaSize: "32.8 ha",
      treesDetected: 8934,
      creditsGenerated: 892,
      status: "Under Review",
      projectType: "Seagrass Conservation"
    },
    {
      id: 3,
      userName: "Fatima Al-Zahra",
      coordinates: "25.2048° N, 55.2708° E",
      location: "UAE",
      areaSize: "28.6 ha",
      treesDetected: 6521,
      creditsGenerated: 651,
      status: "Verified",
      projectType: "Salt Marsh Protection"
    },
    {
      id: 4,
      userName: "Carlos Rodriguez",
      coordinates: "10.4806° N, 66.9036° W",
      location: "Venezuela",
      areaSize: "67.3 ha",
      treesDetected: 18945,
      creditsGenerated: 1894,
      status: "Pending",
      projectType: "Mangrove Restoration"
    },
    {
      id: 5,
      userName: "Aisha Kone",
      coordinates: "4.0383° S, 39.6682° E",
      location: "Kenya",
      areaSize: "23.1 ha",
      treesDetected: 5234,
      creditsGenerated: 523,
      status: "Verified",
      projectType: "Mangrove Conservation"
    },
    {
      id: 6,
      userName: "Li Wei",
      coordinates: "22.3193° N, 114.1694° E",
      location: "Hong Kong",
      areaSize: "19.7 ha",
      treesDetected: 4782,
      creditsGenerated: 478,
      status: "Under Review",
      projectType: "Seagrass Restoration"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Verified":
        return "bg-success/10 text-success border-success/20";
      case "Under Review":
        return "bg-warning/10 text-warning border-warning/20";
      case "Pending":
        return "bg-muted/10 text-muted-foreground border-muted/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Projects</h1>
        <p className="text-muted-foreground">
          Overview of all blue carbon project submissions and their verification status
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-gradient-ocean rounded-lg flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{projects.length}</p>
                <p className="text-sm text-muted-foreground">Total Projects</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-gradient-ocean rounded-lg flex items-center justify-center">
                <Trees className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {projects.reduce((sum, p) => sum + p.treesDetected, 0).toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground">Total Trees</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-gradient-ocean rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {projects.reduce((sum, p) => sum + p.creditsGenerated, 0).toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground">Total Credits</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Projects Table */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Project Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <div className="grid gap-4">
              {/* Header */}
              <div className="hidden md:grid md:grid-cols-7 gap-4 p-4 bg-muted/50 rounded-lg text-sm font-medium text-muted-foreground">
                <div>User Name</div>
                <div>Location</div>
                <div>Area Size</div>
                <div>Trees Detected</div>
                <div>Credits Generated</div>
                <div>Project Type</div>
                <div>Status</div>
              </div>

              {/* Projects */}
              {projects.map((project) => (
                <div key={project.id} className="grid grid-cols-1 md:grid-cols-7 gap-4 p-4 border border-border rounded-lg hover:bg-muted/20 transition-smooth">
                  <div className="font-medium text-foreground">
                    <div className="md:hidden text-xs text-muted-foreground mb-1">User Name</div>
                    {project.userName}
                  </div>
                  <div className="text-sm">
                    <div className="md:hidden text-xs text-muted-foreground mb-1">Location</div>
                    <div className="font-medium text-foreground">{project.location}</div>
                    <div className="text-muted-foreground text-xs">{project.coordinates}</div>
                  </div>
                  <div className="text-sm">
                    <div className="md:hidden text-xs text-muted-foreground mb-1">Area Size</div>
                    <span className="font-medium text-foreground">{project.areaSize}</span>
                  </div>
                  <div className="text-sm">
                    <div className="md:hidden text-xs text-muted-foreground mb-1">Trees Detected</div>
                    <span className="font-medium text-foreground">{project.treesDetected.toLocaleString()}</span>
                  </div>
                  <div className="text-sm">
                    <div className="md:hidden text-xs text-muted-foreground mb-1">Credits Generated</div>
                    <span className="font-medium text-foreground">{project.creditsGenerated.toLocaleString()}</span>
                  </div>
                  <div className="text-sm">
                    <div className="md:hidden text-xs text-muted-foreground mb-1">Project Type</div>
                    <span className="text-muted-foreground">{project.projectType}</span>
                  </div>
                  <div>
                    <div className="md:hidden text-xs text-muted-foreground mb-1">Status</div>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Projects;