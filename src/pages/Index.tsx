import QuantumNavigation from "@/components/QuantumNavigation";
import QuantumHero from "@/components/QuantumHero";
import QuantumDashboard from "@/components/QuantumDashboard";
import QuantumGamification from "@/components/QuantumGamification";
import QuantumFooter from "@/components/QuantumFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <QuantumNavigation />
      <QuantumHero />
      <QuantumDashboard />
      <QuantumGamification />
      <QuantumFooter />
    </div>
  );
};

export default Index;