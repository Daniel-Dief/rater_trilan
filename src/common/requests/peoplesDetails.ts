export default async function peoplesDetails(id : number) {    
    const url = process.env.REACT_APP_API_URL + `person/${id}?language=pt-br`;
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
    })
    .catch(err => {
        console.error(err)
    })

    return resJson;
}