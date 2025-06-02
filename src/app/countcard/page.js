// components/CountCards.js
import React, { useEffect, useState } from 'react';
import './countcard.module.css';

const stats = [
  { label: 'Countries', value: 12, icon: '🌍' },
  { label: 'Projects', value: 250, icon: '🏗️' },
  { label: 'Employees', value: 45, icon: '👨‍💼' },
  { label: 'Years', value: 6, icon: '📆' },
];

const CountCard = ({ icon, value, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const increment = value / (duration / 16);

    const animate = () => {
      start += increment;
      if (start < value) {
        setCount(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animate();
  }, [value]);

  return (
    <div className="col-6 col-md-3 mb-4">
      <div className="card count-card text-center shadow-sm h-100">
        <div className="card-body">
          <div className="count-icon mb-2">{icon}</div>
          <h3 className="count-number">{count}</h3>
          <p className="count-label">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default function CountCards() {
  return (
    <section className="container my-5">
      <div className="row justify-content-center">
        {stats.map((item, idx) => (
          <CountCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}
