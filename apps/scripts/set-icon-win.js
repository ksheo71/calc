/**
 * Post-build script: sets the app icon on Calculator.exe using cached rcedit.
 * Required because electron-builder's signAndEditExecutable is disabled on this
 * environment (Windows without Developer Mode, which prevents winCodeSign symlink extraction).
 */
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const CACHE_BASE = path.join(
  process.env.LOCALAPPDATA || path.join(require("os").homedir(), "AppData", "Local"),
  "electron-builder",
  "Cache",
  "winCodeSign"
);

const EXE = path.resolve(__dirname, "../dist/win-unpacked/Calculator.exe");
const ICON = path.resolve(__dirname, "../build/icon.ico");

function findRcedit() {
  if (!fs.existsSync(CACHE_BASE)) return null;
  for (const entry of fs.readdirSync(CACHE_BASE)) {
    const candidate = path.join(CACHE_BASE, entry, "rcedit-x64.exe");
    if (fs.existsSync(candidate)) return candidate;
  }
  return null;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function setIcon(rcedit, retries = 5, delayMs = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      execFileSync(rcedit, [
        EXE,
        "--set-icon", ICON,
        "--set-version-string", "FileDescription", "Calculator",
        "--set-version-string", "ProductName", "Calculator",
        "--set-file-version", "1.0.0",
        "--set-product-version", "1.0.0",
      ]);
      return true;
    } catch (e) {
      if (i < retries - 1) {
        console.log(`Attempt ${i + 1} failed, retrying in ${delayMs}ms...`);
        await sleep(delayMs);
      } else {
        throw e;
      }
    }
  }
}

(async () => {
  const rcedit = findRcedit();
  if (!rcedit) {
    console.error("rcedit-x64.exe not found in winCodeSign cache. Skipping icon set.");
    process.exit(0);
  }

  if (!fs.existsSync(EXE)) {
    console.error("Calculator.exe not found at", EXE);
    process.exit(1);
  }

  if (!fs.existsSync(ICON)) {
    console.error("icon.ico not found at", ICON);
    process.exit(1);
  }

  console.log("Setting icon on", EXE);
  await setIcon(rcedit);
  console.log("Icon set successfully.");
})();
