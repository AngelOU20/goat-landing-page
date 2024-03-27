import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { About } from "./components/about";
import { RoomTypes } from "./components/rooms";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-y-24 mb-40 mt-16">
      <Hero />
      <Services />
      <About />
      <RoomTypes />
    </main>
  );
};

export default LandingPage;
