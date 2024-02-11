import { useState } from "react";
import SeriesClient from "../_components/SeriesClient";
import axios from "axios";

export default async function SeriesPage({
  params,
}: {
  params: { seriesId: string };
}) {
  //server action for series import, pass as prop to client
  const fetchedSeries = await axios.get(
    `https://api.jikan.moe/v4/manga/${params.seriesId}/full`
  );

  return (
    <main>
      <SeriesClient
        seriesData={fetchedSeries.data.data}
        params={params}
      />
    </main>
  );
}
