export default async function movieDetails(id : number) {    
    const url = process.env.REACT_APP_API_URL + `movie/${id}?language=pt-br`;
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
    })
    .catch(err => {
        console.error(err)
    })

    return resJson;
}