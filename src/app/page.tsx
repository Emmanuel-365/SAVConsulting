import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { KeyFigures } from "@/components/sections/KeyFigures";
import { WhyUs } from "@/components/sections/WhyUs";
import { Services } from "@/components/sections/Services";
import { Expertise } from "@/components/sections/Expertise";
import { Pricing } from "@/components/sections/Pricing";
import { Method } from "@/components/sections/Method";
import { AdditionalServices } from "@/components/sections/AdditionalServices";
import { Security } from "@/components/sections/Security";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <TrustBar />
      <KeyFigures />
      <WhyUs />
      <Services />
      <Expertise />
      <Pricing />
      <Method />
      <AdditionalServices />
      <Security />
      <FAQ />
      <CTA />
    </main>
  );
}
