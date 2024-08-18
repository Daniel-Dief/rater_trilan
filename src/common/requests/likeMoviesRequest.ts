export default async function likeMoviesRequest(id : number) {    
    const url = process.env.REACT_APP_API_URL + `movie/${id}/similar?language=pt-br&page=1`;
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
        .then(data => data.results)
    })
    .catch(err => {
        console.error(err)
    })
    
    return resJson;
}