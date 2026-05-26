import React from 'react';

const FeeCards = ({ scholarships, zones }) => (
  <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
    
    {/* Scholarship */}
    <div className="p-8 bg-gray-50 border border-gray-200 rounded-2xl">
      <h4 className="text-xl font-bold mb-6 text-gray-800">Scholarships & Waivers</h4>
      <div className="space-y-3">
        {scholarships?.map((s, i) => (
          <div key={i} className="flex justify-between text-sm font-medium border-b border-gray-200 pb-2">
            <span className="text-gray-600">{s.type}</span>
            <span className="text-primary">{s.waiver}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Transport */}
    <div className="p-8 bg-gray-50 border border-gray-200 rounded-2xl">
      <h4 className="text-xl font-bold mb-6 text-gray-800">Transport Zones</h4>
      <div className="space-y-3">
        {zones?.map((z, i) => (
          <div key={i} className="flex justify-between text-sm font-medium border-b border-gray-200 pb-2">
            <span className="text-gray-600">{z.zone}</span>
            <span className="text-gray-800">৳{z.fee}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Payment */}
    <div className="p-8 bg-primary text-white rounded-2xl flex flex-col justify-center shadow-lg shadow-primary/20">
      <h4 className="text-2xl font-bold mb-2">Digital Payment</h4>
      <p className="text-sm opacity-90 mb-6">Pay securely via online gateways</p>
      <div className="flex gap-3 text-xs font-bold">
        <span className="bg-white/20 px-3 py-1 rounded">BKASH</span>
        <span className="bg-white/20 px-3 py-1 rounded">NAGAD</span>
        <span className="bg-white/20 px-3 py-1 rounded">CARD</span>
      </div>
    </div>
  </div>
);

export default FeeCards;