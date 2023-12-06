"use client"

import { cn } from "@/lib"
import { useState, useEffect } from "react"

export const Trends = () => {
  const [email, setEmail] = useState<string>("")
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false)

  useEffect(() => {
    if (isSubscribed) {
      setTimeout(() => {
        setIsSubscribed(false)
      }, 3000)
    }
  }, [isSubscribed])

  return (
    <div className="flex flex-col gap-7 lg:flex-row">
      <div className="flex flex-col gap-4 lg:basis-1/2">
        <h1 className="font-merriweather text-4xl text-tertiary lg:text-4xl md:w-5/6 font-light lg:text-extra">
          Be aware of the latest trends
        </h1>
        <p className="font-varta font-normal text-lg text-secondary">
          Stay informed of new trends, but also of our various offers.
        </p>
        <p className="font-karla text-lg text-primary font-bold ">
          Learn more &gt;
        </p>
      </div>
      <div className="flex flex-col gap-5 lg:basis-1/2 lg:flex-row items-center justify-center">
        <input
          className="p-2 h-10 text-base bg-input_background font-varta font-normal"
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          value={email}
          placeholder="email@address.com"
        />
        <button
          onClick={() => {
            setIsSubscribed(true)
            setEmail("")
          }}
          className={cn(
            "font-karla font-bold text-base lg:text-lg text-white bg-tertiary h-12 lg:w-fit lg:px-7 lg:py-3)",
            isSubscribed && "bg-subscribed"
          )}
        >
          {isSubscribed ? "Subscribed!" : "Subscribe"}
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
