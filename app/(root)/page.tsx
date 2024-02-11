import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { BarcodeIcon, Search, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const fetchedManga = await axios.get("https://api.jikan.moe/v4/manga");
  const volumes = fetchedManga.data.data;

  return (
    <main>
      <div className="w-full flex justify-between items-center px-4 py-2">
        <Button className="text-red-600" variant="ghost">
          <StarIcon className="w-4 h-4 mr-1" />
          Wishlist
        </Button>
        <Button className="text-red-600" variant="ghost">
          <BarcodeIcon className="w-4 h-4 mr-1" />
          Scan
        </Button>
      </div>
      <div className="w-full px-4 py-2">
        <h1 className="text-3xl font-bold">Library</h1>
      </div>
      <div className="w-full p-4 flex items-center gap-2">
        <Search />
        <Input
          className="bg-gray-800 border-none rounded-2xl placeholder:text-gray-400"
          placeholder="...search library"
        />
      </div>
      <div className="space-y-4 grid grid-cols-1">
        {volumes.map((volume: any, index: number) => (
          <Link key={index} href={`/series/${volume.mal_id}`}>
            <div className="flex justify-center items-center px-4 w-full gap-4">
              <div className="w-24 h-32 relative">
                <Image sizes="50" alt="cover" fill src={volume.images.jpg.image_url} />
              </div>
              <Card className="w-full bg-gray-900 text-white">
                <CardHeader className="text-lg font-bold">
                  {volume?.title_english}
                </CardHeader>
                <CardContent>
                  <h3 className="text-gray-400">{volume.volumes} Volumes</h3>
                  <p className="text-gray-400">{volume.authors[0].name}</p>
                </CardContent>
              </Card>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
