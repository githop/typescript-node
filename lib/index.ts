const fs = require('fs');
const {resolve} = require('path');

interface Cb {
  (arg:any): void
}

class Poc {
  constructor(private path:string) {}

  static of(path:string) {
    return new Poc(path);
  }

  fork(err: Cb, success: Cb) {
    return fs.readFile(this.path, 'utf8', (e: Error, data: string) => {
      if (e) return err(e);
      success(data);
    });
  }
}

const io = Poc.of('lib/index.ts');
io.fork((err) => {console.error(err)}, console.log);