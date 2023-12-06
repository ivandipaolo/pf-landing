import Link from "next/link"

export const Header = () => {
  return (
    <>
      <div className="flex flex-row lg:justify-start items-center gap-12 justify-between self-start text-white z-10">
        <Link href="/">
          <span className="text-4xl lg:text-primary font-bold font-merriweather">antic</span>
        </Link>
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
