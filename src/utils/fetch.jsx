const Fetch = () => {
    return fetch('http://localhost:3000/data')
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error(error));
}

export default Fetch;