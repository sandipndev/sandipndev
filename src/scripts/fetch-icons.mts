import fs from "fs";
import fetch from "node-fetch";
import path from "path";

const SLUG_MAP = {
  nextjs: "nextdotjs",
  tailwind: "tailwindcss",
  github_actions: "github",
  gcp: "googlecloud",
  bash: "gnubash",
  bitcoin_core: "bitcoin",
  midnight_network: "cardano",
  esp8266: "arduino",
  nix: "nixos",
  chadcn: "react",
};

const { TECH_STACK } = await import(
  "../features/profile/data/tech-stack.ts"
).catch(async () => import("../features/profile/data/tech-stack.js"));

const ICON_DIR = path.resolve("./public/tech-stack-icons");
fs.mkdirSync(ICON_DIR, { recursive: true });

const simpleIconsBase = "https://cdn.simpleicons.org";

const failed: string[] = [];

async function fetchIcon(key: string, themed = false) {
  const file: string = SLUG_MAP[key as keyof typeof SLUG_MAP] || key;

  if (themed) {
    const lightUrl = `${simpleIconsBase}/${file}/000000`;
    const darkUrl = `${simpleIconsBase}/${file}/ffffff`;

    const [lightRes, darkRes] = await Promise.all([
      fetch(lightUrl),
      fetch(darkUrl),
    ]);

    if (lightRes.ok && darkRes.ok) {
      const [lightSvg, darkSvg] = await Promise.all([
        lightRes.text(),
        darkRes.text(),
      ]);

      const lightFilename = `${key}-light.svg`;
      const darkFilename = `${key}-dark.svg`;

      fs.writeFileSync(path.join(ICON_DIR, lightFilename), lightSvg);
      fs.writeFileSync(path.join(ICON_DIR, darkFilename), darkSvg);

      console.log(`✅ Saved ${lightFilename} and ${darkFilename}`);
    } else {
      console.warn(`⚠️  Failed to fetch themed icons for ${key}`);
      failed.push(key);
    }
  } else {
    const filename = `${key}.svg`;
    const url = `${simpleIconsBase}/${file}`;
    const res = await fetch(url);
    if (res.ok) {
      const svg = await res.text();
      fs.writeFileSync(path.join(ICON_DIR, filename), svg);
      console.log(`✅ Saved ${filename}`);
    } else {
      console.warn(`⚠️  Failed to fetch ${url}`);
      failed.push(key);
    }
  }
}

for (const tech of TECH_STACK) {
  await fetchIcon(tech.key, tech.theme);
}

console.log("Failed icons:", failed);
