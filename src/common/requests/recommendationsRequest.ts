export default async function recommendationsRequest() {    
    const url = process.env.REACT_APP_API_URL + 'trending/movie/day?language=pt-br';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : ""
        }
    };

    let resJson = await fetch(url, options)
    .then(async(data) => {
        return data.json()
        .then(data => data.results);
    })
    .catch(err => {
        console.error(err)
        return new Array<Object>
    })

    return resJson;
}