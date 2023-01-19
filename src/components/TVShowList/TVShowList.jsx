import s from "./style.module.css";
import { TVShowListItem } from "../TVShowListItem/TVShowListItem";

export function TVShowList({ tvShowList }) {
  console.log("tvShowList ", tvShowList);
  return (
    <div>
      <div className={s.title}>You'll probably like these too :</div>
      <div className={s.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span  className={s.tv_show_item} key={tvShow.id} >
              <TVShowListItem
                tvShow={tvShow}
                onClick={() => {
                  console.log("TODO");
                }}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
}
