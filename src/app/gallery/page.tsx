import Gallery from "@/components/gallery";

export default function GalleryPage() {
  return (
    <main className="max-w-5xl mx-auto py-10 px-4">
      <section>
        <h2 className="text-2xl font-semibold mb-2">Fotogalerie</h2>
        <Gallery />
      </section>
    </main>
  );
}
