import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, phone, note });
    // add email
  };

  return (
    <div className='grid'>
      <h2 className='mx-auto'>Got an idea you want specially crafted?<br/>Send me a message!</h2>
      <h3 className='hover:text-green-500 mx-auto'><a href='#'>Patron Support</a></h3>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-gray-800 font-medium">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-gray-800 font-medium">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2 text-gray-800 font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="note" className="block mb-2 text-gray-800 font-medium">Details</label>
          <textarea
            name="note"
            id="note"
            className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            rows="4"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">Submit</button>
        </div>
      </form>
    </div>
  );
}