export const Trends = () => {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-4">
        <h1 className="font-merriweather text-4xl text-tertiary lg:text-7xl md:w-5/6 font-light lg:text-secondary">
          Be aware of the latest trends
        </h1>
        <p className="font-varta font-normal text-lg text-secondary">
          Stay informed of new trends, but also of our various offers.
        </p>
        <p className="font-karla text-lg text-primary font-bold ">
          Learn more &gt;
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <input
          className="p-2 h-10 text-base bg-input_background"
          type="text"
          placeholder="email@address.com"
        />
        <button className="font-karla font-bold text-base text-white bg-tertiary h-12">
          Subscribe
        </button>
      </div>
      <div className="flex flex-col gap-5 lg:hidden">
        <h1 className="font-merriweather text-4xl font-normal text-tertiary lg:text-7xl md:w-5/6 lg:text-secondary">
          Inspirations
        </h1>
        <p className="font-varta font-normal text-lg text-secondary">
          Our experts are keen to stay on top of trends in order to offer you
          new inspirations for your interior and exterior every day. Remember
          that to inspire you we have to inspire ourselves and we want to share
          that with you.
        </p>
      </div>
    </div>
  )
}
