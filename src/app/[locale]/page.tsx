import CompanySection from "@/components/company-section";
import DestinationSection from "@/components/destination-section";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <main className="w-full max-w-[1600px] mx-auto px-8 pb-20 flex flex-col gap-20">
      <HeroSection />
      <CompanySection />
      <DestinationSection />
    </main>
  );
}
