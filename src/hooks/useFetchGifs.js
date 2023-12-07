import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [gifs, setGifs] = useState( [] );
    const [isLoading, setisLoading] = useState( true );

    const getGifsAsync = async() => {
        const gifs = await getGifs( category );
        setGifs( gifs )
        setisLoading( false )
    }

    useEffect(() => {
        getGifsAsync();
    }, []);

    return {
        gifs,
        isLoading
    }
}
