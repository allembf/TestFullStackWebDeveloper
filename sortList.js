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
}
let myList = [99,44,6,2,1,5,63,87,283,4,0];
selectSort(myList);
console.log(myList);