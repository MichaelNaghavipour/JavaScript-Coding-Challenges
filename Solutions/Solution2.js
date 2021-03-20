const inputArray = [1, 2, 3, 4, 5]

function productOfArray(inputArray) {
  if (inputArray.length == 0) {
    return [];
  }

  const outputArray = Array(inputArray.length);
  outputArray[0] = 1;
  for (let i = 1; i < outputArray.length; i++) {
    outputArray[i] = outputArray[i - 1] * inputArray[i - 1];
  }

  let rightSideProduct = 1;
  for (let i = outputArray.length - 1; i >= 0; i--) {
    outputArray[i] *= rightSideProduct;
    rightSideProduct *= inputArray[i];
  }

  return outputArray;
}

console.log(productOfArray(inputArray))