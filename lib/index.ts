const fs = require('fs');
const {join: pjoin} = require('path');
const filePath = (fileName:string):string => (pjoin(__dirname, '../', fileName));

class Poc {
  constructor() {
    Poc.testFs();
  }

  static testFs() {
    const f = fs.readFileSync(filePath('lib/index.ts'), 'utf8');

    console.log(f);
  }

}


new Poc();