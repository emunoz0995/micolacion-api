const Hashids = require('hashids/cjs')
const salt = "tiptop-hlfe/r0lf";
const numberKeys = 10;

class Utils { 
  static encode(text) {
    const hashids = new Hashids(salt, numberKeys);
    const id = hashids.encode(text);
    return id;
  }

  static decode(text) {
    const hashids = new Hashids(salt, numberKeys);
    const id = hashids.decode(text);
    return id[0];
  }
}
module.exports =  Utils;