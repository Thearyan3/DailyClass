fetch('https://jsonplaceholder.typicode.com/posts')
.then((reponse) => Response.json)
.then((data) => console.log(data))
.catch(error => console.error("Error", error));