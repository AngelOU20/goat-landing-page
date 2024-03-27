import { Poppins } from "next/font/google";
import { Raleway } from "next/font/google";
import { Navbar } from "./components/navbar";
import { FooterLanding } from "./components/footer";

type Props = {
  children: React.ReactNode;
};

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const LandingLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={`${poppins.className} h-full`}>
      <Navbar />
      {children}
      <FooterLanding />
    </div>
  );
};

export default LandingLayout;
