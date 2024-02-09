import { useState } from "react";
import SeriesClient from "../_components/SeriesClient";

export default function SeriesPage({
  params,
}: {
  params: { seriesId: string };
}) {
  return (
    //server action for series import, pass as prop to client
    <main>
      <SeriesClient params={params} />
    </main>
  );
}
