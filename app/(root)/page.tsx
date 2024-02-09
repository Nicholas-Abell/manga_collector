import { redirect } from "next/navigation";

export default function Home() {
  let user = true;

  if (!user) {
    redirect("/sign-in");
  } else redirect("/library");

  return <main>Library</main>;
}
