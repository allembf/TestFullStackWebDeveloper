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