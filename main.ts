import * as fs from "node:fs";

const entry =
  "My agent drafts a roast, then asks me to approve it \u2014 the only thing it roasts is my patience, and it bills me in tokens for the privilege.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Fail loudly instead of writing an invalid entry.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} chars, outside the 1-200 gate`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry, "utf8");
