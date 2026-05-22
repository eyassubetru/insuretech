import { Link } from "react-router";

export default function CustomerHomePage() {
  const phone = typeof window !== "undefined"
    ? localStorage.getItem("customerPhone")
    : null;

  return (
    <div className="min-h-screen bg-[#f7f7f7]">

      <main className="px-4 pb-12 pt-24 sm:px-6 lg:px-10">

        <div className="mx-auto max-w-6xl">

          {/* CARD WRAPPER */}
          <div className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm sm:p-10">

            {/* HEADER */}
            <div className="text-center">

              <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">
                Welcome to InsureTech
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                {phone
                  ? `Logged in as ${phone}`
                  : "Logged in successfully"}
              </p>

            </div>

            {/* GRID */}
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {/* OPTION 1 */}
              <div className="rounded-xl border border-red-100 bg-[#fff7f7] p-6">

                <h3 className="text-lg font-semibold text-slate-800">
                  Get Third Party Insurance
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  Compare insurance providers and choose the best option.
                </p>
                  <Link
                  to="/quote"
                  className="mt-6 flex h-11 w-full items-center justify-center rounded-lg bg-red-700 text-sm font-semibold text-white transition hover:bg-red-800"
                >
                   Start Quote
                </Link>
             

              </div>

              {/* OPTION 2 */}
              <div className="relative rounded-xl p-[1px] bg-gradient-to-r from-red-200 via-red-300 to-red-200 bg-[length:200%_200%] animate-borderMove">
  <div className="rounded-xl bg-[#fff7f7] p-6">

                <h3 className="text-lg font-semibold text-slate-800">
                  Policies
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  View active and expired insurance policies.
                </p>

               <Link
  to="/policies"
  className="mt-6 flex h-11 w-full items-center justify-center rounded-lg bg-red-700 text-sm font-semibold text-white animate-softPulse"
>
  View Policies
</Link>
                   </div>
              </div>

              {/* OPTION 3 */}
              <div className="rounded-xl border border-red-100 bg-[#fff7f7] p-6">

                <h3 className="text-lg font-semibold text-slate-800">
                  Renew Insurance
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  Renew your insurance quickly before expiry.
                </p>

                 <Link
                  to="/renew"
                  className="mt-6 flex h-11 w-full items-center justify-center rounded-lg bg-red-700 text-sm font-semibold text-white transition hover:bg-red-800"
                >
                   Renew Now
                </Link>

             

              </div>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
}