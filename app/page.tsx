import Link from "next/link";


export default function Home() {

  return (

    <main className="min-h-screen bg-black text-white">


      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">


        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
          MRE Labs
        </p>


        <h1 className="max-w-5xl text-5xl font-bold tracking-tight sm:text-7xl">
          Building intelligent software for tomorrow.
        </h1>


        <p className="mt-6 max-w-3xl text-xl text-gray-400">
          MRE Labs creates AI-powered platforms and software solutions
          designed to automate workflows, improve decision making,
          and solve real-world problems.
        </p>



        <div className="mt-10">


          <Link
            href="/products"
            className="
            rounded-lg 
            bg-white 
            px-8 
            py-4 
            font-semibold 
            text-black 
            transition 
            hover:bg-gray-200
            "
          >
            Explore Solutions
          </Link>


        </div>


      </section>


    </main>

  );

}