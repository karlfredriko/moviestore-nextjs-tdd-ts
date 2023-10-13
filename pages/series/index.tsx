import { getAllTVSeries } from "@/__mock__/data/tv";
import ShowSeriesPoster from "@/components/ShowPosters/ShowSeriesPoster";

export default function SeriesPage() {
  const series: Serie[] = getAllTVSeries();
  return (
    <div>
      <h2>Populära serier</h2>
      <ShowSeriesPoster series={series} />
    </div>
  );
}
