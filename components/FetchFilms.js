export function FetchFilms(value) {
    let request;
    let res = [];

    if(!value) {
        request = 'black';
    } else {
        request = value;
    };

    fetch(`http://www.omdbapi.com/?apikey=45cacc22&s=` + request)
    .then(response => response.json())
    .then(data => res.push(data?.Search))
    
    return res;
}