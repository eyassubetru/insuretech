import React from 'react';
import { History, ChevronDown } from 'lucide-react';

const SelectYear = () => {
  return (
    <div className="fixed top-6 right-6 flex w-48 items-center justify-between p-3 
                    bg-white/80 backdrop-blur-md border border-slate-200 
                    shadow-sm hover:shadow-md transition-all duration-200 
                    rounded-xl cursor-pointer group">
      
      <div className="flex items-center gap-3">
        {/* Icon Container */}
        <div className="flex items-center justify-center w-10 h-10 
                        bg-slate-100 text-slate-600 rounded-lg 
                        group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
          <History size={20} />
        </div>

        {/* Text Content */}
        <div className="flex flex-col">
          <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            Select Year 
          </span>
          <span className="text-sm font-bold text-slate-900 leading-none">
            2018
          </span>
        </div>
      </div>

      {/* Dropdown Indicator */}
      <ChevronDown size={16} className="text-slate-400 group-hover:text-slate-600" />
    </div>
  );
};

export default SelectYear;