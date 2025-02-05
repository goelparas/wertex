import FooterSection from "@/components/ui/footer-section/footer-section";
import HeroSection from "@/components/ui/hero-section/hero-section";
import { withDeviceDetection } from "@/components/ui/hero-section/hero-section-wrapper";
import JoinSection from "@/components/ui/JoinSection/join-section";

export default function Home() {
  const HeroSectionNew = withDeviceDetection(HeroSection)
  const FooterSectionNew = withDeviceDetection(FooterSection)
  return (
    <>
    <HeroSectionNew />
    <JoinSection/>
    <FooterSectionNew/>
    </>
  );
}

