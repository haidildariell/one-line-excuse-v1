import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I delegated your deadline to a subagent. It delegated it straight back. We're both still waiting on each other.";

function validateExcuse(text: string): void {
  if (text.length === 0 || text.length > 160) {
    throw new Error("excuse must be 1-160 characters");
  }
  if (text.trim().length === 0) {
    throw new Error("excuse must not be only whitespace");
  }
}

function writeEntry(text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

validateExcuse(EXCUSE);
writeEntry(EXCUSE);
