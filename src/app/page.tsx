import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyUs } from "@/components/sections/WhyUs";
import { Services } from "@/components/sections/Services";
import { Pricing } from "@/components/sections/Pricing";
import { Method } from "@/components/sections/Method";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <TrustBar />
      <WhyUs />
      <Services />
      <Pricing />
      <Method />
      <FAQ />
      <CTA />
    </main>
  );
}
