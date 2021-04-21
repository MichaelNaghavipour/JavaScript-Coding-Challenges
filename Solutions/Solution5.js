/**
 * Constructs a pair and returns a callback to be used for the pair
 * @param {number} a
 * @param {number} b
 * @return {function}
 */
function cons(a, b) {
  function pair(cb) {
    return cb(a, b);
  }
  return pair;
}

/**
 * Returns the first element of the pair
 * @param {function} fn
 * @return {number}
 */
function car(fn) {
  // eslint-disable-next-line
  function callThisFunction(x, y) {
    return x;
  }

  return fn(callThisFunction);
}

/**
 * Returns the second element of the pair
 * @param {function} fn
 * @return {number}
 */
function cdr(fn) {
  function callThisFunction(x, y) {
    return y;
  }

  return fn(callThisFunction);
}

export { cons, car, cdr };
