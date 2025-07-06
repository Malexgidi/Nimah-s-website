// export default function OrderPage() {
//     return (
//       <main className="min-h-screen bg-gray-50 py-12 px-6">
//         <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-lg p-8">
//           <h1 className="text-3xl font-bold text-center mb-6">Place Your Order</h1>
  
//           <form className="space-y-6">
//             {/* Name */}
//             <div>
//               <label htmlFor="name" className="block font-medium mb-1">Full Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 required
//                 placeholder="Jane Doe"
//                 className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
//               />
//             </div>
  
//             {/* Email */}
//             <div>
//               <label htmlFor="email" className="block font-medium mb-1">Email Address</label>
//               <input
//                 type="email"
//                 id="email"
//                 required
//                 placeholder="you@example.com"
//                 className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
//               />
//             </div>
  
//             {/* Phone */}
//             <div>
//               <label htmlFor="phone" className="block font-medium mb-1">Phone Number</label>
//               <input
//                 type="tel"
//                 id="phone"
//                 required
//                 placeholder="+234 800 000 0000"
//                 className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
//               />
//             </div>
  
//             {/* Order Type */}
//             <div>
//               <label htmlFor="orderType" className="block font-medium mb-1">What would you like to order?</label>
//               <select
//                 id="orderType"
//                 required
//                 className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
//               >
//                 <option value="">Select one</option>
//                 <option value="cakes">Cakes</option>
//                 <option value="cuisine">Cuisine</option>
//                 <option value="chops">Chops</option>
//               </select>
//             </div>
  
//             {/* Details */}
//             <div>
//               <label htmlFor="details" className="block font-medium mb-1">Order Details</label>
//               <textarea
//                 id="details"
//                 rows="4"
//                 placeholder="Flavor, size, any message or special instructions"
//                 className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
//               />
//             </div>
  
//             {/* Quantity */}
//             <div>
//               <label htmlFor="quantity" className="block font-medium mb-1">Quantity</label>
//               <input
//                 type="number"
//                 id="quantity"
//                 min="1"
//                 defaultValue="1"
//                 required
//                 className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
//               />
//             </div>
  
//             {/* Delivery/Pickup */}
//             <div>
//               <label className="block font-medium mb-1">Delivery or Pickup?</label>
//               <div className="flex items-center space-x-4">
//                 <label className="inline-flex items-center">
//                   <input
//                     type="radio"
//                     name="deliveryOption"
//                     value="delivery"
//                     defaultChecked
//                     className="form-radio"
//                   />
//                   <span className="ml-2">Delivery</span>
//                 </label>
//                 <label className="inline-flex items-center">
//                   <input
//                     type="radio"
//                     name="deliveryOption"
//                     value="pickup"
//                     className="form-radio"
//                   />
//                   <span className="ml-2">Pickup</span>
//                 </label>
//               </div>
//             </div>
  
//             {/* Date & Time */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label htmlFor="date" className="block font-medium mb-1">Preferred Date</label>
//                 <input
//                   type="date"
//                   id="date"
//                   required
//                   className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="time" className="block font-medium mb-1">Preferred Time</label>
//                 <input
//                   type="time"
//                   id="time"
//                   required
//                   className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
//                 />
//               </div>
//             </div>
  
//             {/* Submit Button */}
//             <div className="text-center mt-6">
//               <button
//                 type="submit"
//                 className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 transition"
//               >
//                 Submit Order
//               </button>
//             </div>
//           </form>
//         </div>
//       </main>
//     );
//   }
  
'use client';

import { useState } from 'react';

const categories = ['Cakes', 'Cuisine', 'Chops'];
const dummyProducts = {
  Cakes: ['Chocolate Cake', 'Vanilla Cake', 'Red Velvet'],
  Cuisine: ['Jollof Rice', 'Fried Rice', 'Ofada'],
  Chops: ['Small Chops Pack', 'Spring Rolls', 'Puff Puff'],
};

export default function OrderPage() {
  const [category, setCategory] = useState('Cakes');
  const [selectedItem, setSelectedItem] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('Delivery');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order submitted (not really)!');
  };

  return (
    <main className="min-h-screen px-6 py-12 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-pink-700">Place Your Order</h1>

      {/* Category Tabs */}
      <div className="flex space-x-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat);
              setSelectedItem('');
            }}
            className={`px-4 py-2 rounded ${
              category === cat ? 'bg-pink-600 text-white' : 'bg-white border'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {dummyProducts[category].map((item) => (
          <div
            key={item}
            onClick={() => setSelectedItem(item)}
            className={`cursor-pointer p-4 border rounded hover:shadow ${
              selectedItem === item ? 'border-pink-600 bg-pink-50' : ''
            }`}
          >
            <p className="font-semibold">{item}</p>
          </div>
        ))}
      </div>

      {/* Order Form */}
      <form className="space-y-4 max-w-xl" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-3 rounded"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border border-gray-300 p-3 rounded"
          required
        />
        <input
          type="text"
          placeholder="Delivery Address"
          className="w-full border border-gray-300 p-3 rounded"
        />
        <input
          type="number"
          placeholder="Quantity"
          className="w-full border border-gray-300 p-3 rounded"
        />
        <textarea
          placeholder="Notes (optional)"
          rows="3"
          className="w-full border border-gray-300 p-3 rounded"
        />

        {/* Delivery Method */}
        <div className="flex items-center space-x-4">
          <label className="font-medium">Delivery Method:</label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="method"
              value="Delivery"
              checked={deliveryMethod === 'Delivery'}
              onChange={(e) => setDeliveryMethod(e.target.value)}
            />
            <span>Delivery</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="method"
              value="Pickup"
              checked={deliveryMethod === 'Pickup'}
              onChange={(e) => setDeliveryMethod(e.target.value)}
            />
            <span>Pickup</span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700"
        >
          Submit Order
        </button>
      </form>
    </main>
  );
}
