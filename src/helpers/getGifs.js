export const getGifs = async (category) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=EVBvkDg5hQzgUPuMg7t3ts0c4EwG8uaO&q=${ category }&limit=15`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map ( img => ({
        id: img.id,
        title: img.title,
        url: img.images.dowsized_medium.url
    }));

    return gifs;
}