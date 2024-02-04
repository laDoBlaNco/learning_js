/**Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. */


function chunkArrayInGroups(arr, size) {
  const resArr = [];
  const vueltas = Math.ceil(arr.length/size);
  for(let i=0;i<vueltas;i++){
    if(arr.length>=size){
      resArr.push(arr.splice(0,size));
    }else{
      resArr.push(arr.splice(0));
    }
  }
  return resArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
