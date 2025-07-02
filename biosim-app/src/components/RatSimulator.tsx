// src/components/RatSimulator.tsx

import './RatSimulator.css';
import ratImage from '../assets/rat_ mouse_.jpeg'; // Replace with your actual image path

export default function RatSimulator() {
  const organs = [
    { name: 'Brain', x: '59%', y: '16%' },
    { name: 'Heart', x: '32%', y: '40%' },
    { name: 'Lungs', x: '25%', y: '43%' },
    { name: 'Liver', x: '30%', y: '52%' },
    { name: 'Kidneys', x: '74%', y: '58%' },
    { name: 'Stomach', x: '39%', y: '75%' },
  ];

  return (
    <div className="rat-simulator-container">
      <h2 className="sim-title">Rat Simulator - Organ Map</h2>
      <h3 className='sim-title'>Choose an Organ marker to simulate it.</h3>
      <div className="rat-image-wrapper">
        <img src={ratImage} alt="Rat Anatomy" className="rat-image" />

        {organs.map((organ, idx) => (
          <div
            key={idx}
            className="organ-marker"
            style={{ top: organ.y, left: organ.x }}
            title={organ.name}
            onClick={() => alert(`${organ.name} clicked`)}
          />
        ))}
      </div>
    </div>
  );
}
