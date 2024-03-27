export const About = () => {
  return (
    <section
      className="relative bg-about h-[520px] md:h-[700px] bg-cover bg-center w-full -z-10 flex scroll-mt-28"
      id="about"
    >
      <div className="absolute inset-0 bg-secondary opacity-50 -z-10"></div>
      <div className="md:max-w-screen-2xl mx-auto text-white flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-8">
          Sobre nosotros
        </h2>
        <p className="w-5/6 md:w-1/2 text-center text-sm md:text-base">
          Somos un acogedor hostal ubicado en Moquegua, Perú, donde combinamos
          la comodidad, el estilo y la hospitalidad para ofrecerte una
          experiencia de hospedaje inolvidable. Desde que abrimos nuestras
          puertas, nos hemos comprometido a proporcionar a nuestros huéspedes
          una estancia inigualable, donde puedan sentirse como en casa mientras
          exploran todo lo que nuestra encantadora ciudad tiene para ofrecer.
        </p>
      </div>
    </section>
  );
};
