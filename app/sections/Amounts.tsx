export default function Amounts({ formatNumber, salary, tax }) {
  return (
    <>
      <div className="text-gray-700">
        <div className="flex justify-between mb-2">
          <p className="text-xl font-semibold">Monthly Tax</p>
          <p className="text-xl text-blue-500 font-semibold">
            {formatNumber(tax / 12) !== "NaN" ? formatNumber(tax / 12) : 0}
          </p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-xl font-semibold">Salary After Tax</p>
          <p className="text-xl text-blue-500 font-semibold">
            {formatNumber(parseFloat(salary) - tax / 12) !== "NaN"
              ? formatNumber(parseFloat(salary) - tax / 12)
              : 0}
          </p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-xl font-semibold">Yearly Income</p>
          <p className="text-xl text-blue-500 font-semibold">
            {formatNumber(parseFloat(salary) * 12) !== "NaN"
              ? formatNumber(parseFloat(salary) * 12)
              : 0}
          </p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-xl font-semibold">Yearly Tax</p>
          <p className="text-xl text-blue-500 font-semibold">
            {formatNumber(tax) !== "NaN" ? formatNumber(tax) : 0}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-xl font-semibold">Yearly Income After Tax</p>
          <p className="text-xl text-blue-500 font-semibold">
            {formatNumber(parseFloat(salary) * 12 - tax) !== "NaN"
              ? formatNumber(parseFloat(salary) * 12 - tax)
              : 0}
          </p>
        </div>
      </div>
    </>
  )
}