export default function MangaPage({ params }: { params: { mangaId: string } }) {
  return <main>Manga: {params.mangaId}</main>;
}
