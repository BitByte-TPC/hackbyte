import Hero from "@/components/sections/hero-section"
import StatsSection from "@/components/sections/stats-section"
import MailingList from '../components/MailingList/index.jsx'
import WhyParticipate from "@/components/sections/WhyParticipate/WhyParticipate"

export default function Home() {
  return (      
    <main>
      <Hero />
      <StatsSection />
      <WhyParticipate />
      <MailingList />
    </main>
  );
}
