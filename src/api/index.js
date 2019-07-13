const DOMAIN = 'http://localhost:3000';
export function get(url) {
    return fetch(DOMAIN + url).then(response => response.json())
}

export function post(url,data){
  return fetch(DOMAIN+url,{
      method:'POST',
      headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
      },
      body:JSON.stringify(data)
  }).then(response => response.json());
}
