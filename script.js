function piada() {
   const url= 'https://api.chucknorris.io/jokes/random';
     const options = {
     method: 'GET',
    Headers: {
      'conetent-type': 'application/json'
    } 
   };
 fetch(url, options)
  .then(Response=>(Response.json())
        .then(data => {document.getElementById('pi').textContent = data.value
              })
        .catch(error => console.log(error)))}