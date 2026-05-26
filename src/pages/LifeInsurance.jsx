import React from "react";
import { ArrowLeft, Shield } from "lucide-react";

const LifeInsurance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 px-4 py-10 sm:px-6 lg:px-10 mt-10">
      
      <div className="mx-auto max-w-5xl">

        {/* HEADER */}
        <div className="hidden md:flex mb-8 rounded-3xl bg-gradient-to-r from-red-600 to-red-500 shadow-xl overflow-hidden">
          <div className="flex w-full items-center justify-between p-8 lg:p-10">

            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-white/15 p-3 backdrop-blur">
                <Shield className="h-7 w-7 text-white" />
              </div>

              <div>
                <h1 className="text-3xl font-extrabold text-white">
                  Life Insurance
                </h1>

                <p className="text-red-100 text-sm mt-1">
                  Protect your future with secure and flexible life coverage
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 border border-white/20 px-6 py-4 backdrop-blur text-right">
              <p className="text-xs text-red-100">
                Module Status
              </p>

              <h2 className="text-3xl font-black text-white">
                Coming Soon
              </h2>
            </div>

          </div>
        </div>

        {/* BACK BUTTON */}
        <button
          onClick={() => window.history.back()}
          className="sm:w-auto h-12 px-4 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium hover:bg-gray-50 transition flex items-center gap-2 shadow-sm"
        >
          <ArrowLeft size={18} />
          Go Back
        </button>

        {/* MAIN CARD */}
        <div className="mt-6 rounded-3xl bg-white shadow-xl border border-gray-100 p-6 sm:p-10">

          {/* TITLE */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-red-600"></span>

              <span className="text-sm font-medium text-red-700">
                Under Development
              </span>
            </div>

            <h2 className="mt-5 text-2xl font-bold text-gray-900">
              Life Insurance Services
            </h2>

            <p className="text-gray-500 mt-2 max-w-2xl leading-relaxed">
              The Life Insurance module is currently under development.
              Soon you will be able to apply for life insurance coverage,
              manage beneficiaries, review policy details, and monitor
              premium payments directly from this portal.
            </p>
          </div>

          {/* FEATURE GRID */}
          <div className="grid gap-5 md:grid-cols-2">

            {[
              "Apply for new life insurance policies",
              "Track premium payment schedules",
              "Manage policy beneficiaries",
              "Access policy renewal information",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-5 hover:border-red-200 hover:bg-white transition"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-red-600"></div>

                  <p className="text-sm font-medium text-gray-700">
                    {item}
                  </p>
                </div>
              </div>
            ))}

          </div>

          {/* ACTION */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <button
              disabled
              className="w-full sm:flex-1 h-12 rounded-xl bg-red-600 text-white font-semibold shadow-md opacity-60 cursor-not-allowed"
            >
              Launching Soon
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default LifeInsurance;