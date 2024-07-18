module.exports = function check(str, Config) {
  let symbols = [];
   for (let conf of Config) {
     symbols.push(conf[0] + conf[1])
   }

   function checkBool() {
    for (let sym of symbols) {
      if (str.includes(sym)) return true;
    }
    return false
   }

   while(checkBool()) {
    for (let sym of symbols) {
      if (str.includes(sym)) {
        let arrStr = str.split('');
        arrStr.splice(str.indexOf(sym), 2);
        str = arrStr.join('');
      }
    }
   }

   return !str[0]
}
