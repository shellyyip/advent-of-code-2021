const fs = require("fs");
const path = require("path");

export const getValsFromFile = (filePath: string): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, filePath),
      "utf8",
      (error: string, fileContent: string) => {
        if (error != null) {
          reject(error);
          return;
        }

        resolve(fileContent.split("\n"));
      }
    );
  });
};

export const mapStringsToNumbers = (strings: string[]): number[] => {
  return strings.map((el) => parseInt(el));
};
