import { GifCard } from "../components";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { gifs, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>

            {
                isLoading && <h2>Loading...</h2>
            }

            <div className="card-grid">
                {
                    gifs.map( image => (
                        <GifCard
                            key={ image.id }
                            { ...image }
                        />
                    ))
                }
            </div>            
        </>
    )
}