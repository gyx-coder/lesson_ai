// 不考虑重复
const arr1 = ['apple','banana',NaN]
const arr2 = ['apple',NaN,'banana']

function arrEqual(arr1,arr2){
  if(arr1.length !== arr2.length) return false
  // false 
  return !arr1.some(item=>arr2.includes(item) === -1)
}
