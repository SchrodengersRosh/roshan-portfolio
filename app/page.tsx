import { Hero } from "@/components/sections/Hero";
import { RangeStrip } from "@/components/sections/RangeStrip";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Experience } from "@/components/sections/Experience";
import { Campus } from "@/components/sections/Campus";
import { CurrentlyBuilding } from "@/components/sections/CurrentlyBuilding";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Rule } from "@/components/ui/Rule";

export default function Home() {
  return (
    <>
      <Hero />
      <RangeStrip />
      <Rule />
      <SelectedWork />
      <Rule />
      <Experience />
      <Rule />
      <Campus />
      <CurrentlyBuilding />
      <About />
      <Rule />
      <Contact />
    </>
  );
}
