import React from 'react';

const IndustryTable = () => {
  const rows = [
    ["Restaurants & Cafes", "Lunch, Dinner hours", "Holidays, Events"],
    ["Retail Stores", "Evenings, Weekends", "Festivals, Holidays"],
    ["Hospitality", "Check-in/Out Times", "Vacation Seasons"],
    ["Events", "During events", "Festivals, Conferences"],
    ["Transportation", "Rush hours, Night Shifts", "Tour Seasons, Holidays"],
    ["Cleaning Services", "Post-event/night", "Post-holiday cleanups"],
    ["Construction", "Weather-dependent", "Govt. project deadlines"],
    ["Agriculture", "Harvest times", "Crop cycles"],
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border border-gray-300 text-sm shadow-md rounded-lg overflow-hidden">
        <thead className="bg-indigo-100 text-indigo-800">
          <tr>
            <th className="px-4 py-3">Industry</th>
            <th className="px-4 py-3">Rush Hour Peaks</th>
            <th className="px-4 py-3">Seasonal Surges</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([industry, rush, seasonal], idx) => (
            <tr key={idx} className="border-t hover:bg-indigo-50">
              <td className="px-4 py-2">{industry}</td>
              <td className="px-4 py-2">{rush}</td>
              <td className="px-4 py-2">{seasonal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IndustryTable;
