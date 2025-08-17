import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Leaf, 
  Zap, 
  Droplets, 
  Wind, 
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

export default function EcoDashboard() {
  const environmentalHealth = 78;
  const weeklyGoal = 85;
  const carbonSaved = 234;
  const wasteRecycled = 45.8;

  return (
    <section id="dashboard" className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-8">
        {/* Dashboard Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold mb-2">Environmental Intelligence Dashboard</h2>
            <p className="text-xl text-muted-foreground">
              Real-time insights into your environmental impact and AI-powered recommendations
            </p>
          </div>
          <Button className="btn-eco">
            <Plus className="w-4 h-4 mr-2" />
            New Eco Action
          </Button>
        </div>

        {/* Environmental Health Meter */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="eco-card text-center p-8">
              <CardContent className="p-0">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="eco-meter w-full h-full rounded-full flex items-center justify-center">
                    <div className="bg-background rounded-full w-24 h-24 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-eco-healthy">{environmentalHealth}%</div>
                        <div className="text-xs text-muted-foreground">Health</div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Environmental Health</h3>
                <p className="text-sm text-muted-foreground">
                  Your local ecosystem is performing well with room for improvement
                </p>
                <Badge className="mt-4 status-healthy">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Trending Up
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Impact Stats */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            <Card className="eco-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Leaf className="w-5 h-5 text-eco-healthy" />
                  Carbon Saved
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-eco-healthy mb-2">{carbonSaved} kg</div>
                <p className="text-sm text-muted-foreground mb-3">This month</p>
                <Progress value={75} className="eco-progress" />
                <p className="text-xs text-muted-foreground mt-2">75% of monthly goal</p>
              </CardContent>
            </Card>

            <Card className="eco-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Recycle className="w-5 h-5 text-eco-healthy" />
                  Waste Recycled
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-eco-healthy mb-2">{wasteRecycled} kg</div>
                <p className="text-sm text-muted-foreground mb-3">This week</p>
                <Progress value={weeklyGoal} className="eco-progress" />
                <p className="text-xs text-muted-foreground mt-2">{weeklyGoal}% of weekly goal</p>
              </CardContent>
            </Card>

            <Card className="eco-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Zap className="w-5 h-5 text-eco-healthy" />
                  Energy Efficiency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-eco-healthy mb-2">92%</div>
                <p className="text-sm text-muted-foreground mb-3">Optimization score</p>
                <Badge className="status-healthy">Excellent</Badge>
              </CardContent>
            </Card>

            <Card className="eco-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="w-5 h-5 text-eco-healthy" />
                  Community Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-eco-healthy mb-2">12x</div>
                <p className="text-sm text-muted-foreground mb-3">Multiplier effect</p>
                <Badge className="status-healthy">High Impact</Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Feature Showcase */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* AI Waste Sorting */}
          <Card className="eco-card overflow-hidden">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={aiWasteSorting}
                alt="AI-powered waste sorting system"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="eco-coin">
                  <Camera className="w-3 h-3 mr-1" />
                  AI Vision
                </Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Recycle className="w-5 h-5 text-eco-healthy" />
                Quantum Waste AI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                99.7% accuracy in waste identification and sorting with molecular-level analysis.
              </p>
              <Button variant="outline" className="btn-eco-outline w-full">
                Scan Waste Now
              </Button>
            </CardContent>
          </Card>

          {/* Environmental Dashboard */}
          <Card className="eco-card overflow-hidden">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={environmentalDashboard}
                alt="Environmental intelligence dashboard"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="eco-coin">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Predictive
                </Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-eco-healthy" />
                Carbon Intelligence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                94% accurate 30-day carbon emission forecasting with real-time optimization.
              </p>
              <Button variant="outline" className="btn-eco-outline w-full">
                View Predictions
              </Button>
            </CardContent>
          </Card>

          {/* AR Recycling */}
          <Card className="eco-card overflow-hidden">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={arRecycling}
                alt="AR recycling interface"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="eco-coin">
                  <Target className="w-3 h-3 mr-1" />
                  AR Vision
                </Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-eco-healthy" />
                EcoCoins Rewards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Earn blockchain-verified rewards for every sustainable action you take.
              </p>
              <Button variant="outline" className="btn-eco-outline w-full">
                Earn Rewards
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Real-time Alerts */}
        <Card className="eco-card border-eco-warning/20 bg-gradient-to-r from-eco-warning/5 to-background">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-eco-warning">
              <Clock className="w-5 h-5" />
              Real-time Environmental Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-background rounded-lg">
                <Wind className="w-5 h-5 text-eco-warning mt-0.5" />
                <div>
                  <p className="font-medium">Air Quality Alert</p>
                  <p className="text-sm text-muted-foreground">
                    Pollution levels elevated in downtown area. Consider indoor activities.
                  </p>
                  <p className="text-xs text-muted-foreground">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-background rounded-lg">
                <Droplets className="w-5 h-5 text-eco-healthy mt-0.5" />
                <div>
                  <p className="font-medium">Water Conservation Opportunity</p>
                  <p className="text-sm text-muted-foreground">
                    Rain predicted tomorrow. Perfect time to set up water collection.
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