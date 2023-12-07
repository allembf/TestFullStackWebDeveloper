function linearSearch(tab,index){
    const N = tab.length;
    for (let i = 0 ; i< N - 1 ; i++){
        if(tab[i] === index){
            return true;
        }
    }
        return false;
}

let myList = [5,9,3,1,2,8,4,7,6];
let number = 7;
let res = linearSearch(myList,number);
if(res !== -1){
    console.log(`Number ${number} found at index ${res}`);
}else{
    console.log(`Number ${number} not found`);
}