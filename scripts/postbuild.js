const { execSync } = require('child_process');
const fs = require('fs');
const os = require('os');

// The specific path for Workiz's M1 Mac setup
const localPuppeteerPath = '/Users/workiza/.cache/puppeteer/chrome/mac_arm-143.0.7499.192/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing';

const env = { ...process.env };

// Logic: If on macOS and the specific file exists, use it.
if (os.platform() === 'darwin' && fs.existsSync(localPuppeteerPath)) {
    console.log('🍎 Detected macOS with local Chrome available.');
    console.log(`Using custom Puppeteer path: ${localPuppeteerPath}`);
    env.PUPPETEER_EXECUTABLE_PATH = localPuppeteerPath;
} else {
    console.log('🐧 Using default Puppeteer (bundled Chromium) - Standard behavior for CI/Netlify.');
}

try {
    // Execute react-snap with the configured environment
    console.log('Starting react-snap...');
    execSync('npx react-snap', { stdio: 'inherit', env });
} catch (error) {
    console.error('❌ react-snap failed.');
    process.exit(1);
}
