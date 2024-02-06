const fs = require("fs");
const path = require("path");

const DIST_PATH = "../utils/styles/dist"

function fileSync(content, path) {
  const finalContent = `const style = \`${content.replace(/\n/g, '').replace(/\s\s+/g, ' ')}\`; \nexport default style`;
  fs.writeFileSync(path, finalContent, "utf8");
}

function initStyles() {
  const folderPath = path.join(__dirname, DIST_PATH);
  if(!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });

  const stylesDir = path.join(__dirname, "../utils/styles");
  const outputFilePath = path.join(__dirname, `${DIST_PATH}/all.style.js`);
  let combinedStyles = "";

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
        const ifMainStyle = Boolean(file === "main.css")
        if(ifMainStyle)
          combinedStyles = `\n${content}\n${combinedStyles}`
        else
          combinedStyles += content + "\n";

        const individualOutputFilePath = path.join(__dirname, `${DIST_PATH}/${file.replace(".css", "")}.style.js`)
        fileSync(content, individualOutputFilePath)
      });

    fileSync(combinedStyles, outputFilePath)
    console.log("Styles have been initialized and combined into main.style.js");
  });
}

initStyles();
