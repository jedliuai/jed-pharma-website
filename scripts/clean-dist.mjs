import { rmSync } from "node:fs";
import { basename, dirname, resolve } from "node:path";

const projectRoot = resolve(process.cwd());
const outputDir = resolve(projectRoot, "dist");

if (dirname(outputDir) !== projectRoot || basename(outputDir) !== "dist") {
  throw new Error(`Refusing to remove unexpected output directory: ${outputDir}`);
}

rmSync(outputDir, { recursive: true, force: true });
