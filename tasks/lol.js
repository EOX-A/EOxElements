const path = require("path");
const fs = require("fs");
const glob = require("glob");

const postcss = require("postcss");
const autoprefixer = require("autoprefixer");

// use sass, not node-sass to avoid a ruby install
const sass = require("sass");

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const options = yargs(hideBin(process.argv)).argv;

// given an npm script run like:
// $ node ./tasks/build-style.js --package alert
console.log(options.package); //alert
console.log(__dirname);
const styleFiles = glob.sync(
  path.join(__dirname, "../", `elements/drawtools/src/**/*.{scss,css}`)
);
console.log(styleFiles);

// maybe you want to throw an error if no style files were found for that package
if (!styleFiles.length) {
  throw new Error("why you no provide files?");
}

styleFiles.forEach((filePath) => {
  // parse the filePath for use later
  // https://nodejs.org/api/path.html#pathparsepath
  const parseFilePath = path.parse(filePath);
  console.log(parseFilePath);

  // figure out ahead of time what the output path should be
  // based on the original file path
  // ALL output files will end with `.css.ts
  // since all outputs will be css as exported TS strings
  const styleTSFilePath = path.format(
    Object.assign({}, parseFilePath, { base: `${parseFilePath.name}.style.js` })
  );

  // set a variable to hold the final style output
  let styleOutput;

  // grab the file type of the current file
  const fileType = parseFilePath.ext === ".scss" ? "scss" : "css";

  // read the file contents
  // passing the encoding returns the file contents as a string
  // otherwise a Buffer would be returned
  // https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
  const originalFileContents = fs.readFileSync(filePath, { encoding: "utf-8" });

  // one-liner to process scss if the fileType is 'scss'
  // if not using scss just do:
  // styleOutput = originalFileContents;
  styleOutput =
    fileType === "css"
      ? originalFileContents
      : sass.renderSync({ file: filePath }).css.toString();

  // wrap original file with tailwind at-rules
  // the css contents will become a "tailwind css" starter file
  //
  // https://tailwindcss.com/docs/installation#include-tailwind-in-your-css
  styleOutput = `@tailwind base;
                   @tailwind components;
                   @tailwind utilities;
                   ${styleOutput}`;

  // prep for processing with tailwind
  // grab your master config
  const tailwindConfig = require("../tailwind.config");
  tailwindConfig.content = [
    /* the files you want tailwind to purge from nearby to the original css/scss file */
    `${parseFilePath.dir}/**/*.{ts,js,css}`,
  ];

  // now run postcss using tailwind and autoprefixer
  // and any other plugins you find necessary
  postcss([
    autoprefixer,
    require("tailwindcss")(tailwindConfig),
    // ...other plugins
  ])
    // the 'from' property in the options makes sure that any
    // css imports are properly resolved as if processing from
    // the original file path
    .process(styleOutput, { from: filePath })
    .then((result) => {
      // write your "css module" syntax
      // here its TS
      const cssToTSContents = `
          import { css } from 'lit';
          export default css\`${result.css.replace(/`/g, "")}\`;
       `;

      // write the final file back to its location next to the
      // original .css/.scss file
      fs.writeFileSync(styleTSFilePath, cssToTSContents);
    });
});
