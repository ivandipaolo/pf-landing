import { Header, HeroSection } from "@/components"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className="flex flex-row justify-between min-h-screen">
        <header className="basis-1/2 flex flex-col">
          <Header />
          <HeroSection />
        </header>
        <Image
          className="basis-1/2 object-cover absolute top-0 right-0 max-h-screen min-h-screen w-1/2"
          src="/images/img-1.svg"
          alt="Lamps"
          width={200}
          height={200}
        />
      </div>
      <div>
        <h1>hola</h1>
      </div>
    </>
  )
}
