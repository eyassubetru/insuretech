const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#f8f9fb] px-6">
      
      {/* Top Accent */}
      <div className="absolute top-0 left-0 h-1 w-full bg-red-700" />

      {/* Spinner */}
      <div className="relative flex items-center justify-center">
        
        {/* Soft Background Circle */}
        <div className="absolute h-24 w-24 rounded-full bg-red-50" />

        {/* Outer Ring */}
        <div className="h-16 w-16 rounded-full border-2 border-slate-200" />

        {/* Animated Ring */}
        <div className="absolute h-16 w-16 animate-spin rounded-full border-2 border-transparent border-t-red-700 border-r-red-700" />
      </div>

      {/* Content */}
      <div className="mt-8 text-center">
        <h1 className="text-lg font-semibold tracking-wide text-slate-800">
          Loading System
        </h1>

        <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-500">
          Please wait while your request is being securely processed.
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="mt-8 h-[3px] w-48 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full w-1/3 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-red-700" />
      </div>

      {/* Footer */}
      <p className="mt-10 text-xs tracking-[0.2em] text-slate-400 uppercase">
        Secure Government Portal
      </p>

      <style>
        {`
          @keyframes loading {
            0% {
              transform: translateX(-100%);
            }
            50% {
              transform: translateX(120%);
            }
            100% {
              transform: translateX(350%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingScreen;