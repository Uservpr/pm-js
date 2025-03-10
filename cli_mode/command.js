const methods = require("../method");
const showHelp = require("./help");
const fs = require("fs");

const runCLI = async () => {
    const args = process.argv.slice(2);

    if (args.length === 0 || args.includes("-h") || args.includes("--help")) {
        showHelp();
        return;
    }

    const method = args[0].replace("-", "").toLowerCase(); // Paksa jadi lowercase
    const urlIndex = args.findIndex(arg => arg.startsWith("http"));
    const url = urlIndex !== -1 ? args[urlIndex] : null;

    const dataIndex = args.indexOf("-d") !== -1 ? args.indexOf("-d") + 1 : null;
    const data = dataIndex ? JSON.parse(args[dataIndex]) : null;

    const saveIndex = args.findIndex(arg => arg === "-s" || arg === "-save");
    const saveFile = saveIndex !== -1 ? args[saveIndex + 1] : null;

    // Convert semua key method ke lowercase biar case insensitive
    const methodsLower = Object.keys(methods).reduce((acc, key) => {
        acc[key.toLowerCase()] = methods[key];
        return acc;
    }, {});

    if (!methodsLower[method]) {
        console.log("Invalid method. Use 'pm --help' for usage.");
        console.log("console.log method in command.js: " + method);
        console.log("Available methods:", Object.keys(methodsLower));
        return;
    }

    if (!url) {
        console.log("Error: URL is required!");
        return;
    }

    try {
        const response = await methodsLower[method](url, data);
        const prettyResponse = JSON.stringify(response, null, 2);
        
        console.log(prettyResponse);

        if (saveFile) {
            fs.writeFileSync(saveFile, prettyResponse);
            console.log(`Response saved to ${saveFile}`);
        }
    } catch (err) {
        console.error("Error:", err.message);
    }
};

module.exports = { runCLI };