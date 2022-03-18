import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Inform from "../components/Inform";
import styles from "./Detail.module.css";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const getInform = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    //console.log(json.data.movie);
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getInform();
  }, []);
  console.log(movie);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {
            <Inform
              key={movie.id}
              CoverImg={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              rate={movie.rating}
              long={movie.runtime}
              download={movie.download_count}
              like={movie.like_count}
              genres={movie.genres}
              intro={movie.description_intro}
              id={movie.id}
            />
          }
        </div>
      )}
    </div>
  );
}
export default Detail;
