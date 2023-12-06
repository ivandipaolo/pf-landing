import { Header, HeroSection } from "@/components"
import { Perks } from "@/components/Perks"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className="justify-between lg:min-h-screen">
        <div className="lg:basis-1/2 flex flex-col items-center lg:items-stretch z-20 lg:w-2/3">
          <Header />
          <HeroSection />
        </div>
        <Image
          className="lg:basis-1/2 left-0 min-h-max lg:object-cover absolute lg:left-auto top-0 lg:right-0 lg:max-h-screen lg:min-h-screen lg:w-1/2 z-0"
          src="/images/img-1.svg"
          alt="Lamps"
          width={1920}
          height={1080}
        />
        <Image
          src="/icons/contact.svg"
          alt="contact"
          width={50}
          height={50}
          className="lg:inline-block hidden max-h-12 border rounded-full text-white max-w-fit z-10 absolute top-10 right-10"
        />
      </div>
      <div>
        <Perks />
      </div>
    </>
  )
}
