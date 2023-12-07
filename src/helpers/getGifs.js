export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=LfuYikn2D2dY7WCEA9i64SKGcbRGKBCH&q=${ category }&limit=20`;
    const response = await fetch( url );
    
    const { data = [] } = await response.json();

    return data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }))
}