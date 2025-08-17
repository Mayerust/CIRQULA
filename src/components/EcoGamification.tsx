import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Trophy, 
  Coins, 
  Star, 
  Target, 
  Zap, 
  Users, 
  Leaf,
  Recycle,
  Droplets,
  Wind,
  Crown,
  Gift,
  Calendar,
  TrendingUp
} from "lucide-react";

export default function EcoGamification() {
  const [userLevel] = useState(12);
  const [currentXP] = useState(2850);
  const [nextLevelXP] = useState(3000);
  const [ecoCoins] = useState(2450);
  
  const achievements = [
    { icon: Recycle, title: "Waste Warrior", description: "Sorted 1000+ items", earned: true, rarity: "gold" },
    { icon: Leaf, title: "Carbon Hero", description: "Saved 500kg CO₂", earned: true, rarity: "platinum" },
    { icon: Droplets, title: "Water Guardian", description: "Conserved 10,000L water", earned: true, rarity: "silver" },
    { icon: Wind, title: "Air Purifier", description: "Improved air quality 50x", earned: false, rarity: "diamond" },
  ];

  const leaderboard = [
    { rank: 1, name: "EcoMaster2024", avatar: "EM", points: 15650, badge: "crown" },
    { rank: 2, name: "GreenWarrior", avatar: "GW", points: 14200, badge: "star" },
    { rank: 3, name: "ClimateChamp", avatar: "CC", points: 13800, badge: "trophy" },
    { rank: 4, name: "You", avatar: "YU", points: 12450, badge: "leaf" },
    { rank: 5, name: "EcoNinja", avatar: "EN", points: 11900, badge: "recycle" },
  ];

  const challenges = [
    {
      title: "Zero Waste Week",
      description: "Reduce waste to zero for 7 consecutive days",
      progress: 65,
      reward: 500,
      timeLeft: "3 days",
      difficulty: "Expert"
    },
    {
      title: "Community Tree Planting",
      description: "Plant 50 trees with your local community",
      progress: 20,
      reward: 1000,
      timeLeft: "12 days",
      difficulty: "Group"
    },
    {
      title: "Energy Efficiency Master",
      description: "Reduce energy consumption by 30% this month",
      progress: 78,
      reward: 300,
      timeLeft: "8 days",
      difficulty: "Intermediate"
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "diamond": return "text-blue-400";
      case "platinum": return "text-purple-400";
      case "gold": return "text-yellow-400";
      case "silver": return "text-gray-400";
      default: return "text-eco-healthy";
    }
  };

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case "crown": return Crown;
      case "star": return Star;
      case "trophy": return Trophy;
      case "leaf": return Leaf;
      case "recycle": return Recycle;
      default: return Target;
    }
  };

  return (
    <section id="community" className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Gamified Sustainability <span className="text-eco-healthy">Revolution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Make environmental action as addictive as your favorite game. Earn rewards, 
            unlock achievements, and create viral impact with every sustainable choice.
          </p>
        </div>

        {/* Player Profile */}
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="eco-card lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-eco flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl">Level {userLevel} Eco Champion</div>
                  <div className="text-sm text-muted-foreground">
                    {currentXP} / {nextLevelXP} XP to next level
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
                <Progress value={(currentXP / nextLevelXP) * 100} className="eco-progress h-3" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-background-secondary rounded-lg">
                  <div className="text-2xl font-bold text-eco-healthy">{ecoCoins}</div>
                  <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                    <Coins className="w-4 h-4" />
                    EcoCoins
                  </div>
                </div>
                <div className="text-center p-4 bg-background-secondary rounded-lg">
                  <div className="text-2xl font-bold text-eco-healthy">156</div>
                  <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                    <Trophy className="w-4 h-4" />
                    Achievements
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* EcoCoins Marketplace */}
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-eco-healthy" />
                Rewards Store
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 border border-border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Tree Planting Kit</span>
                  <span className="eco-coin text-sm">500</span>
                </div>
                <p className="text-xs text-muted-foreground">Plant 5 native trees</p>
              </div>
              
              <div className="p-3 border border-border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Solar Panel Credit</span>
                  <span className="eco-coin text-sm">2000</span>
                </div>
                <p className="text-xs text-muted-foreground">$50 solar installation credit</p>
              </div>
              
              <div className="p-3 border border-border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Eco Product Bundle</span>
                  <span className="eco-coin text-sm">1200</span>
                </div>
                <p className="text-xs text-muted-foreground">Sustainable home products</p>
              </div>
              
              <Button className="btn-eco w-full">
                <Gift className="w-4 h-4 mr-2" />
                Browse All Rewards
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Active Challenges */}
        <Card className="eco-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-eco-healthy" />
              Active Environmental Challenges
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
                      <div className="flex items-center gap-1 text-eco-healthy">
                        <Coins className="w-4 h-4" />
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
                    <Progress value={challenge.progress} className="eco-progress" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {challenge.timeLeft} left
                    </div>
                    <Button size="sm" variant="outline" className="btn-eco-outline">
                      Join Challenge
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements & Leaderboard */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Achievements */}
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-eco-healthy" />
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
                        ? 'bg-background-secondary border-eco-healthy/20' 
                        : 'bg-background-card border-border opacity-60'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${
                      achievement.earned ? 'bg-gradient-eco' : 'bg-muted'
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
                      <Trophy className="w-5 h-5 text-eco-healthy" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Leaderboard */}
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-eco-healthy" />
                Global Leaderboard
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
                          ? 'bg-eco-healthy/10 border border-eco-healthy/20' 
                          : 'bg-background-secondary'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-6 text-center font-bold ${
                          player.rank <= 3 ? 'text-eco-healthy' : 'text-muted-foreground'
                        }`}>
                          #{player.rank}
                        </span>
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-gradient-eco text-white text-xs">
                            {player.avatar}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`font-medium ${
                            player.name === "You" ? 'text-eco-healthy' : ''
                          }`}>
                            {player.name}
                          </span>
                          <BadgeIcon className="w-4 h-4 text-eco-healthy" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {player.points.toLocaleString()} points
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <Button variant="outline" className="btn-eco-outline w-full mt-4">
                View Full Leaderboard
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}