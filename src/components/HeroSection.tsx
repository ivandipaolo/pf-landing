import Image from "next/image"

export const HeroSection = () => {
  return (
    <section className="flex flex-col gap-14 my-auto text-start w-7/12">
      <p className="font-varta text-primary">HOME DESIGN</p>
      <div className="flex flex-col gap-12">
        <h1 className="font-merriweather font-light text-primary text-6xl">
          Elegance for <p>Interiors &</p> <p> Exteriors</p>
        </h1>
        <p className="font-varta text-secondary text-2xl font-light">
          We provide everyone with modern, trendy, quality furniture
        </p>
      </div>
      <Image
        src="/icons/scrolldown.svg"
        alt="scrolldown"
        width={50}
        height={50}
        layout="responsive"
        className="max-h-12 max-w-fit"
      />
    </section>
  )
}
