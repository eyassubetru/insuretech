import React, { useState } from 'react';
import { Eye, ChevronUp } from "lucide-react";

const PoliciesPage = () => {
  const documents = [
    {
      id: 1,
      name: "አዲሱ የሶስተኛ ወገን የካሳ ክፍያ አዋጅ",
      filename: "አዲሱ_የሶስተኛ_ወገን_የካሳ_ክፍያ_አዋጅ.pdf",
      type: "PDF",
      badgeClass: "bg-red-100 text-red-800 border-red-200"
    },
    {
      id: 2,
      name: "Motor Insurance Minimum Premium Rate",
      filename: "Directive_No_SIB_60_2023_Motor_Insurance_Minimum_Premium_Rate.pdf",
      type: "PDF",
      badgeClass: "bg-red-100 text-red-800 border-red-200"
    },
    {
      id: 3,
      name: "Oversight of the National Payment System",
      filename: "oversight-the-national-payement-system.pdf",
      type: "PDF",
      badgeClass: "bg-red-100 text-red-800 border-red-200"
    },
    {
      id: 4,
      name: "NBE Revised Minimum Motor OD Rate",
      filename: "NBE REVISED MINIMUM MOTOR OD RATE.xlsx",
      type: "XLSX",
      badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-200"
    },
    {
      id: 5,
      name: "Third Party Premium Calculation & Tariffs",
      filename: "Third party primum calculation.xlsx",
      type: "XLSX",
      badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-200"
    },
    {
      id: 6,
      name: "Compulsory Motor Third Party Risks Proposal Form",
      filename: "TP Proposal.docx",
      type: "DOCX",
      badgeClass: "bg-blue-100 text-blue-800 border-blue-200"
    }
  ];

  const [activeId, setActiveId] = useState(null);

  return (
    <div className="mt-20 min-h-screen bg-zinc-50 text-zinc-800 font-sans antialiased pb-16">
      {/* Red Themed Header */}
      <header className="bg-gradient-to-r from-red-800 via-red-700 to-amber-700 text-white py-8 px-6 shadow-md">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mt-2 tracking-tight">
            Official Document & Policy
          </h1>

        </div>

      </header>

      {/* Main Responsive Grid Container */}
      <main className="max-w-6xl mx-auto px-4 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {documents.map((doc) => {
            const isPdf = doc.type === "PDF";
            const isExpanded = activeId === doc.id;

            return (
              <div
                key={doc.id}
                className={`bg-white border rounded-xl shadow-sm transition-all duration-200 flex flex-col overflow-hidden ${isExpanded ? 'border-red-400 ring-2 ring-red-50 md:col-span-2' : 'border-zinc-200 hover:border-zinc-300'
                  }`}
              >
                {/* Horizontal Content Panel */}
                <div className="p-4 flex gap-4 items-start">

                  {/* Document Thumbnail Trigger */}
                  <div
                    onClick={() => isPdf && setActiveId(isExpanded ? null : doc.id)}
                    className={`w-16 h-20 sm:w-20 sm:h-24 rounded border overflow-hidden shrink-0 bg-zinc-100 relative shadow-inner group ${isPdf ? 'cursor-pointer border-zinc-300 hover:border-red-400' : 'border-zinc-200'
                      }`}
                  >
                    {isPdf ? (
                      <>
                        {/* Live embedded file preview targeted only on first page layer */}
                        <object
                          data={`/documents/${doc.filename}#page=1&toolbar=0&navpanes=0&scrollbar=0`}
                          type="application/pdf"
                          className=" w-full h-full pointer-events-none object-cover"
                        >
                          <div className="w-full h-full flex items-center justify-center bg-red-50 text-red-700 text-xs font-bold">PDF</div>
                        </object>
                        {/* Overlay to give crisp modern visual feedback on hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-red-950/10 transition-colors flex items-center justify-center">
                          <span className=" bg-white/90 text-zinc-800 text-[9px] font-bold px-1 py-0.5 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity">
                            {isExpanded ? "Close" : "Expand"}
                          </span>
                        </div>
                      </>
                    ) : (
                      /* Document / Spreadsheet fallback stylized icons */
                      <div className="w-full h-full flex flex-col items-center justify-center p-1 text-center bg-zinc-50">
                        <span className="text-xl">
                          {doc.type === "XLSX" ? "📊" : "📝"}
                        </span>
                        <span className="text-[9px] font-black tracking-wider uppercase mt-1 text-zinc-500">
                          {doc.type}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Metadata and Control Column */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between h-20 sm:h-24">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-[9px] font-mono font-extrabold px-1.5 py-0.5 rounded border uppercase shrink-0 ${doc.badgeClass}`}>
                          {doc.type}
                        </span>
                        <h3 className="text-xs font-bold text-zinc-900 truncate">{doc.name}</h3>
                      </div>
                      <p className="text-[11px] text-zinc-400 font-mono truncate mt-1">{doc.filename}</p>
                    </div>

                    {/* Footer Utility Actions */}
                    <div className="flex items-center gap-2 mt-2">
                      {isPdf && (
                       <button
  onClick={() => setActiveId(isExpanded ? null : doc.id)}
  className={`
    inline-flex items-center gap-1.5
    rounded-lg px-3 py-1.5
    text-xs font-semibold transition-colors
    ${
      isExpanded
        ? "bg-zinc-900 text-white hover:bg-zinc-800"
        : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
    }
  `}
>

  {isExpanded ? (
    <>
      <ChevronUp size={14} />
      Collapse
    </>
  ) : (
    <>
      <Eye size={14} />
      Preview Live
    </>
  )}

</button>
                      )}
                      <a
                        href={`/documents/${doc.filename}`}
                        download
                        className="bg-red-700 hover:bg-red-800 text-white text-xs font-semibold px-2.5 py-1 rounded transition-colors shadow-xs"
                      >
                        📥 Download
                      </a>
                    </div>
                  </div>

                </div>

                {/* Live Full-Width Interactive Iframe Panel */}
                {isPdf && isExpanded && (
                  <div className="w-full overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50">

                    <div className="min-w-[700px] sm:min-w-0 h-[500px] sm:h-[700px]">

                      <iframe
                        src={`/documents/${doc.filename}#toolbar=1&view=FitH`}
                        title={doc.name}
                        className="h-full w-full rounded-xl bg-white"
                      />

                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>
        <button
          onClick={() => window.history.back()}
          className="h-11 mt-5 w-full rounded-lg bg-red-700 text-sm font-semibold text-white transition hover:bg-red-800"
        >
          Go Back
        </button>
      </main>
    </div>
  );
};

export default PoliciesPage;