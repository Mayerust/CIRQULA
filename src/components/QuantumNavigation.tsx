import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cpu, Menu, X, Zap, Users, BarChart3, Award } from "lucide-react";
import { useState } from "react";

export default function QuantumNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Matrix", href: "#dashboard", icon: BarChart3 },
    { label: "Algorithms", href: "#sorting", icon: Zap },
    { label: "Neural Net", href: "#community", icon: Users },
    { label: "Optimization", href: "#rewards", icon: Award },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-quantum flex items-center justify-center animate-quantum-pulse">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold">CIRQULA</div>
              <div className="text-xs text-muted-foreground">Quantum Intelligence</div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="nav-quantum flex items-center gap-2 text-sm font-medium"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Badge className="hidden sm:flex quantum-badge">
              <Zap className="w-3 h-3 mr-1" />
              1,247 Qubits
            </Badge>
            
            <Button size="sm" className="quantum-btn hidden lg:flex">
              Access Matrix
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="px-6 py-4 space-y-4">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="nav-quantum flex items-center gap-3 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </a>
              ))}
              
              <div className="pt-4 border-t border-border">
                <Button className="quantum-btn w-full">
                  Access Matrix
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}