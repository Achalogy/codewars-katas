function add(a, b) {
  function split(str) {
    return str
      .split("")
      .reverse()
      .join("")
      .match(/.{1,15}/g)
      .map((x) => x.split("").reverse().join(""));
  }

  a = split(a);
  b = split(b);

  const [long, short] = [a, b].sort((a, b) => b.length - a.length);

  let res = short.reduce((acc, curr, i) => {
    let res_str = split(String(+acc[i] + +curr));    
    acc[i] = res_str[0];
    if(res_str.length > 1) {
      acc[i + 1] = acc[i + 1] ? +acc[i + 1] + +res_str[1] : res_str[1];
    }
    return acc;
  }, long);

  res = res.reverse().join("");
  if (res[0] === "0") {
    res = res.replace(/0+/, "");
  }

  return res;
}

module.exports = add
