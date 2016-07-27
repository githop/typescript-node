const fs = require('fs');

class Poc {
  constructor(private path:string) {}

  static of(path:string) {
    return new Poc(path);
  }

  fork(errFn, successFn) {
    return fs.readFile(this.path, 'utf8', (err, data) => {
      if (err) return errFn(err);
      successFn(data);
    });
  }
}

const io = Poc.of('lib/index.ts');
io.fork((err) => {throw err}, console.log);