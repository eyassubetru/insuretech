import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function InsuranceForm() {
  const today = new Date().toISOString().split("T")[0];

  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    proposerName: "",
    age: "",
    businessRegion: "",
    businessWoreda: "",
    businessKebele: "",
    businessHouseNo: "",
    email: "",
    fax: "",
    businessTel: "",
    residentialRegion: "",
    residentialWoreda: "",
    residentialKebele: "",
    residentialHouseNo: "",
    residentialTel: "",
    poBox: "",
    insuranceFrom: today,
    insuranceTo: "",
    privatePurpose: "Yes",
    vehicleUse: "",
    declarationDate: today,
    branch: "",
    underwriter: "",
    declaration: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ["proposerName", "age", "email", "declaration"];
    const missing = requiredFields.filter((key) => !formData[key]);

    if (missing.length > 0) {
      alert("Fill required fields:\n\n" + missing.join(", "));
      return;
    }

    if (formData.declaration !== "yes") {
      alert("You must accept declaration.");
      return;
    }

    console.log(formData);
    alert("Submitted successfully!");
  };

  // =========================
  // STYLES
  // =========================
  const inputClass =
    "h-12 w-full rounded-2xl border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-100";

  const textareaClass =
    "w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-100";

  const labelClass = "text-sm font-semibold text-gray-700 mb-2 block";

  const sectionClass =
    "rounded-3xl border border-gray-100 bg-white p-6 shadow-sm";

  return (
      <div className="mx-auto max-w-6xl mt-10 ">

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white shadow-2xl p-6 sm:p-10 min-h-50"
        >

          {/* HEADER ROW */}
          <div className="flex items-center justify-between mb-6">

            

            <div>
              

              <h2 className="text-2xl font-bold text-gray-900">
                   Proposal Form
                </h2>
                <p className="text-gray-500 mt-1">
                  Fill all required information carefully
                </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((p) => !p)}
              className="h-11 w-11 rounded-xl border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-50"
            >
              {isOpen ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>

          </div>

          {/* COLLAPSIBLE CONTENT */}
          <div
            className={`transition-all duration-500 overflow-hidden ${
              isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >

            {/* 1. PROPOSER */}
            <div className={sectionClass}>
              <h3 className="font-bold mb-4">1. Proposer Details</h3>

              <div className="grid md:grid-cols-2 gap-4">

                <div>
                  <label className={labelClass}>Name of Proposer *</label>
                  <input
                    name="proposerName"
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Age *</label>
                  <input
                    type="number"
                    name="age"
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

              </div>
            </div>

            {/* 2. BUSINESS ADDRESS */}
            <div className={`${sectionClass} mt-6`}>
              <h3 className="font-bold mb-4">2. Business Address</h3>

              <div className="grid md:grid-cols-2 gap-4">

                <input className={inputClass} name="businessRegion" placeholder="Region" onChange={handleChange} />
                <input className={inputClass} name="businessWoreda" placeholder="Woreda" onChange={handleChange} />
                <input className={inputClass} name="businessKebele" placeholder="Kebele" onChange={handleChange} />
                <input className={inputClass} name="businessHouseNo" placeholder="House No" onChange={handleChange} />
                <input className={inputClass} name="email" placeholder="Email *" onChange={handleChange} />
                <input className={inputClass} name="businessTel" placeholder="Tel No" onChange={handleChange} />

              </div>
            </div>

            {/* 3. RESIDENTIAL ADDRESS */}
            <div className={`${sectionClass} mt-6`}>
              <h3 className="font-bold mb-4">3. Residential Address</h3>

              <div className="grid md:grid-cols-2 gap-4">

                <input className={inputClass} name="residentialRegion" placeholder="Region" onChange={handleChange} />
                <input className={inputClass} name="residentialWoreda" placeholder="Woreda" onChange={handleChange} />
                <input className={inputClass} name="residentialKebele" placeholder="Kebele" onChange={handleChange} />
                <input className={inputClass} name="residentialHouseNo" placeholder="House No" onChange={handleChange} />
                <input className={inputClass} name="residentialTel" placeholder="Telephone" onChange={handleChange} />
                <input className={inputClass} name="poBox" placeholder="P.O. Box" onChange={handleChange} />

              </div>
            </div>

            {/* 4. INSURANCE PERIOD */}
            <div className={`${sectionClass} mt-6`}>
              <h3 className="font-bold mb-4">4. Period of Insurance</h3>

              <div className="grid md:grid-cols-2 gap-4">

                <div>
                  <label className={labelClass}>From</label>
                  <input
                    type="date"
                    name="insuranceFrom"
                    value={formData.insuranceFrom}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>To</label>
                  <input
                    type="date"
                    name="insuranceTo"
                    value={formData.insuranceTo}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

              </div>
            </div>

            {/* 5. VEHICLE USAGE */}
            <div className={`${sectionClass} mt-6`}>
              <h3 className="font-bold mb-4">5. Vehicle Usage</h3>

              <label className={labelClass}>
                Will the vehicle be used solely for private purposes?
              </label>

              <select
                name="privatePurpose"
                value={formData.privatePurpose}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="Yes">Yes - Private Use</option>
                <option value="No">No - Other Use</option>
              </select>

              <label className={`${labelClass} mt-4`}>
                If not, specify usage
              </label>

              <textarea
                name="vehicleUse"
                rows={4}
                onChange={handleChange}
                className={textareaClass}
                placeholder="Own goods carrying, Public transport, Taxi, Motor trade, Car hire, etc..."
              />

              {/* TAGS */}
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-600">
                {[
                  "Own Goods Carrying",
                  "Public Transport",
                  "General Cartage",
                  "Own Service",
                  "Car Hire / Tour",
                  "Motor Trade",
                  "Taxi",
                  "Motor Cycle",
                  "Learner",
                  "Three Wheelers",
                  "Special Purpose",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-gray-100 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* 6. DECLARATION */}
            <div className={`${sectionClass} mt-6`}>
              <h3 className="font-bold mb-3">6. Declaration</h3>

              <p className="text-sm text-gray-600 mb-4">
                I declare that all provided information is correct and complete.
              </p>

              <div className="flex gap-6 text-sm">

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="declaration"
                    value="yes"
                    onChange={handleChange}
                  />
                  I Agree
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="declaration"
                    value="no"
                    onChange={handleChange}
                  />
                  I Do Not Agree
                </label>

              </div>
            </div>

            {/* SUBMIT */}
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="h-12 px-8 rounded-2xl bg-red-600 text-white font-semibold shadow-md hover:bg-red-700 transition active:scale-[0.98]"
              >
                Submit Form
              </button>
            </div>

          </div>
        </form>

      </div>

  );
}