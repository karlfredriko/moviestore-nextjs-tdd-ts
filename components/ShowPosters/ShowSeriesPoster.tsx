import { truncateText } from "@/utils/helper";
import s from "./ShowPoster.module.css";

const ShowSeriesPoster = ({ series }: Series) => {
  console.log(series);
  return (
    <section>
      {series.map(({ id, title, poster, overview }) => (
        <div className={s.background} key={id}>
          <img className={s.poster} src={poster} alt={title} />
          <h3 className={s.title}>{title}</h3>
          <small className={s.overview}> {truncateText(overview, 150)}</small>
        </div>
      ))}
    </section>
  );
};
export default ShowSeriesPoster;
