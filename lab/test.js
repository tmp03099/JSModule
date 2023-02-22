//distinct from 10 - 20

for (let i = 10 ; i <=20 ; i++){
    
    //convert number to string
    let s = String(i);

    // Convert string to set using stl
    let distinct = new Set();
    for (let c of s.split(""))
        distinct.add(c);

    if(s.length == distinct.size){
        console.log(i);
    }

}

//binary search
const arr = [2,3,4,5,6,7,8,9]

const find  = 5;
let binary = 0;

arr.forEach((items,idx) => {

    if (find === items){
        // binary = arr[items];
       console.log(idx);
    }
})








