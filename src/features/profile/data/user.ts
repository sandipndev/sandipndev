import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Sandipan",
  lastName: "Dey",
  displayName: "Sandipan Dey",
  username: "sandipndev",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Software Engineer",
    "Open Source Contributor",
    "Bitcoin is Freedom",
  ],
  address: "HSR Layout, Bangalore",
  phoneNumber: "KzkxIDk4MzYyIDUwNzEx", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "aGV5QHNhbmRpcGFuLmRldgo=", // base64 encoded
  website: "https://sandipan.dev",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Engineering",
      company: "Galoy",
      website: "https://galoy.io",
    },
  ],
  about: `
Hello, World! I’m **Sandipan Dey** — a Software Engineer passionate about building resilient, high-performance systems that power real-world financial and bitcoin applications.

With 6+ years of experience, I specialize in architecting reproducible infrastructure, secure backend systems, and developer-centric tools using [Rust](https://rust-lang.org/), [Nix](https://nixos.org/), [Terraform](https://developer.hashicorp.com/terraform) and [Kubernetes](https://kubernetes.io/). My work bridges software engineering and infrastructure design — making complex systems reliable, scalable, and elegant to operate.

One of my key projects at [Galoy](https://galoy.io), [Lana Bank](https://github.com/GaloyMoney/lana-bank), is a Bitcoin-collateralized banking platform designed for multi-role financial operations. I contributed to its event-sourced Rust backend, domain-driven design, and cloud-native deployment pipelines on Google Cloud Platform.

Beyond work, I enjoy experimenting with side projects like [Accorde](https://github.com/sandipndev/accorde), a YouTube-based karaoke pitch-changer built in Rust, and [Tictacblock](https://github.com/sandipndev/tictacblock), an IoT Bitcoin display device powered by ESP8266. I’m also deeply interested in zero-knowledge applications and blockchain applications, blending privacy and design through projects.

Let’s connect and collaborate on creating systems that are both technically strong and beautifully engineered.
  `,
  avatar: "/images/sandipndev-avatar-ghibli.webp",
  ogImage: "/images/screenshot-og-image-light.png",
  namePronunciationUrl: "/audio/sandipan-dey.mp3",
  keywords: [
    "sandipndev",
    "sandipan",
    "sandipan dey",
    "sandipan.dev",
    "dey sandipan",
    "iamsandipndev",
    "kickass69",
    "triethyl",
    "Sandipan Dey",
    "galoy",
    "atx",
  ],
  dateCreated: "2025-10-20", // YYYY-MM-DD
};
