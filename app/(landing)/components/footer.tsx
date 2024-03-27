import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const FooterLanding = () => {
  return (
    <footer className="bg-secondary w-full text-white">
      <div className="md:max-w-screen-2xl mx-auto ml-8 flex flex-wrap gap-x-32 py-12">
        <h3
          className={`${dancingScript.className} text-4xl font-semibold mb-10`}
        >
          Golden Arequipa Inn Irl
        </h3>

        <div className="flex flex-col gap-y-4 mt-4">
          <h5 className="text-lg font-medium">Quick links</h5>
          <ul className="flex flex-col gap-y-2 text-sm">
            <li>Room Boocking</li>
            <li>Rooms</li>
            <li>Contact</li>
            <li>Explore</li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-4 mt-4">
          <h5 className="text-lg font-medium">Compañia</h5>
          <ul className="flex flex-col gap-y-2 text-sm">
            <li>Política de privacidad</li>
            <li>Política de reembolso</li>
            <li>Sobre nosotros</li>
            <li>F.A.Q</li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-4 mt-4">
          <h5 className="text-lg font-medium">Redes sociales</h5>
          <ul className="flex flex-col gap-y-2 text-sm">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-end py-10 border-slate-200 border-t-[0.1px]">
        <p>Vista del paraíso 2024</p>
      </div>
    </footer>
  );
};
