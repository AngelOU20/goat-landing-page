import {
  iconSwim,
  iconWifi,
  iconBreakfast,
  iconGym,
  iconGameCenter,
  iconLight,
  iconLaundry,
  iconParking,
} from "@/public/images";
import Image from "next/image";

const services = [
  {
    name: "Piscina",
    icon: iconSwim,
  },
  {
    name: "Wifi",
    icon: iconWifi,
  },
  {
    name: "Desayuno",
    icon: iconBreakfast,
  },
  {
    name: "Gym",
    icon: iconGym,
  },
  {
    name: "Salón de entretenimiento",
    icon: iconGameCenter,
  },
  {
    name: "24/7 luz",
    icon: iconLight,
  },
  {
    name: "Lavanderia",
    icon: iconLaundry,
  },
  {
    name: "Estacionamiento",
    icon: iconParking,
  },
];

export const Services = () => {
  return (
    <section
      className="md:max-w-screen-2xl mx-auto text-center flex flex-col items-center scroll-mt-28"
      id="service"
    >
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Nuestros servicios
      </h2>
      <p className="text-sm md:text-base">
        Ofrecemos modernas instalaciones hoteleras para su comodidad
      </p>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-14">
        {services.map((service) => (
          <li
            className="h-40 w-44 md:h-60 md:w-64 bg-primary flex flex-col gap-y-4 items-center justify-center text-[#7C6A46] font-medium"
            key={service.name}
          >
            <Image
              src={service.icon}
              alt={`Imagen del servicio de ${service.name}`}
            />
            <span className="text-sm md:text-base">{service.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
