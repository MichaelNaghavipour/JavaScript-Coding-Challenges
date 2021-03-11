function productExceptSelf(nums) {
  if (nums.length === 0) {
    return [];
  }

  const productArr = Array(nums.length);
  productArr[0] = 1;
  for (let i = 1; i < productArr.length; i++) {
    // get product of previous numbers
    productArr[i] = productArr[i - 1] * nums[i - 1];
  }

  // get product numbers right of self
  let product = 1;
  for (let i = productArr.length - 1; i >= 0; i--) {
    productArr[i] *= product;
    product *= nums[i];
  }

  return productArr;
}
