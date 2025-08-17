import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
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

export default function EcoFooter() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { label: "AI Waste Sorting", href: "#waste" },
      { label: "Carbon Intelligence", href: "#carbon" },
      { label: "Community Challenges", href: "#community" },
      { label: "EcoCoins Rewards", href: "#rewards" },
      { label: "Environmental Alerts", href: "#alerts" }
    ],
    company: [
      { label: "About EcoSphere", href: "#about" },
      { label: "Our Mission", href: "#mission" },
      { label: "Climate Impact", href: "#impact" },
      { label: "Partnerships", href: "#partners" },
      { label: "Careers", href: "#careers" }
    ],
    resources: [
      { label: "Documentation", href: "#docs" },
      { label: "API Reference", href: "#api" },
      { label: "Help Center", href: "#help" },
      { label: "Environmental Blog", href: "#blog" },
      { label: "Case Studies", href: "#cases" }
    ],
    legal: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" },
      { label: "Environmental Compliance", href: "#compliance" },
      { label: "Data Security", href: "#security" }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Follow us on Twitter" },
    { icon: Github, href: "#", label: "Open source projects" },
    { icon: Linkedin, href: "#", label: "Connect on LinkedIn" },
    { icon: Mail, href: "#", label: "Contact us" }
  ];

  return (
    <footer className="bg-background-secondary border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-eco flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">EcoSphere AI</div>
                <div className="text-sm text-muted-foreground">Environmental Intelligence</div>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Transforming the world through AI-powered environmental intelligence. 
              Join millions creating a sustainable future with quantum-enhanced 
              waste sorting, predictive carbon analytics, and gamified eco-action.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold">Join the Environmental Revolution</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button className="btn-eco">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get weekly insights on environmental tech and sustainability tips.
              </p>
            </div>

            {/* Environmental Impact Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-background-card rounded-lg">
                <div className="text-lg font-bold text-eco-healthy">50M+ kg</div>
                <div className="text-xs text-muted-foreground">CO₂ Prevented</div>
              </div>
              <div className="text-center p-3 bg-background-card rounded-lg">
                <div className="text-lg font-bold text-eco-healthy">99.7%</div>
                <div className="text-xs text-muted-foreground">AI Accuracy</div>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-eco-healthy">Platform</h4>
            <ul className="space-y-2">
              {footerLinks.platform.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-eco-healthy transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-eco-healthy">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-eco-healthy transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-eco-healthy">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-eco-healthy transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-eco-healthy">Legal & Contact</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-eco-healthy transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Contact Info */}
            <div className="space-y-2 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hello@ecosphere.ai</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="w-4 h-4" />
                <span>Global Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Copyright & Credits */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {currentYear} EcoSphere AI. Made with{" "}
                <Heart className="w-4 h-4 inline text-eco-healthy" />{" "}
                for Planet Earth.
              </p>
              
              {/* Certifications */}
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  <Shield className="w-3 h-3 mr-1" />
                  Carbon Neutral
                </Badge>
                <Badge variant="outline" className="text-xs">
                  <Zap className="w-3 h-3 mr-1" />
                  100% Renewable
                </Badge>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow our journey:</span>
              <div className="flex items-center gap-2">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="w-9 h-9 p-0 hover:bg-eco-healthy/10"
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

      {/* Environmental Commitment Statement */}
      <div className="bg-gradient-eco text-white py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm font-medium">
            🌍 This website runs on 100% renewable energy and is carbon-negative certified. 
            Every page view plants a tree through our reforestation partners.
          </p>
        </div>
      </div>
    </footer>
  );
}