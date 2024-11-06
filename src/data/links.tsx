import { Globe } from "lucide-react";
import { FaDiscord, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const links = [
  {
    name: "Website",
    icon: Globe,
    href: "https://www.deviatorsdce.tech/",
    subline: "Visit our website",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Discord",
    icon: FaDiscord,
    href: "https://discord.gg/n9aDPwRK6N",
    subline: "Join our community",
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://chat.whatsapp.com/Fq2znTYctiq3cD4Y1ebHeR",
    subline: "Connect with us",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/deviatorsclub/",
    subline: "Follow our updates",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://linkedin.com/company/deviators-club",
    subline: "Professional network",
    color: "from-blue-600 to-blue-800",
  },
];

export default links;
export const mailId = "deviatorsclub5@gmail.com";
