"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

type SeriesClientProps = {
  params: { seriesId: string };
  seriesData: any;
};

export default function SeriesClient({
  params,
  seriesData,
}: SeriesClientProps) {
  const [showAll, setShowAll] = useState(false);

  const volumeArray = Array.from([seriesData.volumes]);
  console.log(volumeArray);
  return (
    <main>
      <div className="w-full px-4 py-2 text-center">
        <p className="text-gray-500">Series</p>
        <h1 className="text-3xl font-bold">{seriesData.title_english}</h1>
        <p className="text-gray-500">{seriesData.authors[0].name}</p>
        <p className="text-gray-500">{seriesData.volumes} volumes total</p>
      </div>
      <div className="w-full flex justify-center py-4 space-x-2">
        <Button
          size="lg"
          variant={`${showAll ? "default" : "destructive"}`}
          onClick={() => setShowAll(false)}
          disabled={!showAll}
        >
          Owned
        </Button>
        <Button
          size="lg"
          variant={`${showAll ? "destructive" : "default"}`}
          onClick={() => setShowAll(true)}
          disabled={showAll}
        >
          All Series
        </Button>
      </div>
      <div className="space-y-4 grid grid-cols-1">
        {Array.from(Array(seriesData.volumes), (e, index) => (
          <Link key={index} href={`/series/${params.seriesId}/volume/x`}>
            <div className="flex justify-center items-center px-4 w-full gap-4">
              <div className="w-24 h-32 relative">
                <Image
                  sizes="50"
                  alt="cover"
                  fill
                  src={seriesData.images.jpg.image_url}
                />
              </div>
              <Card className="w-full bg-gray-900 text-white">
                <CardHeader className="text-lg font-bold">
                  {seriesData?.title_english}
                </CardHeader>
                <CardContent>
                  <h3 className="text-gray-400">Volume {index + 1}</h3>
                  <p
                    className={`text-red-600 text-xs ${
                      !showAll && "invisible"
                    }`}
                  >
                    You Own This
                  </p>
                </CardContent>
              </Card>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
