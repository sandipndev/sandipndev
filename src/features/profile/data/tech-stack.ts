import type { TechStack } from "../types/tech-stack";

export const TECH_STACK: TechStack[] = [
  {
    key: "rust",
    title: "Rust",
    href: "https://www.rust-lang.org/",
    categories: ["Language", "Backend"],
    theme: true,
  },
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language", "Frontend"],
  },
  {
    key: "bash",
    title: "Bash",
    href: "https://www.gnu.org/software/bash/",
    categories: ["Language", "Scripting", "DevOps"],
  },
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    categories: ["Language", "Scripting"],
  },

  // Backend
  {
    key: "postgresql",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    categories: ["Database"],
  },
  {
    key: "redis",
    title: "Redis",
    href: "https://redis.io/",
    categories: ["Cache", "Database"],
  },

  // Infrastructure & DevOps
  {
    key: "terraform",
    title: "Terraform",
    href: "https://www.terraform.io/",
    categories: ["Infrastructure", "DevOps"],
  },
  {
    key: "kubernetes",
    title: "Kubernetes",
    href: "https://kubernetes.io/",
    categories: ["Infrastructure", "DevOps"],
  },
  {
    key: "helm",
    title: "Helm",
    href: "https://helm.sh/",
    categories: ["Infrastructure", "DevOps"],
  },
  {
    key: "nix",
    title: "Nix",
    href: "https://nixos.org/",
    categories: ["Infrastructure", "Build System", "Operating System"],
  },
  {
    key: "nginx",
    title: "NGINX",
    href: "https://nginx.org/",
    categories: ["Networking", "Web Server"],
  },
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    categories: ["Containerization", "DevOps"],
  },
  {
    key: "podman",
    title: "Podman",
    href: "https://podman.io/",
    categories: ["Containerization", "DevOps"],
  },
  {
    key: "github_actions",
    title: "GitHub & Github Actions",
    href: "https://github.com/features/actions",
    categories: ["CI/CD", "DevOps"],
    theme: true,
  },

  // Frontend
  {
    key: "nextjs",
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Frontend", "Framework"],
    theme: true,
  },
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    categories: ["Frontend", "Library"],
  },
  {
    key: "tailwind",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Frontend", "Styling"],
  },
  {
    key: "chadcn",
    title: "ChadCN UI",
    href: "https://ui.shadcn.com/",
    categories: ["Frontend", "UI Library"],
  },
  {
    key: "storybook",
    title: "Storybook",
    href: "https://storybook.js.org/",
    categories: ["Frontend", "Design System"],
  },

  // Cloud & APIs
  {
    key: "vercel",
    title: "Vercel",
    href: "https://vercel.com/",
    categories: ["Hosting", "Frontend"],
    theme: true,
  },
  {
    key: "gcp",
    title: "Google Cloud Platform",
    href: "https://cloud.google.com/",
    categories: ["Cloud", "Infrastructure"],
  },

  // Developer Tools
  {
    key: "vim",
    title: "Vim",
    href: "https://www.vim.org/",
    categories: ["Editor", "Tools"],
  },

  // Blockchain & IoT
  {
    key: "bitcoin_core",
    title: "Bitcoin Core",
    href: "https://bitcoincore.org/",
    categories: ["Blockchain"],
  },
  {
    key: "midnight_network",
    title: "Midnight Network",
    href: "https://midnight.network/",
    categories: ["Blockchain", "ZK"],
  },
  {
    key: "esp8266",
    title: "ESP8266",
    href: "https://www.espressif.com/en/products/socs/esp8266",
    categories: ["IoT", "Hardware"],
  },
];
