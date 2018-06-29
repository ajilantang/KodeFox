
function isEqual(a,b){
  if(typeof a !== typeof b ){
    return false
  }
  //array comparasion
  else if (Array.isArray(a) || Array.isArray(b)){
    return arrayComparasion(a,b)
  }
  //null && primitif comparasion
  else if (a === null || b === null || typeof a === 'string' || typeof a === 'number' || typeof a == 'undefined') {
    return primitifComparision(a,b)
  }
  //object comparasion
  else if (typeof a === 'object') {
    return objectComparasion(a,b)
  }

}

let arrayComparasion = (a,b) => JSON.stringify(a) === JSON.stringify(b)

let objectComparasion = (obj1,obj2) => {
   let keysNumberObj = (Object.keys(obj1).length === Object.keys(obj2).length ) ? Object.keys(obj1): false
   // console.log(keysNumberObj)
   return (keysNumberObj) ? (keysNumberObj.length === Object.keys(obj1).filter((key) => isEqual(obj1[key],obj2[key])).length ) : false
}

let primitifComparision = (a,b) => a === b
// test

//false
console.log('false =====> ')
console.log(isEqual({type:"Fiat", model:[100,100], color:"white"},null))
console.log(isEqual([1,2],[]))
console.log(isEqual(1,''))
console.log(isEqual([1,2,3], {nama:"aji"}))
console.log(isEqual([1,2,3,4], [1,2,3]))
console.log(isEqual([1,2,3],[3,1,2]))
console.log(isEqual(null,undefined))
console.log(isEqual({type:"Fiat", model:[100,100], color:"white"},{type:"Fiat", color:"white",model:[100,100], age:11}))
// true
console.log('----------------------------------')
console.log('true ======> ')
console.log(isEqual([1,2,3],[1,2,3]))
console.log(isEqual({type:"Fiat", model:[100,100], color:"white"},{type:"Fiat", model:[100,100], color:"white"}))
console.log(isEqual({type:"Fiat", model:[100,100], color:"white",age:40},{type:"Fiat", color:"white",model:[100,100],age:40}))
console.log(isEqual(1,1))
console.log(isEqual(null,null))
// true
