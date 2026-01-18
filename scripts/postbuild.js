const { execSync } = require("child_process");
const puppeteer = require("puppeteer");

const chromePath = puppeteer.executablePath();
console.log(`✅ Detected modern Chrome at: ${chromePath}`);

try {
    console.log("🚀 Starting react-snap with modern Chrome...");
    execSync("react-snap", {
        stdio: "inherit",
        env: {
            ...process.env,
            PUPPETEER_EXECUTABLE_PATH: chromePath,
        },
    });
    console.log("✨ react-snap completed successfully!");
} catch (error) {
    console.error("❌ react-snap failed.");
    process.exit(1);
}
