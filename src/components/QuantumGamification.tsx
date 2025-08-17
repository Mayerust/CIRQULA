import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Trophy, 
  Cpu, 
  Star, 
  Target, 
  Zap, 
  Users, 
  Database,
  Recycle,
  Network,
  Activity,
  Crown,
  Gift,
  Calendar,
  TrendingUp
} from "lucide-react";

export default function QuantumGamification() {
  const [userLevel] = useState(12);
  const [currentXP] = useState(2850);
  const [nextLevelXP] = useState(3000);
  const [quantumCredits] = useState(2450);
  
  const achievements = [
    { icon: Recycle, title: "Algorithm Master", description: "Optimized 1000+ processes", earned: true, rarity: "gold" },
    { icon: Database, title: "Data Architect", description: "Processed 500TB data", earned: true, rarity: "platinum" },
    { icon: Network, title: "Network Optimizer", description: "Enhanced 10,000 connections", earned: true, rarity: "silver" },
    { icon: Activity, title: "Quantum Pioneer", description: "Achieved 99% efficiency", earned: false, rarity: "diamond" },
  ];

  const leaderboard = [
    { rank: 1, name: "QuantumMaster2024", avatar: "QM", points: 15650, badge: "crown" },
    { rank: 2, name: "AlgorithmWizard", avatar: "AW", points: 14200, badge: "star" },
    { rank: 3, name: "DataArchitect", avatar: "DA", points: 13800, badge: "trophy" },
    { rank: 4, name: "You", avatar: "YU", points: 12450, badge: "cpu" },
    { rank: 5, name: "SystemOptimizer", avatar: "SO", points: 11900, badge: "zap" },
  ];

  const challenges = [
    {
      title: "Quantum Efficiency Protocol",
      description: "Achieve 95% system efficiency for 7 consecutive cycles",
      progress: 65,
      reward: 500,
      timeLeft: "3 cycles",
      difficulty: "Expert"
    },
    {
      title: "Neural Network Expansion",
      description: "Optimize 50 processing nodes with quantum enhancement",
      progress: 20,
      reward: 1000,
      timeLeft: "12 cycles",
      difficulty: "Collective"
    },
    {
      title: "Resource Optimization Matrix",
      description: "Reduce computational waste by 30% this period",
      progress: 78,
      reward: 300,
      timeLeft: "8 cycles",
      difficulty: "Advanced"
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "diamond": return "text-blue-400";
      case "platinum": return "text-purple-400";
      case "gold": return "text-yellow-400";
      case "silver": return "text-gray-400";
      default: return "text-quantum-primary";
    }
  };

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case "crown": return Crown;
      case "star": return Star;
      case "trophy": return Trophy;
      case "cpu": return Cpu;
      case "zap": return Zap;
      default: return Target;
    }
  };

  return (
    <section id="community" className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Quantum Performance <span className="text-quantum-primary">Matrix</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced achievement system that rewards algorithmic excellence and system optimization. 
            Earn quantum credits and unlock enhanced processing capabilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="quantum-card lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-quantum flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl">Level {userLevel} Quantum Operator</div>
                  <div className="text-sm text-muted-foreground">
                    {currentXP} / {nextLevelXP} QXP to next level
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Progress to Level {userLevel + 1}</span>
                  <span className="text-sm text-muted-foreground">
                    {Math.round((currentXP / nextLevelXP) * 100)}%
                  </span>
                </div>
                <Progress value={(currentXP / nextLevelXP) * 100} className="quantum-progress h-3" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-background-secondary rounded-lg">
                  <div className="text-2xl font-bold text-quantum-primary">{quantumCredits}</div>
                  <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                    <Cpu className="w-4 h-4" />
                    Quantum Credits
                  </div>
                </div>
                <div className="text-center p-4 bg-background-secondary rounded-lg">
                  <div className="text-2xl font-bold text-quantum-primary">156</div>
                  <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                    <Trophy className="w-4 h-4" />
                    Achievements
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="quantum-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-quantum-primary" />
                Performance Store
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 border border-border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Processing Boost</span>
                  <span className="quantum-badge text-sm">500</span>
                </div>
                <p className="text-xs text-muted-foreground">2x speed for 24 hours</p>
              </div>
              
              <div className="p-3 border border-border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Neural Enhancement</span>
                  <span className="quantum-badge text-sm">2000</span>
                </div>
                <p className="text-xs text-muted-foreground">Advanced algorithm access</p>
              </div>
              
              <div className="p-3 border border-border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Quantum Module</span>
                  <span className="quantum-badge text-sm">1200</span>
                </div>
                <p className="text-xs text-muted-foreground">Premium optimization tools</p>
              </div>
              
              <Button className="quantum-btn w-full">
                <Gift className="w-4 h-4 mr-2" />
                Browse Enhancements
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="quantum-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-quantum-primary" />
              Active Optimization Challenges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="p-4 bg-background-secondary rounded-lg space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {challenge.difficulty}
                      </Badge>
                      <div className="flex items-center gap-1 text-quantum-primary">
                        <Cpu className="w-4 h-4" />
                        <span className="font-semibold">{challenge.reward}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold mb-1">{challenge.title}</h3>
                    <p className="text-sm text-muted-foreground">{challenge.description}</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Progress</span>
                      <span className="text-sm text-muted-foreground">{challenge.progress}%</span>
                    </div>
                    <Progress value={challenge.progress} className="quantum-progress" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {challenge.timeLeft} remaining
                    </div>
                    <Button size="sm" variant="outline" className="quantum-outline">
                      Optimize
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="quantum-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-quantum-primary" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-4 p-3 rounded-lg border ${
                      achievement.earned 
                        ? 'bg-background-secondary border-quantum-primary/20' 
                        : 'bg-background-card border-border opacity-60'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${
                      achievement.earned ? 'bg-gradient-quantum' : 'bg-muted'
                    }`}>
                      <achievement.icon className={`w-5 h-5 ${
                        achievement.earned ? 'text-white' : 'text-muted-foreground'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{achievement.title}</span>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getRarityColor(achievement.rarity)}`}
                        >
                          {achievement.rarity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                    {achievement.earned && (
                      <Trophy className="w-5 h-5 text-quantum-primary" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="quantum-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-quantum-primary" />
                Performance Leaderboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {leaderboard.map((player, index) => {
                  const BadgeIcon = getBadgeIcon(player.badge);
                  return (
                    <div 
                      key={index}
                      className={`flex items-center gap-4 p-3 rounded-lg ${
                        player.name === "You" 
                          ? 'bg-quantum-primary/10 border border-quantum-primary/20' 
                          : 'bg-background-secondary'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-6 text-center font-bold ${
                          player.rank <= 3 ? 'text-quantum-primary' : 'text-muted-foreground'
                        }`}>
                          #{player.rank}
                        </span>
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-gradient-quantum text-white text-xs">
                            {player.avatar}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`font-medium ${
                            player.name === "You" ? 'text-quantum-primary' : ''
                          }`}>
                            {player.name}
                          </span>
                          <BadgeIcon className="w-4 h-4 text-quantum-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {player.points.toLocaleString()} performance points
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <Button variant="outline" className="quantum-outline w-full mt-4">
                View Global Rankings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}