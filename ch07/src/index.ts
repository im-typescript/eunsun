import { readFileSync, readFile } from "fs";
import { resolve } from "path";
import { reject } from "ramda";

console.log("synchronous");
const buffer: Buffer = readFileSync("./package.json");
console.log(buffer.toString());

type err = Error | null;

readFile("./package.json", (err: err, buffer: Buffer) => {
  console.log("asynchronous api");
  console.log(buffer.toString());
});

const readFilePromise = (filename: string): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    readFile(filename, (err: err, buffer: Buffer) => {
      if (err) reject(err);
      else resolve(buffer.toString());
    });
  });

async () => {
  const content = await readFilePromise("./package.json");
  console.log("promise and aync/await");
  console.log(content);
};
