

// // 'use client';
// // import { useState } from 'react';
// // import { FiMenu, FiUser } from 'react-icons/fi';
// // import Link from 'next/link';

// // export default function Header() {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   return (
// //     <header className="bg-white shadow-md px-3  justify-between items-center md:px-4 py-4">
// //       <div className="flex items-center justify-between">
// //         {/* Logo */}
// //         <div className="flex items-center space-x-2">
// //           <img src="/Nimahlogo.png" alt="Nimah Logo" className="w-1 h-1 object-contain" />
// //           <span className="text-xl font-bold text-pink-600">Nimah</span>
// //         </div>

// //         {/* Desktop Nav */}
// //         <nav className="hidden md:flex space-x-6 text-gray-800 font-medium">
// //           <Link href="/" className="hover:text-pink-600">Home</Link>
// //           <Link href="/menu" className="hover:text-pink-600">Menu</Link>
// //           <Link href="/order" className="hover:text-pink-600">Order</Link>
// //           <Link href="/contact" className="hover:text-pink-600">Contact</Link>
// //         </nav>

// //         {/* Right Side (User icon + Hamburger icon on mobile) */}
// //         <div className="flex items-center space-x-4 md:space-x-0">
// //           <FiUser className="text-xl text-gray-700 cursor-pointer hidden md:block" />

// //           {/* Mobile menu toggle button */}
// //           <button
// //             className="md:hidden"
// //             onClick={() => setMenuOpen(!menuOpen)}
// //             aria-label="Toggle Menu"
// //           >
// //             <FiMenu className="text-2xl text-gray-700" />
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile dropdown menu */}
// //       {menuOpen && (
// //         <div className="md:hidden mt-4 flex flex-col space-y-2 text-gray-800 font-medium">
// //           <Link href="/" className="hover:text-pink-600">Home</Link>
// //           <Link href="/menu" className="hover:text-pink-600">Menu</Link>
// //           <Link href="/order" className="hover:text-pink-600">Order</Link>
// //           <Link href="/contact" className="hover:text-pink-600">Contact</Link>
// //         </div>
// //       )}
// //     </header>
// //   );
// // }

// 'use client';
// import { useState } from 'react';
// import { FiMenu, FiUser } from 'react-icons/fi';
// import Link from 'next/link';

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md px-4 md:px-10 py-4">
//       <div className="flex py-4 ">
//         {/* Logo and Brand */}
//         <div className="flex items-center gap-3">
//           <img src="/logo.png" alt="Nimah Logo" className="w-10 h-10 object-contain" />
//           {/* <span className="text-xl font-bold text-pink-600">Nimah</span> */}
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="md:hidden md:flex gap-6 text-gray-800 font-medium">
//           <Link href="/" className="hover:text-pink-600">Home</Link>
//           <Link href="/menu" className="hover:text-pink-600">Menu</Link>
//           <Link href="/order" className="hover:text-pink-600">Order</Link>
//           <Link href="/contact" className="hover:text-pink-600">Contact</Link>
//         </nav>

//         {/* Right Icons */}
//         <div className="flex items-center gap-4">
//           {/* Person Icon (always visible) */}
//           <FiUser className="text-xl text-gray-700 cursor-pointer" />

//           {/* Hamburger Menu Icon (mobile only) */}
//           <button
//             className="block md:hidden"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle Menu"
//           >
//             <FiMenu className="text-2xl text-gray-700" />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu (dropdown) */}
//       {menuOpen && (
//         <div className="md:hidden mt-4 flex flex-col gap-3 text-gray-800 font-medium">
//           <Link href="/" className="hover:text-pink-600">Home</Link>
//           <Link href="/menu" className="hover:text-pink-600">Menu</Link>
//           <Link href="/order" className="hover:text-pink-600">Order</Link>
//           <Link href="/contact" className="hover:text-pink-600">Contact</Link>
//         </div>
//       )}
//     </header>
//   );
// }


