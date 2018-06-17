export function homeForm(homeFormValue) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`https://jsonplaceholder.typicode.com/users?email=${homeFormValue}`, requestOptions)
    .then(response => response.json())
    .then(json => json)
}