type Perk = {
  title: string
  description: string
}

export const Perks = () => {
  const perks: Perk[] = [
    {
      title: "Our Advices",
      description:
        "What if you took advantage of this rather special period to rethink your interior? You spend more time at home so you might as well feel good there.",
    },
    {
      title: "Click and Collect",
      description:
        "Adapted and contactless. Free from € 200 of purchases in stores offering the service.",
    },
    {
      title: "Conception Service",
      description:
        "Personalized service with an expert advisor for your interior and exterior decoration or layout projects. ",
    },
    {
      title: "Installation Service",
      description:
        "Our furniture packaged in flat packs are designed for easy assembly. But you can call on our partner.",
    },
  ]

  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <div className="flex flex-col gap-8 lg:basis-1/2 lg:gap-12">
        <h1 className="font-merriweather text-4xl text-tertiary lg:text-7xl md:w-5/6 font-light lg:text-secondary">
          We stay by your side to design your projects
        </h1>
        <p className="font-lato text-lg text-primary font-extrabold">
          Find out more &gt;
        </p>
      </div>
      <div className="flex flex-col flex-wrap gap-8 lg:basis-1/2 lg:flex-row lg:flex-wrap lg:p-5">
        {perks.map((perk, index) => (
          <div key={index} className="flex flex-col gap-1 font-varta lg:w-5/12 lg:gap-3">
            <h2 className="text-primary text-2xl font-semibold lg:text-3xl lg:font-medium">
              {perk.title}
            </h2>
            <p className="font-varta text-lg text-secondary lg:text-xl">
              {perk.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
