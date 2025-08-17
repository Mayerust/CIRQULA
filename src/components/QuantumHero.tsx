import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Cpu, Zap, Users, Shield } from "lucide-react";
import ecoCityHero from "@/assets/eco-city-hero.jpg";

export default function QuantumHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden matrix-bg">
      <div className="absolute inset-0 z-0">
        <img 
          src={ecoCityHero}
          alt="Advanced quantum computing facility with circular economy systems"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/50" />
      </div>
      
      <div className="absolute inset-0 z-10">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="quantum-particle absolute w-1 h-6 bg-quantum-primary rounded-full opacity-20"
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.3}s`,
              animation: `matrix-scan 4s linear infinite ${i * 0.3}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="quantum-badge text-sm font-semibold">
                <Cpu className="w-4 h-4" />
                Advanced Quantum-Enhanced AI Platform
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                <span className="text-foreground">CIRQULA</span>
                <br />
                <span className="bg-gradient-quantum bg-clip-text text-transparent">MATRIX</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                Advanced circular economy platform powered by quantum-enhanced AI algorithms. 
                Mathematical precision meets resource optimization with <span className="text-quantum-primary font-semibold">99.7% algorithmic accuracy</span> 
                and predictive circular intelligence.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="quantum-btn text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                Initialize Matrix
              </Button>
              <Button variant="outline" size="lg" className="quantum-outline text-lg px-8 py-4">
                View Algorithms
              </Button>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-quantum-primary">99.7%</div>
                <div className="text-sm text-muted-foreground">Algorithm Precision</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-quantum-primary">45%</div>
                <div className="text-sm text-muted-foreground">Resource Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-quantum-primary">1M+</div>
                <div className="text-sm text-muted-foreground">Calculations/sec</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-quantum-primary">50M</div>
                <div className="text-sm text-muted-foreground">Data Points</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="quantum-card">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-quantum">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Quantum Processing Core</h3>
                  <p className="text-muted-foreground">
                    Advanced molecular-level analysis with quantum-enhanced pattern 
                    recognition and predictive resource optimization algorithms.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="quantum-card">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-matrix">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Neural Network Community</h3>
                  <p className="text-muted-foreground">
                    Distributed intelligence system where each user contributes to 
                    the collective learning matrix for optimal resource allocation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="quantum-card">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-quantum">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Cryptographic Verification</h3>
                  <p className="text-muted-foreground">
                    Immutable ledger system with quantum-resistant encryption ensuring 
                    transparent and secure circular economy transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}