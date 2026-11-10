import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";
import type { SocialKey } from "@/data/portfolio";

const icons = {
  x: FaXTwitter,
  discord: FaDiscord,
  linkedin: FaLinkedinIn,
  telegram: FaTelegram,
  github: FaGithub,
  email: FaEnvelope,
} satisfies Record<SocialKey, unknown>;

export function SocialIcon({ name, className }: { name: SocialKey; className?: string }) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}
