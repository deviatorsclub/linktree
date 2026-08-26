import { HugeiconsIcon } from "@hugeicons/react";
import {
  Globe02Icon,
  Mail01Icon,
  DiscordIcon,
  InstagramIcon,
  Linkedin02Icon,
  WhatsappIcon,
  NewTwitterRectangleIcon,
} from "@hugeicons/core-free-icons";

// Interface for link data structure
export interface LinkData {
  name: string;
  icon: React.ComponentType<{
    className?: string;
    "aria-hidden"?: boolean | "true" | "false";
  }>;
  href: string;
  subline: string;
  color: string;
}

// Social media and contact links configuration
const links: LinkData[] = [
  {
    name: "Website",
    icon: (props) => <HugeiconsIcon icon={Globe02Icon} {...props} />,
    href: "https://www.deviators.club/",
    subline: "Visit our website",
    color: "#0047AB", // Cobalt blue
  },
  {
    name: "WhatsApp",
    icon: (props) => <HugeiconsIcon icon={WhatsappIcon} {...props} />,
    href: "https://chat.whatsapp.com/Fq2znTYctiq3cD4Y1ebHeR",
    subline: "Connect with us",
    color: "#25D366", // WhatsApp green
  },
  {
    name: "Instagram",
    icon: (props) => <HugeiconsIcon icon={InstagramIcon} {...props} />,
    href: "https://www.instagram.com/deviatorsclub/",
    subline: "Follow our updates",
    color: "#E91E63", // Instagram pink
  },
  {
    name: "Discord",
    icon: (props) => <HugeiconsIcon icon={DiscordIcon} {...props} />,
    href: "https://discord.gg/bJ8U5FTb29",
    subline: "Join our community",
    color: "#5865F2", // Discord blurple
  },
  {
    name: "LinkedIn",
    icon: (props) => <HugeiconsIcon icon={Linkedin02Icon} {...props} />,
    href: "https://linkedin.com/company/deviatorsclub",
    subline: "Professional network",
    color: "#0A66C2", // LinkedIn blue
  },
  {
    name: "X",
    icon: (props) => (
      <HugeiconsIcon icon={NewTwitterRectangleIcon} {...props} />
    ),
    href: "https://x.com/deviatorsclub",
    subline: "Follow us on X",
    color: "#000000", // X black
  },
  {
    name: "Gmail",
    icon: (props) => <HugeiconsIcon icon={Mail01Icon} {...props} />,
    href: "mailto:clubdeviators@gmail.com",
    subline: "(clubdeviators@gmail.com)",
    color: "#EA4335", // Gmail red
  },
];

export default links;

// Contact email for additional use
export const mailId = "clubdeviators@gmail.com";
