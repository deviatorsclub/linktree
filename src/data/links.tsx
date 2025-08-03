import { Globe, Mail } from "lucide-react";
import { FaDiscord, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Interface for link data structure
export interface LinkData {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  subline: string;
  color: string;
}

// Social media and contact links configuration
const links: LinkData[] = [
  {
    name: "Website",
    icon: Globe,
    href: "https://www.deviatorsclub.tech/",
    subline: "Visit our website",
    color: "#0047AB", // Cobalt blue
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://chat.whatsapp.com/Fq2znTYctiq3cD4Y1ebHeR",
    subline: "Connect with us",
    color: "#25D366", // WhatsApp green
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/deviatorsclub/",
    subline: "Follow our updates",
    color: "#E91E63", // Instagram pink
  },
  {
    name: "Discord",
    icon: FaDiscord,
    href: "https://discord.gg/bJ8U5FTb29",
    subline: "Join our community",
    color: "#5865F2", // Discord blurple
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://linkedin.com/company/deviators-club",
    subline: "Professional network",
    color: "#0A66C2", // LinkedIn blue
  },
  {
    name: "X",
    icon: FaXTwitter,
    href: "https://x.com/deviatorsclub",
    subline: "Follow us on X",
    color: "#000000", // X black
  },
  {
    name: "Gmail",
    icon: Mail,
    href: "mailto:clubdeviators@gmail.com",
    subline: "Contact us on Gmail",
    color: "#EA4335", // Gmail red
  },
];

export default links;

// Contact email for additional use
export const mailId = "clubdeviators@gmail.com";
