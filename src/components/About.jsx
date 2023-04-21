import React from 'react';

export default function About() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
      <img className="w-64 rounded-full shadow-md" src="https://dummyimage.com/400x400/000/fff" alt="Owner" />
      <div className="max-w-md">
        <h2 className="text-3xl font-bold mb-4">Hey, I'm Toni!</h2>
        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies, justo eu ullamcorper vestibulum, tellus massa sagittis tellus, ac facilisis eros orci vitae massa. Duis eget bibendum lectus. Nulla facilisi. Mauris aliquam nulla eu sem blandit, sed pellentesque mi sodales. Donec vel metus ultricies, auctor neque a, maximus ipsum. Sed sed efficitur elit, vel sodales ex.</p>
        <h3 className="text-xl font-medium mb-2">What I Make:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <p className="text-gray-600">Suspendisse nec lorem augue. Sed eget nulla vel risus volutpat feugiat. Integer eget sem quis tortor dapibus convallis. Praesent euismod, quam sed feugiat malesuada, erat nulla hendrerit risus, vel elementum enim quam non diam. Pellentesque non risus vel est viverra sagittis vitae vel sapien. Pellentesque at interdum ipsum. Suspendisse eu mollis sapien. Nunc eget nulla in ipsum posuere pulvinar. Integer convallis, nisl et venenatis fermentum, mauris odio convallis sapien, vel maximus felis lacus id mi. </p>
      </div>
    </div>
  );
}
