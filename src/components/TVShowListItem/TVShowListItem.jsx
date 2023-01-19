import s from "./style.module.css";
import { SMALL_IMG } from "../../config";
const MAX_TITLE_CHAR = 20;

export function TVShowListItem({ tvShow, onClick }) {
  //tv show list item should be clickable

  const onClick_ = () => {
    onClick(tvShow);
  };

  return (
    <div onClick={onClick_} className={s.container}>
      <img
        className={s.img}
        alt={tvShow.name}
        src={SMALL_IMG + tvShow.backdrop_path}
      />
      <div className={s.title}>
        {tvShow.name.length > MAX_TITLE_CHAR
          ? tvShow.name.slice(0, MAX_TITLE_CHAR) + "..."
          : tvShow.name}
      </div>
    </div>
  );
}
