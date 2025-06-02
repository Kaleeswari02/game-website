'use client';
import React, { useEffect, useState } from 'react';
import { FaGlobe, FaProjectDiagram, FaUsers, FaCalendarAlt, FaHandshake } from 'react-icons/fa';
import './countcard.css';

const stats = [
  { label: 'Clients', value: 100, icon: <FaHandshake /> },
  { label: 'Countries', value: 12, icon: <FaGlobe /> },
  { label: 'Projects', value: 250, icon: <FaProjectDiagram /> },
  { label: 'Employees', value: 45, icon: <FaUsers /> },
  { label: 'Years', value: 6, icon: <FaCalendarAlt /> },
];

export default function CountCards() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 1000;
    const steps = 60;
    const intervals = stats.map(stat => stat.value / steps);
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const updated = stats.map((stat, i) =>
        step < steps ? Math.floor(intervals[i] * step) : stat.value
      );
      setCounts(updated);
      if (step >= steps) clearInterval(interval);
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countSection">
      <div className="honeycomb">
        {/* Top row with Clients and Countries */}
        <div className="hexRow centerRow">
          <div className="hexWrapper">
            <div className="countItem">
              <div className="icon">{stats[0].icon}</div>
              <div className="number">{counts[0]}</div>
              <div className="label">{stats[0].label}</div>
            </div>
          </div>
          <div className="hexWrapper">
            <div className="countItem">
              <div className="icon">{stats[1].icon}</div>
              <div className="number">{counts[1]}</div>
              <div className="label">{stats[1].label}</div>
            </div>
          </div>
        </div>

        {/* Middle row */}
        <div className="hexRow">
          <div className="hexWrapper">
            <div className="countItem">
              <div className="icon">{stats[2].icon}</div>
              <div className="number">{counts[2]}</div>
              <div className="label">{stats[2].label}</div>
            </div>
          </div>
          <div className="hexWrapper">
            <div className="countItem">
              <div className="icon">{stats[3].icon}</div>
              <div className="number">{counts[3]}</div>
              <div className="label">{stats[3].label}</div>
            </div>
          </div>
          <div className="hexWrapper">
            <div className="countItem">
              <div className="icon">{stats[4].icon}</div>
              <div className="number">{counts[4]}</div>
              <div className="label">{stats[4].label}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
