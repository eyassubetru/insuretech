import React from "react";

const Renew = () => {
  return (
    <div className="min-h-screen bg-[#f7f7f7] px-4 py-10 sm:px-6 lg:px-10 flex items-center justify-center">

      <div className="w-full max-w-2xl rounded-2xl border border-red-100 bg-white p-8 sm:p-12 shadow-sm text-center">

        {/* System Label */}
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-700">
          InsureTech Service Portal
        </p>

        {/* Title */}
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-800">
          Insurance Renewal System
        </h1>

        {/* Status Badge */}
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-red-600"></span>
          <span className="text-sm font-medium text-red-700">
            Coming Soon
          </span>
        </div>

        {/* Description */}
        <p className="mt-6 text-sm sm:text-base text-slate-500 leading-relaxed">
          The insurance renewal module is currently under development.
          Soon you will be able to renew your active policies, check expiry dates,
          and manage continuous coverage directly from this portal.
        </p>

    

        {/* Back Button */}
        <div className="mt-8">
          <button
            onClick={() => window.history.back()}
            className="h-11 w-full rounded-lg bg-red-700 text-sm font-semibold text-white transition hover:bg-red-800"
          >
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
};

export default Renew;