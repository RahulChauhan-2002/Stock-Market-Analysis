import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

// Accept 'stats' as a prop 
function StockChart({ company, data, stats }) {
  // Ensure data is an array before mapping
  const chartData = {
    labels: Array.isArray(data) ? data.map((entry) => entry.date) : [],
    datasets: [
      {
        label: `${company} Stock Price`,
        data: Array.isArray(data) ? data.map((entry) => entry.close) : [],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
        {company} Stock Chart
      </h2>
      
      {/* Display for the 52-week stats  */}
      {stats && (
        <div className="grid grid-cols-3 gap-4 text-center mb-4 p-4 bg-white rounded-lg shadow-md">
          <div>
            <h4 className="text-sm text-gray-500">52-Week High</h4>
            <p className="text-lg font-semibold text-green-600">₹{stats.high52.toFixed(2)}</p>
          </div>
          <div>
            <h4 className="text-sm text-gray-500">52-Week Low</h4>
            <p className="text-lg font-semibold text-red-600">₹{stats.low52.toFixed(2)}</p>
          </div>
          <div>
            <h4 className="text-sm text-gray-500">Average Volume</h4>
            <p className="text-lg font-semibold text-blue-600">{(stats.avgVolume / 1_000_000).toFixed(2)}M</p>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg p-4 shadow-md">
        {data.length > 0 ? <Line data={chartData} /> : <p>Loading data or no data available...</p>}
      </div>
    </div>
  );
}

export default StockChart;