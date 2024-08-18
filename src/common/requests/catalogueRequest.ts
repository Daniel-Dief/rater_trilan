export default async function movieDetails(id : number) {    
    const url = process.env.REACT_APP_API_URL + `person/${id}/combined_credits?language=pt-br`;
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
        .then(data => data.cast)
        .then(data => data.slice(0, 150))
    })
    .catch(err => {
        console.error(err)
    })

    return [resJson, Math.floor(resJson.length / 15)];
}