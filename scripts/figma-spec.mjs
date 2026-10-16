// Dumps the landing page frame as an indented spec: position relative to the frame, size, fills, strokes, effects, radius, text styles.
import { readFileSync, writeFileSync } from "node:fs";

const doc = JSON.parse(readFileSync("design/figma.json", "utf8")).document;
const find = (n, id) => (n.id === id ? n : n.children?.map((c) => find(c, id)).find(Boolean));
const root = find(doc, process.argv[2] || "1:2");
const ox = root.absoluteBoundingBox.x, oy = root.absoluteBoundingBox.y;

const hex = ({ r, g, b }, a = 1) => {
  const h = [r, g, b].map((v) => Math.round(v * 255).toString(16).padStart(2, "0")).join("");
  return a < 1 ? `#${h}/${Math.round(a * 100)}%` : `#${h}`;
};
const paint = (p) => {
  if (p.visible === false) return null;
  if (p.type === "SOLID") return hex(p.color, (p.opacity ?? 1) * p.color.a);
  if (p.type.startsWith("GRADIENT")) return `${p.type}(${p.gradientStops.map((s) => hex(s.color, s.color.a)).join(",")})`;
  if (p.type === "IMAGE") return `IMAGE(${p.imageRef})`;
  return p.type;
};

const lines = [];
const walk = (n, depth) => {
  if (n.visible === false) return;
  const b = n.absoluteBoundingBox;
  const parts = [`${n.type} ${n.id} "${n.name.slice(0, 60)}"`];
  if (b) parts.push(`@${Math.round(b.x - ox)},${Math.round(b.y - oy)} ${Math.round(b.width)}x${Math.round(b.height)}`);
  const fills = (n.fills || []).map(paint).filter(Boolean);
  if (fills.length) parts.push(`fill=${fills.join("|")}`);
  const strokes = (n.strokes || []).map(paint).filter(Boolean);
  if (strokes.length) parts.push(`stroke=${strokes.join("|")} w=${n.strokeWeight}`);
  if (n.cornerRadius) parts.push(`r=${n.cornerRadius}`);
  if (n.opacity != null && n.opacity < 1) parts.push(`op=${n.opacity}`);
  for (const e of n.effects || []) if (e.visible !== false)
    parts.push(`${e.type}(${e.offset ? e.offset.x + "," + e.offset.y : ""} r${e.radius} ${e.color ? hex(e.color, e.color.a) : ""})`);
  if (n.type === "TEXT") {
    const s = n.style;
    parts.push(`font=${s.fontFamily} ${s.fontWeight} ${s.fontSize}/${Math.round(s.lineHeightPx)} ${s.textAlignHorizontal}`);
    parts.push(`text="${n.characters.replace(/\n/g, "\\n")}"`);
  }
  lines.push("  ".repeat(depth) + parts.join(" "));
  if (n.type !== "TEXT" && n.type !== "VECTOR" && n.type !== "BOOLEAN_OPERATION") n.children?.forEach((c) => walk(c, depth + 1));
};
walk(root, 0);
writeFileSync(process.argv[3] || "design/spec.txt", lines.join("\n"));
console.log(lines.length, "lines");
