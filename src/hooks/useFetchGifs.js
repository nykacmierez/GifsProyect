import { useEffect, useState } from "react";
import { getGifs} from '../helpers/getGifs';

// la funcion useFetch.. hace una peticion por la categoria y la guarda en una const
export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsloading] = useState( true );

    const getImages = async() => { //const nueva asincronica
        const newImages = await getGifs( category );
        setImages(newImages); //cuando recibe la resp nueva setea el valor
        setIsloading(false); //cuando setea con el valor nuevo cambia a false
    }

    useEffect( () => {
        getImages();
    }, []); 

    return {
        images,
        isLoading
    }
}