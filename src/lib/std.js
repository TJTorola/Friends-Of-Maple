export const reduceObj = (obj, callback) => {
  const keys = Object.keys(obj);
  return keys.reduce((acc, key, idx) => {
    const newVal = callback(obj[key], idx, obj);
    return Object.assign(acc, { [key]: newVal });
  });
}
