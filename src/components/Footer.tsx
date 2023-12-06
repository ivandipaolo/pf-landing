import Image from "next/image"
import React from "react"
import { SocialNetworks } from "@/components"
import { footerSections } from "@/lib/"

export const Footer = () => {
  return (
    <div className="flex flex-col gap-10 text-center">
      <span className="text-4xl text-tertiary font-bold font-merriweather">
        antic
      </span>
      <div className="flex flex-col gap-10">
        {footerSections.map((section, index) => (
          <div key={index} className="flex flex-col gap-2 text-start">
            <h3 className="text-tertiary font-semibold text-2xl font-varta">
              {section.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {section.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary font-normal font-varta text-lg"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col text-start gap-6">
        <h3 className="text-tertiary font-semibold text-2xl font-varta">
          We respect our planet
        </h3>
        <Image src="/images/img-2.svg" alt="office" width={300} height={300} />
        <p className="font-varta font-normal text-lg text-black text-opacity-[45%]">
          We&rsquo;re taking positive steps to reduce our impact on the planet.
          For us, that means retailing responsibly. We&rsquo;ve set a number of
          goals to get us there.
        </p>
        <p className="font-karla text-lg text-primary font-bold ">
          Learn more &gt;
        </p>
        <div className="my-3">
          <SocialNetworks />
        </div>
        <div className="flex flex-row gap-x-4 gap-y-1 flex-wrap w-3/4 font-varta font-normal text-lg text-black text-opacity-[45%]">
          <p>Privacy policy</p>
          <p>Term of service</p>
          <p>Language</p>
        </div>
      </div>
      <p className="font-varta text-start text-secondary text-opacity-90 text-lg">
        © 2021 Agence Dnd
      </p>
    </div>
  )
}
