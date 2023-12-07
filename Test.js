/**** Select Sort Function */
function selectSort(tab){
    const N = tab.length;
    for (let i = 0 ; i< N - 1 ; i++){
        let min = i;
        for (let j=i+1; j<N ;j++){
            if(tab[j] < tab[min]){
                min = j
            }
        }
        if(min !== i){
            [tab[i],tab[min]] = [tab[min],tab[i]];
        }
    }
    return tab
}
const myList = [99,44,6,2,1,5,63,87,283,4,0];

selectSort(myList);
console.log(myList);

/**** End Select Sort Function */

/**** Linear Search Function */
function linearSearch(tab,index){
    const N = tab.length;
    for (let i = 0 ; i< N - 1 ; i++){
        if(tab[i] === index){
            return true;
        }
    }
        return false;
}

let myLists = [5,9,3,1,2,8,4,7,6];
let number = 7;
let res = linearSearch(myLists,number);
if(res !== -1){
    console.log(`Number ${number} found at index ${res}`);
}else{
    console.log(`Number ${number} not found`);
}

/**** End Linear Search Function */

/** Binary Search Function */
function binarySearch(sortedTab,target){
    let left = 0;
    let right = sortedTab.length -1;
    
    while (left <= right){
        let middle = Math.floor((left + right) /2);
        if(sortedTab[middle] === target){
            return true;
        } else if(sortedTab[middle] < target){
            left = middle+1;
        }
        else{
            right = middle -1
        }
    }
    return false;
}
let Lists = [5, 9, 3, 1, 2, 8, 4, 7, 6];
let binList = selectSort([...Lists]);
let searchNumber = 7
let resultat = binarySearch(binList,searchNumber);

if(resultat){
    console.log(`Number ${searchNumber} found in the sorted list`)
}


/** End Binary Search Function */

/** Get Data From API Function */

function getDataFromApi(api){
    fetch(api).then(res=>{
        if(!res.ok){
            throw new Error(`ERROR : Status : ${res.status}`)
        }
        return res.json();
    })
    .then(data =>{
        console.log('data from API', data);
    })
    .catch(error=>{
        console.error('Error Fetching data:',error)
    });
}
const urlApi = 'https://dummyjson.com/products/1';
getDataFromApi(urlApi);

/* Question: What are the challenges I might face when trying to get back a response? Your answer might include CORS headers)

   Answer : When i make requests from a web page in js, i might face CORS issues. This occurs when the server i'm trying to access hasn't allowed request
            To solve this problem the server should includes CORS headers, handles requests and allow credentials if needed

 */

/** End Get Data From API Function */