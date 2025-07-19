import { useEffect, useState } from "react";
import CompanyList from "./components/CompanyList";
import StockChart from "./components/StockChart";
import axios from "axios";

function App() {
  // State for company list
  const [companyList, setCompanyList] = useState([]);
  
  // Initialize selectedCompany By Default at the top of the company list
  const [selectedCompany, setSelectedCompany] = useState(null);
  
  const [stockData, setStockData] = useState([]);
  
  // State to hold the 52-week high/low data
  const [stockStats, setStockStats] = useState(null);

  const secret_url=import.meta.env.VITE_SERVER_URL;

  // useEffect to fetch the list of companies 
  useEffect(() => {
    const fetchCompanyList = async () => {
      try {
        const res = await axios.get(`${secret_url}/api/stocks/companies`);
        setCompanyList(res.data);
        // Set the first company as the default selected one
        if (res.data.length > 0) {
          setSelectedCompany(res.data[0].symbol);
        }
      } catch (error) {
        console.error("Error fetching company list:", error);
      }
    };
    fetchCompanyList();
  }, []); // Empty dependency array means this runs only once

  // This useEffect now fetches data for the selected company
  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const res = await axios.get(
          `${secret_url}/${selectedCompany}`
        );
        setStockData(res.data.data); 
        setStockStats(res.data.stats);
      } catch (error) {
        console.error("Error fetching stock data:", error);
        setStockData([]); // Clear data on error
        setStockStats(null); // Clear stats on error
      }
    };

    if (selectedCompany) {
      fetchStockData();
    }
  }, [selectedCompany]); // Re-runs whenever selectedCompany changes

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <aside className="md:w-1/4 w-full border-b md:border-b-0 md:border-r bg-white overflow-y-auto">
        <CompanyList
          // Pass the Company list 
          companies={companyList}
          onSelect={setSelectedCompany}
          selected={selectedCompany}
        />
      </aside>
      <main className="flex-1 p-4 md:p-6">
        {/* Pass both the data and the stats to the chart component */}
        <StockChart company={selectedCompany} data={stockData} stats={stockStats} />
      </main>
    </div>
  );
}

export default App;