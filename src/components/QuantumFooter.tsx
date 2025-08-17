import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Cpu, 
  Twitter, 
  Github, 
  Linkedin, 
  Mail,
  MapPin,
  Phone,
  Globe,
  Shield,
  Zap,
  Heart
} from "lucide-react";

export default function QuantumFooter() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { label: "Algorithm Suite", href: "#algorithms" },
      { label: "Quantum Processing", href: "#quantum" },
      { label: "Neural Networks", href: "#neural" },
      { label: "Performance Credits", href: "#credits" },
      { label: "System Optimization", href: "#optimization" }
    ],
    company: [
      { label: "About CIRQULA", href: "#about" },
      { label: "Research Mission", href: "#mission" },
      { label: "Performance Impact", href: "#impact" },
      { label: "Strategic Partners", href: "#partners" },
      { label: "Join Team", href: "#careers" }
    ],
    resources: [
      { label: "Documentation", href: "#docs" },
      { label: "API Reference", href: "#api" },
      { label: "Support Center", href: "#help" },
      { label: "Algorithm Library", href: "#library" },
      { label: "Performance Studies", href: "#studies" }
    ],
    legal: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Data Processing", href: "#data" },
      { label: "Algorithm Ethics", href: "#ethics" },
      { label: "Security Protocols", href: "#security" }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Follow research updates" },
    { icon: Github, href: "#", label: "Open source algorithms" },
    { icon: Linkedin, href: "#", label: "Professional network" },
    { icon: Mail, href: "#", label: "Contact research team" }
  ];

  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-quantum flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">CIRQULA</div>
                <div className="text-sm text-muted-foreground">Quantum Intelligence</div>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Advanced circular economy platform powered by quantum-enhanced algorithms. 
              Mathematical precision meets resource optimization through distributed 
              intelligence networks and predictive modeling systems.
            </p>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Join the Intelligence Network</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button className="quantum-btn">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get weekly insights on quantum algorithms and optimization research.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-background-card rounded-lg">
                <div className="text-lg font-bold text-quantum-primary">50M+ ops</div>
                <div className="text-xs text-muted-foreground">Operations/sec</div>
              </div>
              <div className="text-center p-3 bg-background-card rounded-lg">
                <div className="text-lg font-bold text-quantum-primary">99.7%</div>
                <div className="text-xs text-muted-foreground">Precision Rate</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-quantum-primary">Platform</h4>
            <ul className="space-y-2">
              {footerLinks.platform.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-quantum-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-quantum-primary">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-quantum-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-quantum-primary">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-quantum-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-quantum-primary">Legal & Contact</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-quantum-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="space-y-2 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>research@cirqula.ai</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Quantum Labs, CA</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="w-4 h-4" />
                <span>Global Network</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {currentYear} CIRQULA. Engineered with{" "}
                <Heart className="w-4 h-4 inline text-quantum-primary" />{" "}
                for optimal performance.
              </p>
              
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  <Shield className="w-3 h-3 mr-1" />
                  Quantum Secured
                </Badge>
                <Badge variant="outline" className="text-xs">
                  <Zap className="w-3 h-3 mr-1" />
                  Zero Latency
                </Badge>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Connect with research:</span>
              <div className="flex items-center gap-2">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="w-9 h-9 p-0 hover:bg-quantum-primary/10"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-quantum text-white py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm font-medium">
            This platform runs on 100% renewable quantum processors with zero-waste optimization. 
            Every computation cycle contributes to resource efficiency research.
          </p>
        </div>
      </div>
    </footer>
  );
}