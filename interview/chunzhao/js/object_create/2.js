// 手写new 
function myNew(constructor,...args){
  const obj = Object.create(constructor.prototype);
  const result =  constructor.apply(obj,args); 
  return (result && typeof result === 'object') ? result : obj;
}