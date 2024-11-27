
export const getGifs = async (category) => {

  const api = "ScjUBt3v45ESYJ7b7k7fI648pUTpMPcf";
  
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${category}&limit=15`;
    
    try {
      const resp = await fetch(url);
  
      if (!resp.ok) {
        console.error('Error en la solicitud:', resp.statusText);
        return [];
      }
  
      const { data } = await resp.json();
  
      const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium?.url || '', // Validación defensiva
      }));
  
      return gifs;
      
    } catch (error) {
      console.error('Error al obtener los GIFs:', error);
      return [];
    }
  };
  