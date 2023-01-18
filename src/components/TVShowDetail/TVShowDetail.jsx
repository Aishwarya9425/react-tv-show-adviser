import { FiveStarRating } from "../FiveStarRating.jsx/FiveStarRating";
import s from "./style.module.css";

export function TVShowDetail({ tvShow }) {
  console.log("tvShow", tvShow);
  const rating = tvShow.vote_average / 2;
  return (
    <div>
      <div className={s.title}>{tvShow.name}</div>
      <div className={s.rating_container}>
        <FiveStarRating rating={rating} />
        <span className={s.rating}> {rating}/5</span>
      </div>
      <div className={s.overview}>{tvShow.overview}</div>
    </div>
  );
}
