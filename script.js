const getTodos = (callback) => {

    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange' , () => {
       
    if(request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText)
        callback(undefined,data );
    }else if(request.readyState ==4 ){
        console.log("Resource not found", undefined)
    }

})
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send()

}

getTodos((err, data) => {
    console.log("callback fired")
    console.log(err,data)
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }

});



// let request_2 = new XMLHttpRequest();
// request_2.addEventListener('readystatechange', () => {
//     // console.log(request_2, request_2.readyState)
//     if(request_2.readyState === 4 && request.status === 200){
//         console.log(request_2.responseText)
//     }
//     else if(request_2.readyState === 4){
//         console.log("Resource not found");

//     }
// })
// request_2.open('GET', 'https://api.chucknorris.io/jokes/randomm');

// request_2.send()