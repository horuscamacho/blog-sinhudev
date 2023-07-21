import Posts from "@/app/components/Posts";

export default function Home() {
  return (
    <>
      <main className="px-6 mx-auto">
        <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
          Hola y Bienvenido ✌️&nbsp;
          <span className="whitespace-nowrap">
            a <span className="font-bold">SinhuDev</span>
          </span>
        </p>
        <Posts />
      </main>
    </>
  );
}
