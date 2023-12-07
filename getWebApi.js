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