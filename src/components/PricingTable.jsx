import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { pricingRoutes, vehicleColumns } from '../data/pricing';
import { vehicleCapacity } from '../data/vehicles';

export default function PricingTable() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div>
      {/* Capacity overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 overflow-x-auto pricing-scroll"
      >
        <table className="w-full text-sm border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-dark-900 text-white">
              <th className="text-left p-4 font-semibold">Vehicle Type</th>
              <th className="text-center p-4 font-semibold">Seating Capacity</th>
              <th className="text-center p-4 font-semibold">Luggage Capacity</th>
            </tr>
          </thead>
          <tbody>
            {vehicleCapacity.map((row, i) => (
              <tr
                key={row.type}
                className={i % 2 === 0 ? 'bg-white' : 'bg-dark-50'}
              >
                <td className="p-4 font-medium text-dark-900">{row.type}</td>
                <td className="p-4 text-center text-dark-500">{row.seating}</td>
                <td className="p-4 text-center text-dark-500">{row.luggage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Vehicle switch tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
            activeTab === 'all'
              ? 'bg-gold-500 text-black'
              : 'bg-dark-50 text-dark-500 hover:bg-gold-50'
          }`}
        >
          All Vehicles
        </button>
        {vehicleColumns.map((col) => (
          <button
            key={col.key}
            onClick={() => setActiveTab(col.key)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
              activeTab === col.key
                ? 'bg-gold-500 text-black'
                : 'bg-dark-50 text-dark-500 hover:bg-gold-50'
            }`}
          >
            {col.label}
          </button>
        ))}
      </div>

      {/* Pricing table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="overflow-x-auto pricing-scroll"
      >
        <table className="w-full text-sm border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-dark-900 text-white">
              <th className="text-left p-4 font-semibold sticky left-0 bg-dark-900 z-10">
                Route / Trip Details
              </th>
              {vehicleColumns.map((col) => (
                <th
                  key={col.key}
                  className={`text-center p-4 font-semibold transition-opacity duration-300 ${
                    activeTab === 'all' || activeTab === col.key ? 'opacity-100' : 'opacity-30'
                  }`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pricingRoutes.map((row, i) => (
              <tr
                key={row.route}
                className={`border-b border-dark-100 ${i % 2 === 0 ? 'bg-white' : 'bg-dark-50'} hover:bg-gold-50 transition-colors`}
              >
                <td className="p-4 font-medium text-dark-900 sticky left-0 bg-inherit z-10">
                  {row.route}
                </td>
                {vehicleColumns.map((col) => {
                  const value = row[col.key];
                  const visible = activeTab === 'all' || activeTab === col.key;
                  return (
                    <td
                      key={col.key}
                      className={`text-center p-4 transition-all duration-300 ${
                        visible ? 'opacity-100' : 'opacity-20'
                      }`}
                    >
                      {value === null ? (
                        <span className="text-dark-300 text-xs">N/A</span>
                      ) : (
                        <span className="font-semibold text-dark-700">
                          {value} <span className="text-gold-500 text-xs">SAR</span>
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Note */}
      <p className="text-center text-sm text-dark-400 mt-6 flex items-center justify-center gap-2">
        <FaCheckCircle className="text-gold-500" />
        All prices are in Saudi Riyal (SAR). Contact us for custom routes and group bookings.
      </p>
    </div>
  );
}
