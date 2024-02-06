const fs = require("fs");
const path = require("path");

function initStyles() {
  const stylesDir = path.join(__dirname, "../utils/styles");
  const outputFilePath = path.join(__dirname, "../utils/styles/main.style.js");
  let combinedStyles = "";

  fs.readdir(stylesDir, (err, files) => {
    if (err) {
      console.error("Error reading the styles directory:", err);
      return;
    }

    // Ensure main.css is processed first
    const mainCssIndex = files.indexOf("main.css");
    if (mainCssIndex > -1) {
      // Remove main.css from the array and process it first
      files.splice(mainCssIndex, 1);
      const mainCssContent = fs.readFileSync(
        path.join(stylesDir, "main.css"),
        "utf8"
      );
      combinedStyles += mainCssContent + "\n"; // Add a newline for separation
    }

    // Process the remaining CSS files
    files
      .filter((file) => file.endsWith(".css"))
      .forEach((file) => {
        const filePath = path.join(stylesDir, file);
        const content = fs.readFileSync(filePath, "utf8");
        combinedStyles += content + "\n"; // Add a newline for separation
      });

    // Write the combined styles to main.style.js with export
    const exportContent = `const mainStyle = \`${combinedStyles}\`; \nexport default mainStyle`;
    fs.writeFileSync(outputFilePath, exportContent, "utf8");
    console.log("Styles have been initialized and combined into main.style.js");
  });
}

initStyles();
