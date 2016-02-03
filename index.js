function drosselJsonParse(str) {
  try {
    var data = JSON.parse(str);
    if (Object.prototype.toString.call(data) !== '[object Object]') {
      throw new Error();
    }
  }
  catch(e) {
    return null;
  }
  return data;
}

module.exports = drosselJsonParse;
