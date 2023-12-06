import Image from "next/image"

interface ISocialNetwork {
  name: string
  iconPath: string
  href: string
}

export const SocialNetworks = () => {
  const socialNetworks: ISocialNetwork[] = [
    {
      name: "Facebook",
      iconPath: "/images/social-icons/Facebook.svg",
      href: "https://www.facebook.com/antic",
    },
    {
      name: "Twitter",
      iconPath: "/images/social-icons/Twitter.svg",
      href: "https://twitter.com/antic",
    },
    {
      name: "LinkedIn",
      iconPath: "/images/social-icons/LinkedIn.svg",
      href: "https://www.linkedin.com/in/antic/",
    },
    {
      name: "Instagram",
      iconPath: "/images/social-icons/instagram.svg",
      href: "https://www.instagram.com/antic/",
    },
  ]
  return (
    <div className="flex flex-row items-center justify-center gap-5 text-center text-white">
      {socialNetworks.map((network: ISocialNetwork) => (
        <a
          href={network.href}
          className="transition-colors duration-300 hover:text-black"
          target="_blank"
          key={network.name}
        >
          <Image
            src={network.iconPath}
            alt={network.name}
            width={30}
            height={30}
          />
        </a>
      ))}
    </div>
  )
}
