import React from "react";

const SortingGroupBar = ({ sortingOptions, active, onChange }) => {
  return (
    <div className="flex gap-1 p-1 bg-tag-background bg-gray-100 rounded-lg">
      {sortingOptions.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`px-4 py-1.5 text-sm rounded-md transition-all ${
            active === option
              ? "bg-white shadow-sm text-gray-900"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default SortingGroupBar;
