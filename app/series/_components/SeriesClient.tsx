"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export default function SeriesClient({
  params,
}: {
  params: { seriesId: string };
}) {
  const [showAll, setShowAll] = useState(false);

  return (
    <main>
      <div className="w-full px-4 py-2 text-center">
        <p className="text-gray-500">Series</p>
        <h1 className="text-3xl font-bold">Title</h1>
        <p className="text-gray-500">Author</p>
        <p className="text-gray-500">12 volumes total</p>
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
        {/* map */}
        <Link href={`/series/${params.seriesId}/volume/x`}>
          <div className="flex justify-center items-center px-4 w-full gap-4">
            <div className="bg-gray-400 w-[15%] h-36 rounded" />
            <Card className="w-full bg-gray-900 text-white">
              <CardHeader className="text-lg font-bold">Title</CardHeader>
              <CardContent>
                <h3 className="text-gray-400">Volume 1</h3>
                <p
                  className={`text-red-600 text-xs ${!showAll && "invisible"}`}
                >
                  You Own This
                </p>
              </CardContent>
            </Card>
          </div>
        </Link>
        <Link href={`/series/${params.seriesId}/volume/x`}>
          <div className="flex justify-center items-center px-4 w-full gap-4">
            <div className="bg-gray-400 w-[15%] h-36 rounded" />
            <Card className="w-full bg-gray-900 text-white">
              <CardHeader className="text-lg font-bold">Title</CardHeader>
              <CardContent>
                <h3 className="text-gray-400">Volume 1</h3>
                <p
                  className={`text-red-600 text-xs ${!showAll && "invisible"}`}
                >
                  You Own This
                </p>
              </CardContent>
            </Card>
          </div>
        </Link>
        <Link href={`/series/${params.seriesId}/volume/x`}>
          <div className="flex justify-center items-center px-4 w-full gap-4">
            <div className="bg-gray-400 w-[15%] h-36 rounded" />
            <Card className="w-full bg-gray-900 text-white">
              <CardHeader className="text-lg font-bold">Title</CardHeader>
              <CardContent>
                <h3 className="text-gray-400">Volume 1</h3>
                <p
                  className={`text-red-600 text-xs ${!showAll && "invisible"}`}
                >
                  You Own This
                </p>
              </CardContent>
            </Card>
          </div>
        </Link>
        <Link href={`/series/${params.seriesId}/volume/x`}>
          <div className="flex justify-center items-center px-4 w-full gap-4">
            <div className="bg-gray-400 w-[15%] h-36 rounded" />
            <Card className="w-full bg-gray-900 text-white">
              <CardHeader className="text-lg font-bold">Title</CardHeader>
              <CardContent>
                <h3 className="text-gray-400">Volume 1</h3>
                <p
                  className={`text-red-600 text-xs ${!showAll && "invisible"}`}
                >
                  You Own This
                </p>
              </CardContent>
            </Card>
          </div>
        </Link>
        <Link href={`/series/${params.seriesId}/volume/x`}>
          <div className="flex justify-center items-center px-4 w-full gap-4">
            <div className="bg-gray-400 w-[15%] h-36 rounded" />
            <Card className="w-full bg-gray-900 text-white">
              <CardHeader className="text-lg font-bold">Title</CardHeader>
              <CardContent>
                <h3 className="text-gray-400">Volume 1</h3>
                <p
                  className={`text-red-600 text-xs ${!showAll && "invisible"}`}
                >
                  You Own This
                </p>
              </CardContent>
            </Card>
          </div>
        </Link>
        <Link href={`/series/${params.seriesId}/volume/x`}>
          <div className="flex justify-center items-center px-4 w-full gap-4">
            <div className="bg-gray-400 w-[15%] h-36 rounded" />
            <Card className="w-full bg-gray-900 text-white">
              <CardHeader className="text-lg font-bold">Title</CardHeader>
              <CardContent>
                <h3 className="text-gray-400">Volume 1</h3>
                <p
                  className={`text-red-600 text-xs ${!showAll && "invisible"}`}
                >
                  You Own This
                </p>
              </CardContent>
            </Card>
          </div>
        </Link>
      </div>
    </main>
  );
}
