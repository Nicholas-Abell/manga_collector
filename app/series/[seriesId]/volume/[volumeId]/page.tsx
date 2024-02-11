import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import axios from "axios";
import { Book, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default async function MangaPage({
  params,
}: {
  params: { seriesId: string; mangaId: string };
}) {
  const fetchedVolume = await axios.get(
    `https://api.jikan.moe/v4/manga/${params.seriesId}/full`
  );
  const volume = fetchedVolume.data.data;

  return (
    <main>
      <div className="w-full px-4 py-2 text-center">
        <h1 className="text-3xl font-bold"> {volume?.title_english}</h1>
        <p className="text-gray-500">{volume.authors[0].name}</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="h-[480px] relative w-full max-w-[420px]">
          <Image
            sizes="50"
            alt="cover"
            fill
            src={volume.images.jpg.image_url}
          />
        </div>
      </div>
      <div className="w-full flex justify-center py-4 space-x-2">
        <Button size="lg">
          <CheckCircle2 className="mr-2 h-4 w-4" />
          Owned
        </Button>
        <Button size="lg">
          <Book className="mr-2 h-4 w-4" /> Read
        </Button>
      </div>
      <div className="w-full pt-8">
        <div className="px-4 space-y-8">
          <h2 className="text-3xl font-semibold">Desription</h2>
          <div className="bg-gray-900 rounded px-2 py-4">
            <p>{volume.synopsis}</p>
          </div>
        </div>
      </div>
      <div className="w-full pt-8">
        <div className="px-4 space-y-8 pb-8">
          <h2 className="text-3xl font-semibold">Information</h2>
          <div className="grid grid-cols-3 gap-4">
            <Card className="bg-gray-900 border-none text-white">
              <CardHeader>Length</CardHeader>
              <CardContent>240</CardContent>
              <CardFooter>Pages</CardFooter>
            </Card>
            <Card className="bg-gray-900 border-none text-white">
              <CardHeader>Release</CardHeader>
              <CardContent>20xx</CardContent>
              <CardFooter>31 oct</CardFooter>
            </Card>
            <Card className="bg-gray-900 border-none text-white">
              <CardHeader>Series Vol</CardHeader>
              <CardContent>12</CardContent>
            </Card>
          </div>
        </div>
        <div className="w-full flex justify-between px-4 py-2">
          <p className="text-gray-400">Language</p>
          <p>English</p>
        </div>
        <div className="w-full flex justify-between px-4 py-2">
          <p className="text-gray-400">Series Link</p>
          <p>title</p>
        </div>
        <div className="w-full flex justify-between px-4 py-2">
          <p className="text-gray-400">Publisher</p>
          <p>Yen Press</p>
        </div>
        <div className="w-full flex justify-between px-4 py-2">
          <p className="text-gray-400">Release Date</p>
          <p>31 October, 2017</p>
        </div>
        <div className="w-full flex justify-between px-4 py-2">
          <p className="text-gray-400">Page Count</p>
          <p>240</p>
        </div>
        <div className="w-full flex justify-between px-4 py-2">
          <p className="text-gray-400">ISBN</p>
          <p>xxxxxxxxx</p>
        </div>
      </div>
    </main>
  );
}
