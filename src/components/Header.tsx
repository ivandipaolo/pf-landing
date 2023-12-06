import Link from "next/link"

export const Header = () => {
  return (
      <div className="flex flex-row items-center gap-8">
        <Link href="/">
          <span className="text-4xl text-primary font-bold">antic</span>
        </Link>
        <div className="flex flex-row font-varta text-secondary gap-5 mt-3.5 text-lg font-normal">
          <p>Products</p>
          <p>Rooms</p>
          <p>Services</p>
          <p>Inspirations</p>
        </div>
      </div>     
  )
}
