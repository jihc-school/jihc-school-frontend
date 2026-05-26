import React from 'react';

const FeeTable = ({ title, data }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-primary pl-4">
        {title} Section
      </h2>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table w-full border-collapse">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-600">
              <tr>
                <th className="py-5 pl-6 text-sm font-semibold uppercase tracking-wider">Grade</th>
                <th className="py-5 text-sm font-semibold uppercase tracking-wider text-center">Admission</th>
                <th className="py-5 text-sm font-semibold uppercase tracking-wider text-center">Monthly</th>
                <th className="py-5 text-sm font-semibold uppercase tracking-wider text-center">Lab/Bus</th>
                <th className="py-5 pr-6 text-sm font-semibold uppercase tracking-wider text-right">Annual Session</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-5 pl-6">
                    <span className="text-xl font-bold text-gray-900">{row.grade}</span>
                  </td>
                  <td className="py-5 text-center font-medium text-gray-700">৳{row.admission}</td>
                  <td className="py-5 text-center">
                    <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-lg font-bold">
                      ৳{row.tuition}
                    </span>
                  </td>
                  <td className="py-5 text-center text-sm text-gray-500 font-medium">
                    L: ৳{row.lab} | B: ৳{row.transport}
                  </td>
                  <td className="py-5 pr-6 text-right font-bold text-gray-800">৳{row.session}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeeTable;