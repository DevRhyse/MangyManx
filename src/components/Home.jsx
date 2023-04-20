import React, { useState, useEffect } from 'react';
import logo from '../assets/MMLogo.jpg'

// const urlFixer = (block) => block.map(ele => ele = ele.replace('../assets', '.'))

// const urlFixer = (block) => block.map(ele => {
//     const parts = ele.split('/');
//     const name = parts[parts.length - 1];
//     return {src: ele.replace('../assets/images', '.'), name: name};
// });

const urlFixer = (block) => block.map(ele => ele = ele.replace('../assets', '.')); 

  

export default function Home() {

    const [images, setImages] = useState([]);
        
    useEffect(() => {
      async function fetchImages() {
        // context file urls are broken
          const context = await import.meta.glob('../assets/images/*.{jpg,jpeg,png,gif}');
          const imageUrls = Object.values(context).map(ele => ele.name);
          console.log(imageUrls)
          console.log(urlFixer(imageUrls))
        //   setImages(imageUrls);
          setImages(urlFixer(imageUrls));
        }
        fetchImages()
      }, [])

  return (
    <div>
      <img className="mx-auto h-1/6" src={logo} alt="Banner" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {images.map((image, index) => (
          <img key={`${image}_${index}`} className="w-full" src={image} alt={image} />
        ))}
      </div>
    </div>
  );
}
