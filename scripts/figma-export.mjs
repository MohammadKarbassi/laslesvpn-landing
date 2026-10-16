// Exports the landing page assets from Figma into public/images using the REST API.
// Usage: node --env-file=.env.local scripts/figma-export.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const FILE = "BoqqmjENPbNsDTQfoZ14CF";
const token = process.env.FIGMA_TOKEN;
if (!token) throw new Error("FIGMA_TOKEN missing (put it in .env.local)");

const svg = {
  "logo-mark": "1:285",
  "hero-illustration": "1:518",
  "features-illustration": "11:45",
  "plan-free": "11:46",
  "plan-standard": "11:47",
  "plan-premium": "11:48",
  "icon-user": "1:323",
  "icon-location": "1:318",
  "icon-server": "1:329",
  "icon-check-circle": "1:26",
  "icon-check": "1:351",
  "icon-star": "1:115",
  "world-map": "11:49",
  "social-facebook": "1:127",
  "social-twitter": "1:130",
  "social-instagram": "1:133",
};
const png = {
  "sponsor-netflix": "1:137",
  "sponsor-reddit": "1:140",
  "sponsor-amazon": "1:143",
  "sponsor-discord": "1:146",
  "sponsor-spotify": "1:149",
  "avatar-viezh": "1:95",
  "avatar-yessica": "1:99",
  "avatar-kim": "1:103",
};

async function exportSet(map, format, scale) {
  const ids = Object.values(map).join(",");
  const url = `https://api.figma.com/v1/images/${FILE}?ids=${ids}&format=${format}&scale=${scale}&svg_simplify_stroke=true`;
  const res = await fetch(url, { headers: { "X-Figma-Token": token } });
  const { images, err } = await res.json();
  if (err) throw new Error(err);
  for (const [name, id] of Object.entries(map)) {
    const src = images[id];
    if (!src) { console.warn("no render for", name, id); continue; }
    let buf = Buffer.from(await (await fetch(src)).arrayBuffer());
    // Social icons come padded for their drop shadow; crop to the 34px circle and let CSS draw the shadow.
    if (name.startsWith("social-")) {
      buf = Buffer.from(buf.toString()
        .replace('width="70" height="70" viewBox="0 0 70 70"', 'width="34" height="34" viewBox="18 5 34 34"')
        .replace(/ filter="url\(#filter0_d_[0-9_]+\)"/, ""));
    }
    writeFileSync(`public/images/${name}.${format}`, buf);
    console.log(`${name}.${format}`, buf.length);
  }
}

mkdirSync("public/images", { recursive: true });
await exportSet(svg, "svg", 1);
await exportSet(png, "png", 2);
