export default async function highlightsRequest() {    
    const url = process.env.REACT_APP_API_URL + 'tv/popular?language=pt-br&page=1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzhkOGQ1ZjdhYTg4YmE5ZWFlY2VjYzIyZDAzNjU0YyIsIm5iZiI6MTcyMzkwNTUwNC4yOTk3OTEsInN1YiI6IjY2YmY2ZGRjNGNiYjg0MjIyYzlkYTFhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TTSQXSi0Kj0tcUWVH0ge2x6LWChzeHJAVz1U0efOehk'
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

    return resJson.slice(0, 4);
}