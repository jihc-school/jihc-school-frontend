import React, { useState, useEffect } from 'react';
import FeeTable from './FeeTable/FeeTable';
import FeeCards from './FeeCards/FeeCards';
import PageBanner from '../../components/Shared/PageBanner/PageBanner';

const FeeStructure = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/fees.json')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return <div className="p-20 text-center font-bold">Loading Fees...</div>;

  return (
    <div className="min-h-screen bg-white pb-20">
        <PageBanner></PageBanner>
        <FeeTable title="Primary" data={data.academic_fees.primary} />
        <FeeTable title="Secondary" data={data.academic_fees.secondary} />

        <FeeCards scholarships={data.scholarships} zones={data.transport_zones} />
      
        {/* Simple Policy List */}
        <div className="max-w-6xl mx-auto mt-16 px-4">
            <div className="p-8 bg-blue-50/50 border border-blue-100 rounded-2xl">
                <h5 className="text-lg font-bold text-blue-900 mb-4">Important Policies</h5>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                    {data.policies.map((p, i) => (
                    <li key={i} className="text-sm text-blue-800/80 flex items-center gap-2 font-medium">
                        • {p}
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  );
};

export default FeeStructure;