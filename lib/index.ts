const fs = require('fs');

class Poc {
  constructor() {
    Poc.testFs();
  }

  static testFs() {
    const f = fs.readFileSync('/Users/githop/dev/js/typescript-node/lib/index.ts', 'utf8');

    console.log(f);
  }

}


new Poc();