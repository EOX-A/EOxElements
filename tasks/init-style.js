// Import required modules
const fs = require("fs");
const path = require("path");

// Set the directory path for the distribution of styles
const DIST_PATH = "../utils/styles/dist";

/**
 * Function to write the processed content to a file
 * This function formats the content and exports it as a JavaScript module
 *
 * @param {String} content
 * @param {fs.PathOrFileDescriptor} filePath
 */
function writeFileWithContent(content, filePath) {
  const finalContent = `const style = \`${content
    .replace(/\n/g, "")
    .replace(/\s\s+/g, " ")}\`;\nexport default style;`;
  fs.writeFileSync(filePath, finalContent, "utf8");
}

/**
 * Initialize and combine styles into one file
 */
function initStyles() {
  // Ensure the distribution folder exists; create it if it doesn't
  const folderPath = path.join(__dirname, DIST_PATH);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  // Define the directory containing the styles
  const stylesDir = path.join(__dirname, "../utils/styles");
  const outputFilePath = path.join(folderPath, "all.style.js");
  let combinedStyles = "";

  // Read all files in the styles directory
  fs.readdir(stylesDir, (err, files) => {
    if (err) {
      console.error("Error reading the styles directory:", err);
      return;
    }

    files
      .filter((file) => file.endsWith(".css"))
      .forEach((file) => {
        const filePath = path.join(stylesDir, file);
        const content = fs.readFileSync(filePath, "utf8");
        // Prepend main.css content to ensure it's at the start
        if (file === "main.css")
          combinedStyles = `\n${content}\n${combinedStyles}`;
        else combinedStyles += `${content}\n`;

        // Create individual JavaScript files for each CSS file
        const individualOutputFilePath = path.join(
          folderPath,
          `${file.replace(".css", "")}.style.js`
        );
        writeFileWithContent(content, individualOutputFilePath);
      });

    // Write the combined styles to the main output file
    writeFileWithContent(combinedStyles, outputFilePath);
    console.log("Styles have been initialized and combined into all.style.js");
  });
}

// Execute the function to initialize styles
initStyles();
