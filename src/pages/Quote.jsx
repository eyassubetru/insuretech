import React, { useMemo, useState } from "react";
import { tariffData } from "../data/thirdPartyPrimumCalculationData";
import { Shield, Car } from "lucide-react";

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
    "h-12 w-full rounded-2xl border border-gray-300 bg-white px-4 text-sm outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-100 disabled:cursor-not-allowed disabled:bg-gray-100";

  const labelClass =
    "mb-2 block text-sm font-semibold text-gray-700";

  return (
  <>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50 px-4 py-8 sm:px-6 lg:px-8 mt-10">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="hidden md:flex mb-6 overflow-hidden rounded-3xl bg-gradient-to-r from-red-700 to-red-600 shadow-2xl">
          <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between lg:p-10">

            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-2xl bg-white/20 p-3 backdrop-blur">
                  <Shield className="h-7 w-7 text-white" />
                </div>

                <div>
                  <h1 className="text-2xl font-black text-white sm:text-4xl">
                    Insurance Premium Calculator
                  </h1>

                  <p className="mt-1 text-red-100">
                    Select vehicle details and calculate
                    premium instantly.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
              <p className="text-sm font-medium text-red-100">
                Estimated Premium
              </p>

              <h2 className="mt-2 text-4xl font-black text-white">
                {matchedItem
                  ? `ETB ${matchedItem.premium.toLocaleString()}`
                  : "—"}
              </h2>
            </div>
          </div>
        </div>

        {/* MAIN */}
        <div>

          {/* FORM */}
          <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">

            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900">
                Vehicle Information
              </h2>

              <p className="mt-2 text-gray-500">
                Fill all vehicle information to
                calculate premium.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

              {/* TYPE */}
              <div>
                <label className={labelClass}>
                  Vehicle Type
                </label>

                <select
                  className={inputClass}
                  value={selectedType}
                  onChange={(e) => {
                    setSelectedType(
                      e.target.value
                    );

                    setSelectedSubType("");
                    setSelectedDetail("");
                    setSelectedMinSeat("");
                    setSelectedMaxSeat("");
                    setSelectedUsage("");
                    setSelectedCategory("");
                  }}
                >
                  <option value="">
                    Select Type
                  </option>

                  {typeOptions.map((type) => (
                    <option
                      key={type}
                      value={type}
                    >
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* SUBTYPE */}
              <div>
                <label className={labelClass}>
                  Sub Type
                </label>

                <select
                  className={inputClass}
                  value={selectedSubType}
                  disabled={!selectedType}
                  onChange={(e) => {
                    setSelectedSubType(
                      e.target.value
                    );

                    setSelectedDetail("");
                    setSelectedMinSeat("");
                    setSelectedMaxSeat("");
                    setSelectedUsage("");
                    setSelectedCategory("");
                  }}
                >
                  <option value="">
                    Select Sub Type
                  </option>

                  {subTypeOptions.map(
                    (subType) => (
                      <option
                        key={subType}
                        value={subType}
                      >
                        {subType}
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* DETAIL */}
              <div>
                <label className={labelClass}>
                  Detail
                </label>

                <select
                  className={inputClass}
                  value={selectedDetail}
                  disabled={!selectedSubType}
                  onChange={(e) => {
                    setSelectedDetail(
                      e.target.value
                    );

                    setSelectedMinSeat("");
                    setSelectedMaxSeat("");
                    setSelectedUsage("");
                    setSelectedCategory("");
                  }}
                >
                  <option value="">
                    Select Detail
                  </option>

                  {detailOptions.map(
                    (detail) => (
                      <option
                        key={detail}
                        value={detail}
                      >
                        {detail}
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* MIN SEAT */}
              <div>
                <label className={labelClass}>
                  Minimum Seat
                </label>

                <select
                  className={inputClass}
                  value={selectedMinSeat}
                  disabled={!selectedDetail}
                  onChange={(e) => {
                    setSelectedMinSeat(
                      e.target.value
                    );

                    setSelectedMaxSeat("");
                    setSelectedUsage("");
                    setSelectedCategory("");
                  }}
                >
                  <option value="">
                    Select Minimum Seat
                  </option>

                  {minSeatOptions.map(
                    (seat, index) => (
                      <option
                        key={index}
                        value={seat ?? ""}
                      >
                        {seat === null
                          ? "N/A"
                          : seat}
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* MAX SEAT */}
              <div>
                <label className={labelClass}>
                  Maximum Seat
                </label>

                <select
                  className={inputClass}
                  value={selectedMaxSeat}
                  disabled={!selectedDetail}
                  onChange={(e) => {
                    setSelectedMaxSeat(
                      e.target.value
                    );

                    setSelectedUsage("");
                    setSelectedCategory("");
                  }}
                >
                  <option value="">
                    Select Maximum Seat
                  </option>

                  {maxSeatOptions.map(
                    (seat, index) => (
                      <option
                        key={index}
                        value={seat ?? ""}
                      >
                        {seat === null
                          ? "N/A"
                          : seat}
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* USAGE */}
              <div>
                <label className={labelClass}>
                  Usage
                </label>

                <select
                  className={inputClass}
                  value={selectedUsage}
                  disabled={!selectedDetail}
                  onChange={(e) => {
                    setSelectedUsage(
                      e.target.value
                    );

                    setSelectedCategory("");
                  }}
                >
                  <option value="">
                    Select Usage
                  </option>

                  {usageOptions.map(
                    (usage) => (
                      <option
                        key={usage}
                        value={usage}
                      >
                        {usage}
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* CATEGORY */}
              <div className="md:col-span-2 xl:col-span-3">
                <label className={labelClass}>
                  Category
                </label>

                <select
                  className={inputClass}
                  value={selectedCategory}
                  disabled={!selectedUsage}
                  onChange={(e) => {
                    setSelectedCategory(
                      e.target.value
                    );
                  }}
                >
                  <option value="">
                    Select Category
                  </option>

                  {categoryOptions.map(
                    (category) => (
                      <option
                        key={category}
                        value={category}
                      >
                        {category}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <button
                onClick={() => {
                  if (matchedItem) {
                    setShowPremiumModal(true);
                  }
                }}
                disabled={!matchedItem}
                className="flex h-14 flex-1 items-center justify-center rounded-2xl bg-red-700 px-6 text-sm font-bold text-white transition hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Calculate Premium
              </button>

              <button
                onClick={() =>
                  window.history.back()
                }
                className="h-14 rounded-2xl border border-gray-300 px-6 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* MODAL */}
    {showPremiumModal && matchedItem && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">

        <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">

          {/* TOP */}
          <div className="bg-gradient-to-r from-red-700 to-red-600 p-6 text-white">

            <button
              onClick={() =>
                setShowPremiumModal(false)
              }
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-xl transition hover:bg-white/30"
            >
              ×
            </button>

            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/20 p-3">
                <Shield className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-2xl font-black">
                  Premium Calculated
                </h2>

                <p className="text-sm text-red-100">
                  Third Party Insurance
                </p>
              </div>
            </div>
          </div>

          {/* BODY */}
          <div className="p-6">

            <div className="rounded-3xl bg-gradient-to-br from-green-50 to-emerald-100 p-6 text-center">

              <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
                Total Premium
              </p>

              <h1 className="mt-3 text-5xl font-black text-green-700">
                ETB{" "}
                {matchedItem.premium.toLocaleString()}
              </h1>
            </div>

            <div className="mt-6 space-y-4">

              {[
                {
                  label: "Vehicle Type",
                  value: matchedItem.type,
                },
                {
                  label: "Sub Type",
                  value: matchedItem.subType,
                },
                {
                  label: "Detail",
                  value: matchedItem.detail,
                },
                {
                  label: "Usage",
                  value: matchedItem.usage,
                },
                {
                  label: "Category",
                  value: matchedItem.category,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start justify-between gap-4 rounded-2xl bg-gray-50 p-4"
                >
                  <p className="text-sm font-semibold text-gray-500">
                    {item.label}
                  </p>

                  <p className="max-w-[60%] text-right text-sm font-bold text-gray-800">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                setShowPremiumModal(false)
              }
              className="mt-6 h-12 w-full rounded-2xl bg-red-700 text-sm font-bold text-white transition hover:bg-red-800"
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