import { Link } from "react-router";
import {
  Car,
  ShieldCheck,
  ArrowRight,
  Motorbike,
} from "lucide-react";

export default function CustomerHomePage() {
  const phone =
    typeof window !== "undefined"
      ? localStorage.getItem("customerPhone")
      : null;

  const mainCards = [
    {
      title: "Car Insurance",
      description:
        "Compare insurance providers and get the best coverage for your vehicle.",
      icon: Car,
      button: "Start Quote",
      link: "/quote",
    },
     {
      title: "Motor Insurance",
      description:
        "Protect your loved ones with flexible life insurance plans tailored to your future needs.",
      icon: Motorbike,
      button: "Get Covered",
      link: "/motor-insurance",
    },
    {
      title: "Life Insurance",
      description:
        "Protect your loved ones with flexible life insurance plans tailored to your future needs.",
      icon: ShieldCheck,
      button: "Get Covered",
      link: "/life-insurance",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff5f5] via-[#fffafa] to-whit">

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">

        {/* HERO SECTION */}
       <section className="relative overflow-hidden rounded-2xl sm:rounded-[32px] border border-red-100 bg-white shadow-lg sm:shadow-xl ">

  {/* BACKGROUND BLUR */}
  <div className="absolute right-0 top-0 h-40 w-40 sm:h-72 sm:w-72 rounded-full bg-red-100 blur-3xl opacity-40" />

  <div className="relative z-10 px-5 py-8 sm:px-12 sm:py-14">

    <div className="max-w-2xl">

      {/* TITLE */}
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:mt-5 sm:text-5xl">
        Welcome to{" "}
        <span className="text-red-700">
          InsureTech
        </span>
      </h1>

      {/* SUBTEXT */}
      {/* <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-5 sm:text-lg sm:leading-relaxed">
        Manage your insurance policies, renew coverage,
        and compare plans in one secure platform.
      </p> */}

      {/* USER STATUS */}
      <div className="mt-5 flex items-center gap-2 text-xs text-slate-500 sm:mt-6 sm:text-sm">

        <div className="h-2 w-2 rounded-full bg-green-500" />

        {phone
          ? `Logged in as ${phone}`
          : "Logged in successfully"}

      </div>

    </div>

  </div>

</section>

        {/* MAIN ACTION CARDS */}
        <section className="mt-12 grid gap-8 md:grid-cols-3">

          {mainCards.map((card, index) => {
            const Icon = card.icon;

            return (
             <div
  key={index}
  className="
    group relative flex h-full flex-col justify-between
    rounded-3xl border border-red-100 bg-white
    p-6 sm:p-7 md:p-8
    shadow-sm transition-all duration-300
    hover:-translate-y-1 hover:shadow-xl hover:border-red-200
  "
>
  {/* ICON */}
  <div className="flex items-start justify-between">
    <div
      className="
        flex h-14 w-14 sm:h-16 sm:w-16
        items-center justify-center
        rounded-2xl bg-red-100 text-red-700
        transition-all duration-300
        group-hover:bg-red-700 group-hover:text-white
      "
    >
      <Icon size={28} />
    </div>
  </div>

  {/* CONTENT */}
  <div className="mt-6 sm:mt-7 flex-1">
    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 leading-snug">
      {card.title}
    </h3>

    <p className="mt-2 sm:mt-3 text-sm sm:text-[15px] leading-6 sm:leading-7 text-slate-600">
      {card.description}
    </p>
  </div>

  {/* BUTTON */}
  <div className="mt-6 sm:mt-8">
    <Link
      to={card.link}
      className="
        group/btn inline-flex w-full items-center justify-center gap-2
        rounded-xl bg-red-700 px-4 py-3
        text-sm font-semibold text-white
        transition-all duration-300
        hover:bg-red-800 active:scale-[0.98]
        focus:outline-none focus:ring-2 focus:ring-red-300 
      "
    >
      <span className="tracking-wide">{card.button}</span>

      <ArrowRight
        size={16}
        className="
          transition-transform duration-300
          group-hover/btn:translate-x-1
        "
      />
    </Link>
  </div>
</div>
            );
          })}

        </section>

        {/* POLICIES MINI SECTION */}
        <section className="mx-auto mt-10 max-w-4xl">

          <div
            className="
              flex flex-col items-start justify-between gap-5
              rounded-2xl border border-red-100 bg-white
              px-6 py-5 shadow-sm transition hover:shadow-md
              sm:flex-row sm:items-center
            "
          >

            {/* LEFT */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-wide text-red-700">
                Policies
              </p>

              <p className="mt-1 text-sm text-slate-500">
                View active, expired, and pending policies.
              </p>

            </div>

            {/* BUTTON */}
            <Link
              to="/policies"
              className="
                flex h-10 items-center justify-center
                rounded-lg bg-red-700 px-5
                text-sm font-medium text-white
                transition hover:bg-red-800
              "
            >
              View Policies
            </Link>

          </div>

        </section>

      </main>

    </div>
  );
}