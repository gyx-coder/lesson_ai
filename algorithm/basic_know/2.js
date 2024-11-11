function traverse(arr) {
  const outlen = arr.length; //1
  for (let i = 0; i < outlen; i++) { // 1 + n + 1 + n
    const inlen = arr[i].length; // n
    for (let j = 0; j < inlen; j++) { // (1 + n + 1 + n) * n
      console.log(arr[i][j]); // n
    }
  }
}