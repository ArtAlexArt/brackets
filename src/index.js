module.exports = function check(str, bracketsConfig) {
  const start = [],
    rr = {};
  let stack = [];
  bracketsConfig.forEach((item) => {
    start.push(item[0]);
    rr[item[1]] = item[0];
  });

  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    if (stack[stack.length - 1] === curr && rr[curr] === curr) {
      stack.pop();
    } else if (start.includes(curr)) {
      stack.push(curr);
    } else {
      if (stack.length === 0) return false;
      if (rr[curr] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return !stack.length;
};
