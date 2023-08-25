import React, { useState } from 'react';

const BeerCard = (props: any) => {
  const beer: any = props.beer;
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  return (
    <div className={"bg-white w-1/2 shadow-lg rounded-lg overflow-hidden "+props.className}>
      <img src={beer.image_url} alt={beer.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{beer.name}</h2>
        <p className="text-gray-600 mb-2">{beer.tagline}</p>
        <p className="text-gray-800">{beer.description}</p>
      </div>
      <div className="p-4 bg-gray-100">
        <p className="text-gray-600">
          ABV: {beer.abv}% | IBU: {beer.ibu} | First Brewed: {beer.first_brewed}
        </p>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 cursor-pointer" onClick={() => setAccordionOpen(!accordionOpen)}>
          Food Pairing
        </h3>
        {accordionOpen && (
          <ul className="list-disc list-inside">
            {beer.food_pairing.map((food: any, index: number) => (
              <li key={index} className="text-gray-800">
                {food}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BeerCard;
