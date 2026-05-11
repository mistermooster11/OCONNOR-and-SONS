import type { Metadata } from "next";
import ChannelSidebar from "@/components/custom/channel/ChannelSidebar";

export const metadata: Metadata = {
  title: "Electrical Services Overview",
  description:
    "Browse the full range of electrical services offered by O'Connor & Sons Electric in Palo Alto. Residential, commercial, remodeling, EV chargers, panel upgrades, and more.",
  alternates: { canonical: "https://oconnor-and-sons-electric.com/programs-crafts/programs" },
};
import ProgramsHero from "@/components/custom/programs/ProgramsHero";
import ProgramsOverview from "@/components/custom/programs/ProgramsOverview";
import ProgramsAccordion from "@/components/custom/programs/ProgramsAccordion";
import ProgramsPartners from "@/components/custom/programs/ProgramsPartners";
import { programsData } from "@/data/programs";

export default function ProgramsPage() {
  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <ProgramsHero data={programsData.hero} />

      <div className="channel-wrap">
        <div className="inner">
          <ChannelSidebar navItems={programsData.navItems} />

          <div className="channel-container">
            <ProgramsOverview data={programsData.overview} />
            <ProgramsAccordion items={programsData.programs} />
            <ProgramsPartners partners={programsData.partners} />
          </div>
        </div>
      </div>
    </main>
  );
}
