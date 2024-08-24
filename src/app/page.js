export default function Home() {
  return (
    <main>
      <div className="flex flex-col lg:flex-row items-center lg:justify-center mt-52 lg:m-0 h-screen">
        <div>
          <img
            src="/brand-logo-dark.jpg"
            alt=""
            className="h-24 md:h-40 w-auto"
          />
        </div>
        <div className="text-center mt-10 animate-slidein ">
          <p className="mb-3 tracking-wide text-sm md:text-base">
            Something great is on the way
          </p>
          <h1 className="uppercase text-4xl md:text-5xl lg:text-6xl tracking-wider lg:tracking-widest font-extralight">
            Coming Soon
          </h1>
        </div>
      </div>
    </main>
  );
}
