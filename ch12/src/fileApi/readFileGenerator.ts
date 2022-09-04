import * as fs from "fs";

export function* readFileGenerator(filename: string): any {
  let fd: any;
  try {
    fd = fs.openSync(filename, "rs");
    const stats = fs.fstatSync(fd);
    const bufferSize = Math.min(stats.size, 1024);
    //1024byte의 buffer 타입 객체를 생성해 파일을 1024byte씩 읽으면서 한줄씩 찾은 뒤 찾은 줄의 데이터를 yield문으로 발생시킨다.
    const buffer = Buffer.alloc(bufferSize + 4);
    let filepos = 0,
      line;

    while (filepos > -1) {
      [line, filepos] = readLine(fd, buffer, bufferSize, filepos);
      if (filepos > -1) {
        yield line;
      }
    }
    yield buffer.toString(); //마지막 줄
  } catch (e) {
    console.error("readLine", e.message);
  }
}

function readLine(
  fd: any,
  buffer: Buffer,
  bufferSize: number,
  position: number
): [string, number] {
  let line = "",
    readSize;
  const crSize = "\n".length;
  while (true) {
    readSize = fs.readSync(fd, buffer, 0, bufferSize, position);
    if (readSize > 0) {
      const temp = buffer.toString("utf8", 0, readSize);
        const index = temp.indexOf("\n");
        if (index > -1) {
            line += temp.slice(0, index)
            position += index + crSize
            break
        } else {
            line += temp
            position += temp.length
              throw new Error("Function not implemented.");
        }
    } else {
        position = -1 //end of file
        break
    }
  }
    
    return [line.trim(),position]

}
