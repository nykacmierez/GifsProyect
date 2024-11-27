import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  console.log(isLoading);

  return (
    <>
      <h3> {category} </h3>
      {
        isLoading && (<h2>Cargando...</h2>) //se usa un condicional AND para evaluar que el isLoading este en false..
      }

      <div className="card-grid">
        {
        images.map((image) => (
          <GifItem 
            key={image.id} 
            {...image} />
          ))
        }
      </div>
    </>
  )
};
