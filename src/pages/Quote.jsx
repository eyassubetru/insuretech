import React, { useMemo, useState } from "react";
import { tariffData } from "../data/carInsuranceData";
import { Shield, Car, ChevronDown, ChevronUp ,ArrowLeft } from "lucide-react";
import InsuranceForm from "../components/InsuranceForm";
export default function PremiumCalculator() {
  const pricingData = tariffData;

  // =========================================
  // STATES
  // =========================================
  const [selectedType, setSelectedType] = useState("");
  const [selectedSubType, setSelectedSubType] =
    useState("");
  const [selectedDetail, setSelectedDetail] =
    useState("");
  const [selectedMinSeat, setSelectedMinSeat] =
    useState("");
  const [selectedMaxSeat, setSelectedMaxSeat] =
    useState("");
  const [selectedUsage, setSelectedUsage] =
    useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("");
  const [showPremiumModal, setShowPremiumModal] =
    useState(false);
  const [openSection, setOpenSection] = useState("vehicle");




  const [isInformationTabOpen , setIsInformationTabOpen] = useState(false);

  // =========================================
  // OPTIONS
  // =========================================

  const typeOptions = useMemo(() => {
    return [...new Set(pricingData.map((i) => i.type))];
  }, []);

  const subTypeOptions = useMemo(() => {
    return [
      ...new Set(
        pricingData
          .filter(
            (i) =>
              !selectedType ||
              i.type === selectedType
          )
          .map((i) => i.subType)
      ),
    ];
  }, [selectedType]);

  const detailOptions = useMemo(() => {
    return [
      ...new Set(
        pricingData
          .filter(
            (i) =>
              (!selectedType ||
                i.type === selectedType) &&
              (!selectedSubType ||
                i.subType === selectedSubType)
          )
          .map((i) => i.detail)
      ),
    ];
  }, [selectedType, selectedSubType]);

  const minSeatOptions = useMemo(() => {
    return [
      ...new Set(
        pricingData
          .filter(
            (i) =>
              (!selectedType ||
                i.type === selectedType) &&
              (!selectedSubType ||
                i.subType === selectedSubType) &&
              (!selectedDetail ||
                i.detail === selectedDetail)
          )
          .map((i) => i.minSeat)
      ),
    ];
  }, [
    selectedType,
    selectedSubType,
    selectedDetail,
  ]);

  const maxSeatOptions = useMemo(() => {
    return [
      ...new Set(
        pricingData
          .filter(
            (i) =>
              (!selectedType ||
                i.type === selectedType) &&
              (!selectedSubType ||
                i.subType === selectedSubType) &&
              (!selectedDetail ||
                i.detail === selectedDetail) &&
              (selectedMinSeat === "" ||
                i.minSeat ===
                Number(selectedMinSeat))
          )
          .map((i) => i.maxSeat)
      ),
    ];
  }, [
    selectedType,
    selectedSubType,
    selectedDetail,
    selectedMinSeat,
  ]);

  const usageOptions = useMemo(() => {
    return [
      ...new Set(
        pricingData
          .filter(
            (i) =>
              (!selectedType ||
                i.type === selectedType) &&
              (!selectedSubType ||
                i.subType === selectedSubType) &&
              (!selectedDetail ||
                i.detail === selectedDetail) &&
              (selectedMinSeat === "" ||
                i.minSeat ===
                Number(selectedMinSeat)) &&
              (selectedMaxSeat === "" ||
                i.maxSeat ===
                Number(selectedMaxSeat))
          )
          .map((i) => i.usage)
      ),
    ];
  }, [
    selectedType,
    selectedSubType,
    selectedDetail,
    selectedMinSeat,
    selectedMaxSeat,
  ]);

  const categoryOptions = useMemo(() => {
    return [
      ...new Set(
        pricingData
          .filter(
            (i) =>
              (!selectedType ||
                i.type === selectedType) &&
              (!selectedSubType ||
                i.subType === selectedSubType) &&
              (!selectedDetail ||
                i.detail === selectedDetail) &&
              (selectedMinSeat === "" ||
                i.minSeat ===
                Number(selectedMinSeat)) &&
              (selectedMaxSeat === "" ||
                i.maxSeat ===
                Number(selectedMaxSeat)) &&
              (!selectedUsage ||
                i.usage === selectedUsage)
          )
          .map((i) => i.category)
      ),
    ];
  }, [
    selectedType,
    selectedSubType,
    selectedDetail,
    selectedMinSeat,
    selectedMaxSeat,
    selectedUsage,
  ]);

  // =========================================
  // MATCHED ITEM
  // =========================================
  const matchedItem = pricingData.find((i) => {
    return (
      i.type === selectedType &&
      i.subType === selectedSubType &&
      i.detail === selectedDetail &&
      (selectedMinSeat === "" ||
        i.minSeat === Number(selectedMinSeat)) &&
      (selectedMaxSeat === "" ||
        i.maxSeat === Number(selectedMaxSeat)) &&
      i.usage === selectedUsage &&
      i.category === selectedCategory
    );
  });

  // =========================================
  // REUSABLE STYLES
  // =========================================
  const inputClass =
    "h-12 w-full rounded-2xl border border-gray-300 bg-white px-4 text-sm outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-100 disabled:cursor-not-allowed disabled:bg-gray-100 ";

  const labelClass =
    "mb-2 block text-sm font-semibold text-gray-700";

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 px-4 py-10 sm:px-6 lg:px-10 mt-10">
        <div className="mx-auto max-w-7xl">

        
          <button
                onClick={() => window.history.back()}
                className="sm:w-auto h-12 px-2 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition flex items-center gap-2 mb-10"
              >
                <span>
                  <ArrowLeft />
                </span>
                Go Back
              </button>

          {/* FORM CARD */}
          <div className="rounded-3xl bg-red- shadow-xl border border-gray-100 p-6 sm:p-10 ">

            {/* TITLE */}
            <div className="flex  justify-between  py-5">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Vehicle Information
                </h2>
                <p className="text-gray-500 mt-1">
                  Fill in the details below to calculate your premium.
                </p>

              </div>
              
            <button
              type="button"
              onClick={() => setIsInformationTabOpen((p) => !p)}
              className="h-11 w-11 rounded-xl border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-50"
            >
              {isInformationTabOpen ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
            </div>

            
            {/* GRID */}
            <div className={`grid gap-6 md:grid-cols-2 xl:grid-cols-3 ${isInformationTabOpen ? "hidden" : ""}`}>

              {/* reusable input style feel improved */}
              {[
                { label: "Vehicle Type", value: selectedType, set: setSelectedType, options: typeOptions },
                { label: "Sub Type", value: selectedSubType, set: setSelectedSubType, options: subTypeOptions, disabled: !selectedType },
                { label: "Detail", value: selectedDetail, set: setSelectedDetail, options: detailOptions, disabled: !selectedSubType },
                { label: "Minimum Seat", value: selectedMinSeat, set: setSelectedMinSeat, options: minSeatOptions, disabled: !selectedDetail },
                { label: "Maximum Seat", value: selectedMaxSeat, set: setSelectedMaxSeat, options: maxSeatOptions, disabled: !selectedDetail },
                { label: "Usage", value: selectedUsage, set: setSelectedUsage, options: usageOptions, disabled: !selectedDetail },
              ].map((field) => (
                <div key={field.label}>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">
                    {field.label}
                  </label>

                  <select
                    className="w-full h-12 rounded-xl border border-gray-200 bg-white px-3 text-sm shadow-sm outline-none transition focus:border-red-400 focus:ring-4 focus:ring-red-100 disabled:opacity-40 disabled:bg-gray-100"
                    value={field.value}
                    disabled={field.disabled}
                    onChange={(e) => field.set(e.target.value)}
                  >
                    <option value="">Select {field.label}</option>
                    {field.options.map((opt, i) => (
                      <option key={i} value={opt ?? ""}>
                        {opt ?? "N/A"}
                      </option>
                    ))}
                  </select>
                </div>
              ))}

              {/* CATEGORY FULL WIDTH */}
              <div className="md:col-span-2 xl:col-span-3">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Category
                </label>

                <select
                  className="w-full h-12 rounded-xl border border-gray-200 bg-white px-3 text-sm shadow-sm outline-none transition focus:border-red-400 focus:ring-4 focus:ring-red-100 disabled:opacity-40"
                  value={selectedCategory}
                  disabled={!selectedUsage}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">Select Category</option>
                  {categoryOptions.map((c, i) => (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* BUTTONS */}
            <div className={`mt-10 flex flex-col gap-4 sm:flex-row sm:items-center ${isInformationTabOpen ? "hidden" : ""}`}>

              <button
                onClick={() => matchedItem && setShowPremiumModal(true)}
                disabled={!matchedItem}
                className="w-full sm:flex-1 h-12 rounded-xl bg-red-600 text-white font-semibold shadow-md transition hover:bg-red-700 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Calculate Premium
              </button>

              

            </div>


          </div>
          
        </div>
      </div>

      {/* MODAL */}
      {showPremiumModal && matchedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">

          <div className="w-full max-w-lg rounded-3xl bg-white shadow-2xl overflow-hidden">

            {/* HEADER */}
            <div className="bg-gradient-to-r from-red-600 to-red-500 p-6 text-white relative">

              <button
                onClick={() => setShowPremiumModal(false)}
                className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/20 hover:bg-white/30 transition"
              >
                ×
              </button>

              <h2 className="text-xl font-bold">Premium Summary</h2>
              <p className="text-sm text-red-100">Third Party Insurance</p>
            </div>

            {/* BODY */}
            <div className="p-6">

              <div className="text-center rounded-2xl bg-green-50 p-6 border border-green-100">
                <p className="text-xs font-semibold text-green-600 uppercase">
                  Total Premium
                </p>
                <h1 className="text-4xl font-black text-green-700 mt-2">
                  ETB {matchedItem.premium.toLocaleString()}
                </h1>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  ["Vehicle Type", matchedItem.type],
                  ["Sub Type", matchedItem.subType],
                  ["Detail", matchedItem.detail],
                  ["Usage", matchedItem.usage],
                  ["Category", matchedItem.category],

                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between bg-gray-50 p-3 rounded-xl">
                    <span className="text-sm text-gray-500">{label}</span>
                    <span className="text-sm font-semibold text-gray-800 text-right">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowPremiumModal(false)}
                className="mt-6 w-full h-11 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition"
              >
                Close
              </button>

            </div>
            
          </div>
         
        </div>

      )}

      
    </>
  );
}