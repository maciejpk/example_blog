import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="
        flex justify-between items-center py-4 md:py-8 px-4 mx-auto max-w-screen-xl
      ">
        <div className="max-w-5xl mx-auto">
          <Link href="/">
            <h1 className="text-3xl font-bold">Blog des Johann-Gottfried-Herder-Forschungsrats</h1>
          </Link>
        </div>
      </header>
      <div className="
        mb-12 bg-gray-500
      ">
        <div className="px-4 mx-auto max-w-screen-xl">
          <Image
            src="https://herder-forschungsrat.de/uploads/images/_1920xAUTO_crop_center-center_75_none/HerderForschungsrat_startseite.png"
            alt="Background"
            className="h-64 object-cover"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </>
  );
}