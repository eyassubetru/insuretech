import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import motorInsuranceData from '../data/motorInsurance';

const MotorInsurance = () => {
  const [activeTab, setActiveTab] = useState("Motor Private");
  const [selectedDetails, setSelectedDetails] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Extract distinct main categories safely
  const mainCategories = [...new Set(motorInsuranceData.map(item => item.category))];
  console.log(motorInsuranceData.map(item => item.category))
  console.log(mainCategories)

  // Filter list based on current selection
  const filteredTariffs = motorInsuranceData.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 px-4 py-10 sm:px-6 lg:px-10 mt-10">
      <div className="mx-auto max-w-5xl">
        
        {/* BACK BUTTON */}
        <button
          onClick={() => window.history.back()}
          className="h-12 px-4 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition flex items-center gap-2 mb-8 shadow-sm bg-white"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Go Back</span>
        </button>

        {/* TARIFF CARD EXPLORER */}
        <div className="rounded-3xl bg-white shadow-xl border border-gray-100 p-6 sm:p-8 mb-8">
          <div className="flex justify-between items-center pb-5 border-b border-gray-100 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Insurance Tariffs</h2>
              <p className="text-sm text-gray-500 mt-0.5">Toggle categories to review comprehensive OD pricing guidelines.</p>
            </div>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="h-11 w-11 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 flex items-center justify-center"
            >
              {isCollapsed ? <ChevronDown className="h-5 w-5" /> : <ChevronUp className="h-5 w-5" />}
            </button>
          </div>

          <div className={isCollapsed ? "hidden" : ""}>
            {/* SEGMENTED TAB BUTTONS */}
            <div className="flex flex-wrap gap-2 p-1 bg-gray-100/80 rounded-xl mb-6">
              {mainCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`flex-1 min-w-[120px] py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition ${
                    activeTab === cat ? "bg-white text-red-600 shadow-sm" : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* DYNAMIC LISTING PANEL */}
            <div className="grid gap-3 sm:grid-cols-2">
              {filteredTariffs.map((tariff, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedDetails(tariff)}
                  className="w-full text-left bg-gray-50/50 border border-gray-100 hover:border-red-100 hover:bg-red-50/30 p-4 rounded-xl transition flex flex-col justify-between group"
                >
                  <div>
                    {tariff.group && (
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide block mb-1">
                        {tariff.group}
                      </span>
                    )}
                    <span className="text-sm font-semibold text-gray-800">{tariff.subCategory}</span>
                  </div>
                  <span className="text-xs text-red-500 font-medium self-end mt-2 group-hover:translate-x-1 transition-transform">
                    View Matrix ➔
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 4: STATIC BUSINESS GUIDE */}
        <div className="rounded-3xl bg-white shadow-xl border border-gray-100 p-6 sm:p-8 border-t-4 border-t-red-600 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Business Rules Application Guide</h2>
            <p className="text-xs text-gray-500 mt-0.5">Applies directly onto the comprehensive configuration baselines.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 text-sm text-gray-600">
            {/* Optional Covers & Duty Free */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                <h3 className="font-bold text-gray-900">I) Additional Covers</h3>
                <p>• <strong>Fire & Lightning:</strong> 70% of basic OD rate.</p>
                <p>• <strong>Increase in TPLL:</strong> 1.5% (Private) | 1.75% (Commercial).</p>
                <p>• <strong>BSG Extension:</strong> Private: 0.15% | Commercial: 0.20%.</p>
                <div className="mt-2 text-xs bg-white p-2.5 rounded-lg border">
                  <span className="font-semibold block mb-1 text-gray-700">Territorial Loadings:</span>
                  Djibouti/Kenya/Eritrea/Sudan: 10% | Somalia/S. Sudan: 15%
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900">II) Duty Free Loading</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Applied on basic line items.</p>
                </div>
                <div className="bg-red-50 text-red-600 font-black text-lg px-3 py-1 rounded-lg border border-red-100">+30%</div>
              </div>
            </div>

            {/* Short Term Scales */}
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col">
              <h3 className="font-bold text-gray-900 mb-2">IV) Short Term Scales</h3>
              <div className="bg-white rounded-xl border overflow-hidden text-xs flex-1  overflow-y-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 border-b text-gray-500 font-medium">
                    <tr><th className="p-2">Term Duration</th><th className="p-2 text-right">Applied Rate</th></tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-600">
                    {[['Upto 1 mo.', '20%'], ['1 - 2 mos.', '30%'], ['2 - 3 mos.', '40%'], ['3 - 6 mos.', '70%'], ['6 - 9 mos.', '85%'], ['9 - 11 mos.', '95%']].map(([d, r]) => (
                      <tr key={d}><td className="p-2">{d}</td><td className="p-2 text-right font-medium text-gray-900">{r}</td></tr>
                    ))}
                    <tr className="bg-red-50 text-red-700 font-semibold"><td className="p-2">Over 11 Months</td><td className="p-2 text-right">100% (Annual)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* COMPACT MODAL SUMMARY */}
      {selectedDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white shadow-2xl overflow-hidden border">
            <div className="bg-gradient-to-r from-red-600 to-red-500 p-5 text-white flex justify-between items-center">
              <div>
                <h2 className="font-bold text-base leading-tight">{selectedDetails.subCategory}</h2>
                <p className="text-[10px] text-red-100 font-semibold uppercase tracking-wider mt-0.5">{selectedDetails.category}</p>
              </div>
              <button onClick={() => setSelectedDetails(null)} className="h-7 w-7 rounded-full bg-white/20 font-bold text-sm">×</button>
            </div>
            <div className="p-5 space-y-4">
              <div className="divide-y text-xs text-gray-600">
                {Object.entries(selectedDetails.details).map(([key, value]) => (
                  <div key={key} className="py-2.5 flex justify-between items-start gap-4">
                    <span className="font-medium text-gray-400 uppercase text-[9px] tracking-wider pt-0.5">{key}</span>
                    <span className="font-bold text-gray-800 text-right max-w-[65%]">{value}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => setSelectedDetails(null)} className="w-full h-10 rounded-xl bg-gray-950 text-white text-xs font-semibold hover:bg-gray-800 transition">
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MotorInsurance;