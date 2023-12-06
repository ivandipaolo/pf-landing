import Image from "next/image"

export const Inspirations = () => {
  return (
    <div className="flex-row hidden lg:flex font-varta font-normal text-lg text-secondary">
      <h1 className="font-merriweather text-5xl font-light text-tertiary basis-1/3">
        Inspirations
      </h1>
      <div className=" basis-[29%]">
        <p>
          Our experts are keen to stay on top of trends in order to offer you
          new inspirations for your interior and exterior every day. Remember
          that to inspire you we have to inspire ourselves and we want to share
          that with you.
        </p>
      </div>
      <div className="flex flex-col items-end basis-1/3 ">
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-start content-start items-start gap-3">
            <Image
              src="/icons/arrowleft.svg"
              alt="scrolldown"
              width={50}
              height={50}
              className="max-h-12 max-w-fit"
            />
            <Image
              src="/icons/arrowright.svg"
              alt="scrolldown"
              width={50}
              height={50}
              className="max-h-12 max-w-fit"
            />
          </div>
          <p className="text-opacity-90">01/05</p>
        </div>
      </div>
    </div>
  )
}
