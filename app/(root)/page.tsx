import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BarcodeIcon, Search, StarIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  let user = true;

  if (!user) {
    redirect("/sign-in");
  }

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
        <Link href={`/series/x`}>
          <div className="flex justify-center items-center px-4 w-full gap-4">
            <div className="bg-gray-400 w-[15%] h-36 rounded" />
            <Card className="w-full bg-gray-900 text-white">
              <CardHeader className="text-lg font-bold">
                Series Title
              </CardHeader>
              <CardContent>
                <h3 className="text-gray-400">8 volume</h3>
                <p className="text-gray-400">Author</p>
              </CardContent>
            </Card>
          </div>
        </Link>
      </div>
    </main>
  );
}
