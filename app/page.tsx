"use client";

import { useState } from "react";
import TaxSlabsModal from "./components/TaxSlabsModal";
import Amounts from "./sections/Amounts";

export default function Home() {
  const [salary, setSalary] = useState("");  
  const [salaryToDisplay, setSalaryToDisplay] = useState("");
  const [tax, setTax] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function calculateTax(salary) {
    let _tax;
    let _salary = parseFloat(salary) * 12;
    if (_salary <= 600000) {
      _tax = 0;
    } else if (_salary > 600000 && _salary <= 1200000) {
      _tax = (_salary - 600000) * 0.05;
    } else if (_salary > 1200000 && _salary <= 2200000) {
      _tax = (_salary - 1200000) * 0.15 + 30000;
    } else if (_salary > 2200000 && _salary <= 3200000) {
      _tax = (_salary - 2200000) * 0.25 + 180000;
    } else if (_salary > 3200000 && _salary <= 4100000) {
      _tax = (_salary - 3200000) * 0.3 + 430000;
    } else if (_salary > 4100000) {
      _tax = (_salary - 4100000) * 0.35 + 700000;
    }
    setTax(_tax);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      calculateTax(salary);
    }
  }

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function formatNumber(number) {
    let roundedNumber = Math.round(number ?? 0); // Round to nearest integer
    return roundedNumber.toLocaleString(); // Format with commas for thousands separator
  }

  function formatNumberForInputField(num) {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  
  function handleChange(event) {
    const inputValue = event.target.value.replace(/,/g, ''); // Remove existing commas
    if (!isNaN(inputValue)) {
      setSalaryToDisplay(formatNumberForInputField(inputValue));
      calculateTax(inputValue);
      setSalary(inputValue)
    }
  };
  
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 p-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        Tax Calculator (2024 - 2025)
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg min-w-[510px]">
        <input
          className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition duration-300 ease-in-out"
          value={salaryToDisplay}
          type="text"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter monthly Salary"
        />
        <div className="flex justify-between items-center">
          <button
            className="bg-gray-500 text-white rounded-lg px-6 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 shadow-sm transition duration-300 ease-in-out hover:bg-gray-600"
            onClick={toggleModal}
          >
            View Tax Slabs
          </button>
          <div className="text-gray-700 text-xl font-semibold">
            Monthly Income:{" "}
            <span className="text-blue-500">
              {formatNumber(parseFloat(salary)) !== "NaN"
                ? formatNumber(parseFloat(salary))
                : 0}
            </span>
          </div>
        </div>
        <div className="border-t border-gray-300 my-4"></div>
        <Amounts formatNumber={formatNumber} salary={salary} tax={tax} />
      </div>
      {isModalOpen && (
        <TaxSlabsModal toggleModal={toggleModal} />
      )}
      <footer className="mt-6 text-gray-700">
        <p>
          Instructed by <strong>Mr. Muhammad Jamshaid</strong> and Developed by{" "}
          <strong>Ahsan Javed</strong>
        </p>
      </footer>
    </main>
  );
}
