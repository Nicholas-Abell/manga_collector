import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Book, CheckCircle2 } from "lucide-react";

export default function MangaPage({ params }: { params: { mangaId: string } }) {
  return (
    <main>
      <div className="w-full px-4 py-2 text-center">
        <h1 className="text-3xl font-bold">Title</h1>
        <p className="text-gray-500">Author</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-gray-900 h-[480px] w-[80%]" />
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
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
              sunt accusantium id tenetur beatae blanditiis dolorem commodi eius
              voluptas nam optio itaque quas non, iste magni minima rem laborum
              autem.
            </p>
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
