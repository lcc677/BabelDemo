const tmp = () => {
  const arr = [1, 2, 3, 4]
  if (arr.includes(1)) {
    console.log("函数")
  }
}
async function* agf() {
  await 1;
  yield 2;
}
Promise.resolve().finally();