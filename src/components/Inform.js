import PropTypes from "prop-types";
import styles from "./Movie.module.css";
function Inform({
  CoverImg,
  like,
  intro,
  download,
  title,
  year,
  rate,
  long,
  genres,
  id,
}) {
  return (
    <div className={styles.movie}>
      <img src={CoverImg} alt={title} className={styles.movie__img} />
      <h2 className={styles.movie__title}>{title}</h2>
      <p className={styles.p}>Download {download}</p>
      <p className={styles.p}>Like {like}♥</p>
      <p className={styles.year}>Year : {year}</p>
      <p className={styles.p}>Rate : {rate}</p>
      <p className={styles.p}>Running Time : {long}</p>
      <p className={styles.p}>{intro}</p>
      <ul className={styles.movie__genres}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Inform.propTypes = {
  id: PropTypes.number.isRequired,
  like: PropTypes.number.isRequired,
  long: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  download: PropTypes.number.isRequired,
  CoverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Inform;
