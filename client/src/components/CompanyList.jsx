function CompanyList({ companies, onSelect, selected }) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center md:text-left">
        Companies
      </h2>
      <ul className="space-y-2">
        {/*Show 10 company name by default at left pannel  */}
        {companies.map((company) => (
          <li
            key={company.symbol}
            onClick={() => onSelect(company.symbol)}
            className={`cursor-pointer text-center md:text-left p-2 rounded-md ${
              selected === company.symbol
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200"
            }`}
          >
            {/*Display the company's full name */}
            {company.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CompanyList;

