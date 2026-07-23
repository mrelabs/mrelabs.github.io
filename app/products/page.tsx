import Link from "next/link";
import Navbar from "@/components/Navbar";


export default function Products(){

return (

<main className="min-h-screen bg-black text-white">


<Navbar />


<section className="px-6 py-24">


<div className="mx-auto max-w-6xl">


<p className="text-sm uppercase tracking-[0.3em] text-gray-500">
Products
</p>



<h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
Intelligent software solutions built by MRE Labs.
</h1>



<p className="mt-6 max-w-3xl text-xl text-gray-400">
AI-powered platforms designed to automate workflows,
improve efficiency, and solve complex problems.
</p>



<div className="mt-16 rounded-2xl border border-gray-800 bg-gray-950 p-10">


<div className="flex flex-col justify-between gap-8 md:flex-row">


<div>


<p className="text-sm uppercase tracking-widest text-gray-500">
Product 01
</p>



<h2 className="mt-4 text-4xl font-bold">
MRE Talent
</h2>



<p className="mt-5 max-w-xl text-gray-400">
An AI-powered talent intelligence platform helping
businesses manage candidates, automate recruitment
processes, and make smarter hiring decisions.
</p>


</div>




<div className="flex items-center">


<Link
href="/products/talent"
className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
>
Explore MRE Talent
</Link>


</div>


</div>


</div>


</div>


</section>


</main>

);

}