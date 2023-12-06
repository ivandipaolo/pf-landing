import Image from "next/image"

export const HeroSection = () => {
  return (
    <section className="flex flex-col gap-5 text-white lg:gap-14 my-20 justify-center items-center text-center lg:items-stretch lg:justify-start lg:text-start w-full sm:w-3/4 lg:w-7/12 z-10">
      <p className="font-varta text-sm font-bold lg:text-primary">
        HOME DESIGN
      </p>
      <div className="flex flex-col gap-4">
        <h1 className="font-merriweather font-light lg:font-light lg:text-primary text-4xl lg:text-6xl leading-snug">
          <p> Elegance for</p> <p>Interiors &</p> <p> Exteriors</p>
        </h1>
        <p className="font-varta lg:text-secondary text-lg lg:text-2xl font-extralight lg:font-light">
          We provide everyone with modern, trendy, quality furniture
        </p>
      </div>
      <a href="#perks" className="w-fit ">
        <Image
          src="/icons/white-scrolldown.svg"
          alt="scrolldown"
          width={50}
          height={50}
          className="max-h-12 max-w-fit lg:hidden inline-block "
        />
        <Image
          src="/icons/scrolldown.svg"
          alt="scrolldown"
          width={50}
          height={50}
          className="max-h-12 max-w-fit hidden lg:inline-block"
        />
      </a>
    </section>
  )
}
