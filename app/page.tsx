import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa6"

const BulletPoints = () => {
  return (
    <ul className="space-y-1 text-xl text-center md:text-left">
      <li>Based in Toronto, originally from Hangzhou, China </li>
      <li>Pursuing Masters in Economics</li>
      <li><a href="mailto:hui90785641@gmail.com">📧 let's get in touch!</a></li>
    </ul>
  )
}

const WavingHand = () => {
  return (
    <span className="animate-wave inline-block">🤚🏻</span>
  )
}

const socials = [
  {
    icon: <FaGithub />,
    href: "https://github.com/oldmercy"
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/huixu01/"
  }
]

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
      {/* little bio */}
      <div>
        <div className="text-center md:text-left mb-4">
          <h1 className="text-5xl">
            Hi, I'm <span className="bg-gradient-to-tl from-indigo-500 to-fuchsia-500 text-transparent bg-clip-text font-bold">Wenhui</span><WavingHand />
          </h1>
          <h2 className="text-3xl">I'm a data-scientist and economist.</h2>
        </div>
        <BulletPoints />
        {/* socials */}
        
      </div>
      <ul className="flex flex-col text-3xl gap-10 mt-4">
        {socials.map((social, index) => (
          <li key={index} className="hover:scale-125 hover:text-white transition-all ease-in-out"><Link href={social.href} target="_blank">{social.icon}</Link></li>
        ))}
      </ul>
    </div>
  );
}
