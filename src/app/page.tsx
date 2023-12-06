import { Header, HeroSection } from "@/components"
import { Carrousel } from "@/components/Carrousel"
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper"
import { Perks } from "@/components/Perks"
import { Trends } from "@/components/Trends"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="lg:basis-1/2 flex flex-col items-center lg:items-stretch z-20 lg:w-2/3 lg:min-h-screen">
        <Header />
        <HeroSection />
      </MaxWidthWrapper>
      <Image
        className="lg:basis-1/2 left-0 min-h-[580px] lg:object-cover absolute lg:left-auto top-0 lg:right-0 lg:max-h-screen lg:min-h-screen lg:w-1/2 z-0"
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
      <MaxWidthWrapper className="mb-5">
        {/* Todo: Image is over Perk's title on responsive */}
        <Perks />
      </MaxWidthWrapper>
      <MaxWidthWrapper className="bg-white pt-10">
        <Trends />
      </MaxWidthWrapper>
      <div className="bg-white"> 
        <Carrousel />
      </div>
      {/* Make inspiration here too */}
    </>
  )
}
