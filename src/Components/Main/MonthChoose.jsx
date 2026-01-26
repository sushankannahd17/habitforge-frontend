import { useState } from "react";

const months = [
  { name: "January", value: 1 },
  { name: "February", value: 2 },
  { name: "March", value: 3 },
  { name: "April", value: 4 },
  { name: "May", value: 5 },
  { name: "June", value: 6 },
  { name: "July", value: 7 },
  { name: "August", value: 8 },
  { name: "September", value: 9 },
  { name: "October", value: 10 },
  { name: "November", value: 11 },
  { name: "December", value: 12 },
];

export default function MonthChoose({ month, year, setMonth, setYear }) {
  const [open, setOpen] = useState(false);

  const years = [2023, 2024, 2025, 2026, 2027];

  const selectedMonthName =
    months.find((m) => m.value === month)?.name || "";

  return (
    <div className="relative w-fit mb-3">
      <button
        className="flex items-center gap-3 bg-white border rounded-2xl px-4 py-2 shadow-sm"
        onClick={() => setOpen(!open)}
      >
        {selectedMonthName}, {year}
        <span className={`transition ${open ? "rotate-0" : "rotate-180"}`}>
          ▾
        </span>
      </button>

      {open && (
        <div className="absolute mt-2 w-64 bg-white border rounded-2xl shadow-md p-4 z-50">
          <p className="mb-2 font-medium">Select Month</p>
          <div className="grid grid-cols-2 gap-2 mb-4 max-h-60 overflow-y-auto">
            {months.map((m) => (
              <button
                key={m.value}
                onClick={() => {
                  setMonth(m.value); 
                  setOpen(false);
                }}
                className={`text-left px-2 py-1 rounded hover:bg-gray-100 ${
                  month === m.value ? "bg-gray-200 font-medium" : ""
                }`}
              >
                {m.name}
              </button>
            ))}
          </div>

          <p className="mb-2 font-medium">Select Year</p>
          <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
            {years.map((y) => (
              <button
                key={y}
                onClick={() => {
                  setYear(y);
                  setOpen(false);
                }}
                className={`px-2 py-1 rounded hover:bg-gray-100 ${
                  year === y ? "bg-gray-200 font-medium" : ""
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
