export default function TaxSlabsModal({ toggleModal }) {
  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
          <h2 className="text-lg md:text-2xl font-bold underline mb-4">Income Tax Slabs (2024-2025)</h2>
          <ol className="text-xs md:text-sm text-left list-disc pl-5 text-gray-700">
            <li>
              Where the taxable salary income does not exceed{" "}
              <strong>Rs. 600,000</strong>, the rate of income tax is{" "}
              <strong>0%</strong>.
            </li>
            <li>
              Where the taxable salary income exceeds{" "}
              <strong>Rs. 600,000</strong> but does not exceed{" "}
              <strong>Rs. 1,200,000</strong>, the rate of income tax is{" "}
              <strong>5%</strong> of the amount exceeding{" "}
              <strong>Rs. 600,000</strong>.
            </li>
            <li>
              Where the taxable salary income exceeds{" "}
              <strong>Rs. 1,200,000</strong> but does not exceed{" "}
              <strong>Rs. 2,200,000</strong>, the rate of income tax is{" "}
              <strong>Rs. 30,000</strong> + <strong>15%</strong> of the amount
              exceeding <strong>Rs. 1,200,000</strong>.
            </li>
            <li>
              Where the taxable salary income exceeds{" "}
              <strong>Rs. 2,200,000</strong> but does not exceed{" "}
              <strong>Rs. 3,200,000</strong>, the rate of income tax is{" "}
              <strong>Rs. 180,000</strong> + <strong>25%</strong> of the
              amount exceeding <strong>Rs. 2,200,000</strong>.
            </li>
            <li>
              Where the taxable salary income exceeds{" "}
              <strong>Rs. 3,200,000</strong> but does not exceed{" "}
              <strong>Rs. 4,100,000</strong>, the rate of income tax is{" "}
              <strong>Rs. 430,000</strong> + <strong>30%</strong> of the
              amount exceeding <strong>Rs. 3,200,000</strong>.
            </li>
            <li>
              Where the taxable salary income exceeds{" "}
              <strong>Rs. 4,100,000</strong>, the rate of income tax is{" "}
              <strong>Rs. 700,000</strong> + <strong>35%</strong> of the
              amount exceeding <strong>Rs. 4,100,000</strong>.
            </li>
          </ol>
          <button
            className="bg-blue-500 text-xs md:text-sm text-white rounded-lg px-4 py-2 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm transition duration-300 ease-in-out hover:bg-blue-600"
            onClick={toggleModal}
          >
            Close
          </button>
        </div>
      </div>
    </>
  )
}