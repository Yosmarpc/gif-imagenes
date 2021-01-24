


export const GifGridService = async (category, limit) => {
 
    console.log(category);
    limit = 10;
    let url_api = `https://api.giphy.com/v1/gifs/search?`;
    
    const url = `${url_api}q=${encodeURI(category)}&limit=${encodeURI(limit)}&api_key=GfQGeV7504P6h1pCISAjs2K4WeOvLDNJ`;
    const resp = await fetch(url);
    const { data } = await resp.json();


    const GifData = data.map(img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url

        }

    })

   // console.log(GifData);
    return GifData;
}