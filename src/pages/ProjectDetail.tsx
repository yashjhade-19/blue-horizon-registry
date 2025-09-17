import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import ProjectLocationMap from "@/components/ProjectLocationMap";
import { ArrowLeft, MapPin, Calendar, User, Trees, Award, Activity } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Enhanced project data with additional details
  const projects = [
    {
      id: 1,
      userName: "Priya Nair",
      coordinates: [9.9312, 76.2673] as [number, number],
      location: "Kochi, Kerala",
      areaSize: "45.2 ha",
      treesDetected: 12847,
      creditsGenerated: 1247,
      status: "Verified",
      projectType: "Mangrove Restoration",
      description: "Comprehensive mangrove restoration project focusing on native species revival in Kerala's backwaters. This initiative combines traditional knowledge with modern satellite monitoring to ensure sustainable ecosystem recovery.",
      startDate: "March 15, 2024",
      completionPercentage: 78,
      lastUpdated: "2 days ago",
      contactEmail: "priya.nair@blueledger.com",
      environmentalBenefits: [
        "12,847 trees planted and monitored",
        "1,247 carbon credits generated",
        "45.2 hectares of coastal area protected",
        "Enhanced biodiversity in backwater ecosystems"
      ],
      milestones: [
        { date: "March 2024", task: "Project initiation and site survey", completed: true },
        { date: "April 2024", task: "Community engagement and planning", completed: true },
        { date: "May 2024", task: "Mangrove planting phase 1", completed: true },
        { date: "June 2024", task: "Satellite monitoring setup", completed: false },
        { date: "July 2024", task: "Carbon credit verification", completed: false }
      ]
    },
    {
      id: 2,
      userName: "Rajesh Kumar",
      coordinates: [13.0827, 80.2707] as [number, number],
      location: "Chennai, Tamil Nadu",
      areaSize: "32.8 ha",
      treesDetected: 8934,
      creditsGenerated: 892,
      status: "Under Review",
      projectType: "Seagrass Conservation",
      description: "Innovative seagrass conservation project along Chennai's coastline, utilizing AI-powered monitoring systems to track growth patterns and carbon sequestration rates.",
      startDate: "February 20, 2024",
      completionPercentage: 65,
      lastUpdated: "5 hours ago",
      contactEmail: "rajesh.kumar@blueledger.com",
      environmentalBenefits: [
        "8,934 seagrass plants monitored",
        "892 carbon credits in verification",
        "32.8 hectares of marine habitat restored",
        "Improved coastal protection against erosion"
      ],
      milestones: [
        { date: "February 2024", task: "Marine survey and baseline study", completed: true },
        { date: "March 2024", task: "Seagrass transplantation", completed: true },
        { date: "April 2024", task: "Monitoring system deployment", completed: true },
        { date: "May 2024", task: "Growth assessment and documentation", completed: false },
        { date: "June 2024", task: "Carbon sequestration verification", completed: false }
      ]
    },
    {
      id: 3,
      userName: "Meera Patel",
      coordinates: [21.1702, 72.8311] as [number, number],
      location: "Surat, Gujarat",
      areaSize: "28.6 ha",
      treesDetected: 6521,
      creditsGenerated: 651,
      status: "Verified",
      projectType: "Salt Marsh Protection",
      description: "Salt marsh protection initiative in Gujarat's coastal region, focusing on preserving critical breeding grounds for migratory birds while maximizing carbon storage potential.",
      startDate: "January 10, 2024",
      completionPercentage: 92,
      lastUpdated: "1 week ago",
      contactEmail: "meera.patel@blueledger.com",
      environmentalBenefits: [
        "6,521 salt marsh plants protected",
        "651 verified carbon credits",
        "28.6 hectares of critical habitat preserved",
        "Support for 15+ migratory bird species"
      ],
      milestones: [
        { date: "January 2024", task: "Site assessment and protection planning", completed: true },
        { date: "February 2024", task: "Boundary marking and fencing", completed: true },
        { date: "March 2024", task: "Restoration of degraded areas", completed: true },
        { date: "April 2024", task: "Bird monitoring program setup", completed: true },
        { date: "May 2024", task: "Carbon credit verification", completed: true }
      ]
    },
    {
      id: 4,
      userName: "Arjun Deshmukh",
      coordinates: [19.0760, 72.8777] as [number, number],
      location: "Mumbai, Maharashtra",
      areaSize: "67.3 ha",
      treesDetected: 18945,
      creditsGenerated: 1894,
      status: "Pending",
      projectType: "Mangrove Restoration",
      description: "Large-scale mangrove restoration project in Mumbai's coastal areas, integrating urban planning with ecosystem restoration to create sustainable green corridors.",
      startDate: "April 5, 2024",
      completionPercentage: 45,
      lastUpdated: "3 days ago",
      contactEmail: "arjun.deshmukh@blueledger.com",
      environmentalBenefits: [
        "18,945 mangrove seedlings planted",
        "1,894 potential carbon credits",
        "67.3 hectares of urban coastline restored",
        "Enhanced flood protection for coastal communities"
      ],
      milestones: [
        { date: "April 2024", task: "Urban planning integration", completed: true },
        { date: "May 2024", task: "Community consultation meetings", completed: true },
        { date: "June 2024", task: "Seedling plantation drive", completed: false },
        { date: "July 2024", task: "Monitoring infrastructure setup", completed: false },
        { date: "August 2024", task: "Initial growth assessment", completed: false }
      ]
    },
    {
      id: 5,
      userName: "Lakshmi Reddy",
      coordinates: [15.9129, 79.7400] as [number, number],
      location: "Nellore, Andhra Pradesh",
      areaSize: "23.1 ha",
      treesDetected: 5234,
      creditsGenerated: 523,
      status: "Verified",
      projectType: "Mangrove Conservation",
      description: "Community-driven mangrove conservation project in Andhra Pradesh, combining traditional fishing practices with modern conservation techniques for sustainable livelihoods.",
      startDate: "December 1, 2023",
      completionPercentage: 88,
      lastUpdated: "4 days ago",
      contactEmail: "lakshmi.reddy@blueledger.com",
      environmentalBenefits: [
        "5,234 mangrove trees conserved",
        "523 verified carbon credits",
        "23.1 hectares of fishing grounds protected",
        "Sustainable livelihood support for 50+ families"
      ],
      milestones: [
        { date: "December 2023", task: "Community engagement and training", completed: true },
        { date: "January 2024", task: "Conservation area demarcation", completed: true },
        { date: "February 2024", task: "Sustainable fishing practice implementation", completed: true },
        { date: "March 2024", task: "Carbon assessment and documentation", completed: true },
        { date: "April 2024", task: "Credit verification and certification", completed: true }
      ]
    },
    {
      id: 6,
      userName: "Suresh Chatterjee",
      coordinates: [22.5726, 88.3639] as [number, number],
      location: "Kolkata, West Bengal",
      areaSize: "19.7 ha",
      treesDetected: 4782,
      creditsGenerated: 478,
      status: "Under Review",
      projectType: "Seagrass Restoration",
      description: "Seagrass restoration project in the Sundarbans region, focusing on creating resilient marine ecosystems that can withstand climate change impacts while supporting local fisheries.",
      startDate: "March 1, 2024",
      completionPercentage: 58,
      lastUpdated: "1 day ago",
      contactEmail: "suresh.chatterjee@blueledger.com",
      environmentalBenefits: [
        "4,782 seagrass shoots restored",
        "478 carbon credits under review",
        "19.7 hectares of marine habitat enhanced",
        "Improved fish breeding ground quality"
      ],
      milestones: [
        { date: "March 2024", task: "Baseline marine ecosystem study", completed: true },
        { date: "April 2024", task: "Seagrass transplantation phase 1", completed: true },
        { date: "May 2024", task: "Water quality monitoring setup", completed: true },
        { date: "June 2024", task: "Growth tracking and documentation", completed: false },
        { date: "July 2024", task: "Environmental impact assessment", completed: false }
      ]
    }
  ];

  const project = projects.find(p => p.id === parseInt(id || "0"));

  if (!project) {
    return (
      <div className="p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/projects")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

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
      {/* Breadcrumb Navigation */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink onClick={() => navigate("/projects")} className="cursor-pointer">
              Projects
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{project.userName} - {project.location}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate("/projects")}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <h1 className="text-3xl font-bold text-foreground">
              {project.userName} - {project.location}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Badge className={getStatusColor(project.status)}>
              {project.status}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {project.completionPercentage}% Complete
            </span>
          </div>
        </div>
      </div>

      {/* Project Description */}
      <Card className="shadow-card">
        <CardContent className="p-6">
          <p className="text-foreground leading-relaxed">{project.description}</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Basic Information */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Basic Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Project Manager</p>
                <p className="font-medium text-foreground">{project.userName}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Contact Email</p>
                <p className="font-medium text-foreground">{project.contactEmail}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium text-foreground">{project.location}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Coordinates</p>
                <p className="font-medium text-foreground">{project.coordinates[0]}°N, {project.coordinates[1]}°E</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Area</p>
                <p className="font-medium text-foreground">{project.areaSize}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Project Type</p>
                <p className="font-medium text-foreground">{project.projectType}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Environmental Impact */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trees className="h-5 w-5 text-primary" />
              Environmental Impact
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Trees/Plants</p>
                <p className="text-2xl font-bold text-foreground">{project.treesDetected.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Carbon Credits</p>
                <p className="text-2xl font-bold text-foreground">{project.creditsGenerated.toLocaleString()}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Environmental Benefits</p>
              <ul className="space-y-1">
                {project.environmentalBenefits.map((benefit, index) => (
                  <li key={index} className="text-sm text-foreground flex items-start gap-2">
                    <Award className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Timeline & Status */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Project Timeline
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-muted-foreground">Start Date</p>
                <p className="font-medium text-foreground">{project.startDate}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Last Updated</p>
                <p className="font-medium text-foreground">{project.lastUpdated}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-3">Project Milestones</p>
              <div className="space-y-3">
                {project.milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${
                      milestone.completed ? 'bg-success' : 'bg-muted'
                    }`} />
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${
                        milestone.completed ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {milestone.task}
                      </p>
                      <p className="text-xs text-muted-foreground">{milestone.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Project Location Map */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Project Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ProjectLocationMap 
              coordinates={project.coordinates}
              projectName={`${project.userName} - ${project.location}`}
              areaSize={project.areaSize}
              projectType={project.projectType}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectDetail;