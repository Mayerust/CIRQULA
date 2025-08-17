import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Cpu, 
  Zap, 
  Database, 
  Network, 
  TrendingUp, 
  Award,
  Target,
  Clock,
  Users,
  Recycle,
  Camera,
  Plus,
  BarChart3
} from "lucide-react";
import environmentalDashboard from "@/assets/environmental-dashboard.jpg";
import aiWasteSorting from "@/assets/ai-waste-sorting.jpg";
import arRecycling from "@/assets/ar-recycling.jpg";

export default function QuantumDashboard() {
  const systemEfficiency = 78;
  const processingTarget = 85;
  const dataProcessed = 234;
  const resourcesOptimized = 45.8;

  return (
    <section id="dashboard" className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold mb-2">Quantum Intelligence Matrix</h2>
            <p className="text-xl text-muted-foreground">
              Real-time insights into system performance and algorithmic optimization metrics
            </p>
          </div>
          <Button className="quantum-btn">
            <Plus className="w-4 h-4 mr-2" />
            New Algorithm
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="quantum-card text-center p-8">
              <CardContent className="p-0">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="quantum-meter w-full h-full rounded-full flex items-center justify-center">
                    <div className="bg-background rounded-full w-24 h-24 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-quantum-primary">{systemEfficiency}%</div>
                        <div className="text-xs text-muted-foreground">Efficiency</div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">System Efficiency</h3>
                <p className="text-sm text-muted-foreground">
                  Quantum algorithms performing optimally with continuous learning enhancement
                </p>
                <Badge className="mt-4 status-optimal">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Optimizing
                </Badge>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            <Card className="quantum-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Cpu className="w-5 h-5 text-quantum-primary" />
                  Data Processed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-quantum-primary mb-2">{dataProcessed} TB</div>
                <p className="text-sm text-muted-foreground mb-3">This cycle</p>
                <Progress value={75} className="quantum-progress" />
                <p className="text-xs text-muted-foreground mt-2">75% of cycle target</p>
              </CardContent>
            </Card>

            <Card className="quantum-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Recycle className="w-5 h-5 text-quantum-primary" />
                  Resources Optimized
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-quantum-primary mb-2">{resourcesOptimized} PB</div>
                <p className="text-sm text-muted-foreground mb-3">This week</p>
                <Progress value={processingTarget} className="quantum-progress" />
                <p className="text-xs text-muted-foreground mt-2">{processingTarget}% of weekly target</p>
              </CardContent>
            </Card>

            <Card className="quantum-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Zap className="w-5 h-5 text-quantum-primary" />
                  Algorithm Precision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-quantum-primary mb-2">92%</div>
                <p className="text-sm text-muted-foreground mb-3">Accuracy score</p>
                <Badge className="status-optimal">Excellent</Badge>
              </CardContent>
            </Card>

            <Card className="quantum-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="w-5 h-5 text-quantum-primary" />
                  Network Effect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-quantum-primary mb-2">12x</div>
                <p className="text-sm text-muted-foreground mb-3">Amplification factor</p>
                <Badge className="status-optimal">High Performance</Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="quantum-card overflow-hidden">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={aiWasteSorting}
                alt="Quantum-enhanced pattern recognition system"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="quantum-badge">
                  <Camera className="w-3 h-3 mr-1" />
                  Quantum Vision
                </Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Recycle className="w-5 h-5 text-quantum-primary" />
                Pattern Recognition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                99.7% accuracy in molecular pattern identification with quantum-enhanced processing.
              </p>
              <Button variant="outline" className="quantum-outline w-full">
                Run Analysis
              </Button>
            </CardContent>
          </Card>

          <Card className="quantum-card overflow-hidden">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={environmentalDashboard}
                alt="Quantum algorithm optimization dashboard"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="quantum-badge">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Predictive
                </Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-quantum-primary" />
                Resource Intelligence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                94% accurate resource allocation forecasting with quantum optimization algorithms.
              </p>
              <Button variant="outline" className="quantum-outline w-full">
                View Predictions
              </Button>
            </CardContent>
          </Card>

          <Card className="quantum-card overflow-hidden">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={arRecycling}
                alt="Quantum processing interface"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="quantum-badge">
                  <Target className="w-3 h-3 mr-1" />
                  Quantum Processing
                </Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-quantum-primary" />
                Performance Rewards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Earn quantum credits for optimal algorithm performance and system efficiency.
              </p>
              <Button variant="outline" className="quantum-outline w-full">
                Earn Credits
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="quantum-card border-quantum-secondary/20 bg-gradient-to-r from-quantum-secondary/5 to-background">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-quantum-secondary">
              <Clock className="w-5 h-5" />
              Real-time System Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-background rounded-lg">
                <Network className="w-5 h-5 text-quantum-secondary mt-0.5" />
                <div>
                  <p className="font-medium">Network Optimization Complete</p>
                  <p className="text-sm text-muted-foreground">
                    Processing efficiency increased by 15% through algorithmic refinement.
                  </p>
                  <p className="text-xs text-muted-foreground">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-background rounded-lg">
                <Database className="w-5 h-5 text-quantum-primary mt-0.5" />
                <div>
                  <p className="font-medium">Resource Pool Expansion</p>
                  <p className="text-sm text-muted-foreground">
                    New quantum nodes added to processing matrix. Capacity increased 30%.
                  </p>
                  <p className="text-xs text-muted-foreground">5 minutes ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}