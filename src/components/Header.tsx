import Image from "next/image"
import Link from "next/link"

export const Header = () => {
  return (
    <>
      <div className="flex flex-row lg:justify-start items-center gap-12 w-full lg:w-auto justify-between self-start text-white z-10">
        <Link href="/">
          <span className="text-3xl lgÑtext-4xl lg:text-primary font-bold font-merriweather">
            antic
          </span>
        </Link>
        <Image
          src="/icons/burgermenu.svg"
          alt="scrolldown"
          width={50}
          height={50}
          layout="responsive"
          className="max-h-12 max-w-fit lg:hidden"
        />
        <nav className="lg:flex flex-row font-varta text-secondary gap-5 mt-3.5 text-lg font-normal hidden">
          <p>Products</p>
          <p>Rooms</p>
          <p>Services</p>
          <p>Inspirations</p>
        </nav>
      </div>
    </>
  )
}
