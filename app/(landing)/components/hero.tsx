import ImageHero from "@/public/hero.png";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const Hero = () => {
  return (
    <section
      className="bg-primary pt-24 pb-20 md:pt-20 md:pb-14 scroll-mt-28"
      id="home"
    >
      <div className="md:max-w-screen-2xl mx-auto flex justify-center gap-x-5 md:gap-x-80">
        <div className="flex flex-col text-center md:text-left justify-center gap-y-8">
          <h1
            className={`${dancingScript.className} text-2xl md:text-4xl text-secondary font-semibold`}
          >
            Golden Arequipa Inn Irl
          </h1>
          <h2 className="text-4xl md:text-6xl font-semibold">
            Lujo asequible para tu escapada perfecta.
          </h2>
          <p className="text-sm md:text-base">
            Descubre el confort extraordinario en nuestro hostal, donde cada
            detalle está pensado para tu comodidad y satisfacción.
          </p>
        </div>
        <Image className="hidden md:block" src={ImageHero} alt="hero image" />
      </div>
    </section>
  );
};
