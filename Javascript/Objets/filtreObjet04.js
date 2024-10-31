//Given an array of arrays, flatten them into a single array

const flatten = (arr)=> {
    // your code here  
    
    let newArray = [];

    return arr.map((el)=>{
        return newArray.push(el)

    })

 }
 
 var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 
 console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];