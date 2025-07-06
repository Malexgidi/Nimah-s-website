// export default function Home() {
//   return (
//     <main className="min-h-screen bg-white text-gray-800">
//       {/* Hero Section */}
//       <section className="flex flex-col items-center justify-center text-center px-4 py-20 bg-pink-100">
//         <img
//           src="/Nimahlogo.png" // Make sure you add your logo inside public/
//           alt="Nimah Cakes & Cuisine Logo"
//           className="w-28 h-28 mb-4 bg-white-400"
//         />
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//           Welcome to Nimah Cakes & Cuisine
//         </h1>
//         <p className="text-lg md:text-xl mb-6 max-w-xl">
//           Delicious Cakes, Mouthwatering Cuisine, and Irresistible Chops delivered fresh to you.
//         </p>
//         <a
//           href="/order"
//           className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 transition"
//         >
//           Order Now
//         </a>
//       </section>

//       {/* What We Offer */}
//       <section className="py-16 px-6 bg-white">
//         <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
//         <div className="grid md:grid-cols-3 gap-10">
//           {[
//             { title: 'Cakes', img: '/Nimahlogo.png' },
//             { title: 'Cuisine', img: '/Nimahlogo.png' },
//             { title: 'Chops', img: '/Nimahlogo.png' },
//           ].map((item) => (
//             <div key={item.title} className="text-center">
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="w-full h-64 object-cover rounded-xl shadow-lg mb-4"
//               />
//               <h3 className="text-xl font-semibold">{item.title}</h3>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-16 px-6 bg-gray-100">
//         <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
//         <div className="max-w-3xl mx-auto space-y-8">
//           <blockquote className="bg-white p-6 rounded-lg shadow">
//             <p className="italic">"The cakes were soft, fresh, and so tasty! Highly recommended."</p>
//             <span className="block mt-2 font-semibold text-right">– Happy Customer</span>
//           </blockquote>
//           <blockquote className="bg-white p-6 rounded-lg shadow">
//             <p className="italic">"Our event catering was perfect. Everything tasted amazing."</p>
//             <span className="block mt-2 font-semibold text-right">– Satisfied Client</span>
//           </blockquote>
//         </div>
//       </section>
//     </main>
//   );
// }

'use client';
import { useRouter } from 'next/navigation';
// import Header from '../../components/Header';

export default function Home() {
  const router = useRouter();

  return (
    <main className="bg-white text-gray-900">
       {/* <Header /> */}
      {/* Hero Section */}
      <section className="bg-pink-50 text-center py-20 px-6">
        <div className="max-w-3xl mx-auto">
        <img
            src="/images/Nimahlogo.png"
            alt="Nimah Logo"
            className="mx-auto w-32 mb-6 opacity-90 drop-shadow-md"
         />
          <h1 className="text-4xl font-bold mb-4">Delicious Cakes & Cuisine Delivered Fast</h1>
          <p className="text-lg mb-6">
            Enjoy premium baked goods and local meals—freshly made, quickly delivered.
          </p>
          <button
            onClick={() => router.push('/order')}
            className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700"
          >
            Order Now
          </button>
        </div>
      </section>

      {/* What We Offer */}
   
      <section className="py-16 px-6 bg-white">
  <h2 className="text-3xl font-bold text-center mb-10">What We Offer</h2>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
    {[
      { title: 'Cakes', desc: 'Custom cakes for any occasion.', image: '/Cakes.jpg' },
      { title: 'Cuisine', desc: 'Delicious local dishes daily.', image: '/Cuisines.jpg' },
      { title: 'Chops', desc: 'Perfect party packs and bites.', image: '/Smallchops.jpg' },
    ].map((item) => (
      <div
        key={item.title}
        className="rounded-lg shadow-lg hover:shadow-xl text-white p-6 h-60 bg-center bg-cover flex flex-col justify-end"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className="bg-black/50 p-4 rounded">
          <h3 className="text-xl font-bold mb-1">{item.title}</h3>
          <p className="text-sm">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-pink-50">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
          <div>
            <div className="text-4xl font-bold mb-2 text-pink-600">1</div>
            <p>Select what you want</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2 text-pink-600">2</div>
            <p>Fill in your order details</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2 text-pink-600">3</div>
            <p>We deliver or you pick up</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">What Customers Say</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <blockquote className="border-l-4 border-pink-600 pl-4 italic">
            “Nimah’s cakes are the best in town. Always fresh and affordable!”
            <footer className="mt-2 text-right">— A happy customer</footer>
          </blockquote>
          <blockquote className="border-l-4 border-pink-600 pl-4 italic">
            “I ordered jollof rice and chops for my event—everything was perfect.”
            <footer className="mt-2 text-right">— Satisfied client</footer>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-600 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Nimah Cakes & Cuisine</p>
      </footer>
    </main>
  );
}

