import express from "express";
import {
  hardcodedCompanies,
  hardcodedStockData,
} from "../stockData/stockData.js";

const router = express.Router();

// GET /api/stocks/companies
// Responds with a hardcoded list of companies.
router.get("/companies", async (req, res) => {
  try {
    // No API call needed, just return the hardcoded list.
    res.json(hardcodedCompanies);
  } catch (error) {
    // This catch block is less likely to be hit now, but it's good practice to keep it.
    console.error("Error fetching companies:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch companies", details: error.message });
  }
});

// GET /api/stocks/:symbol
// Responds with hardcoded data for a specific stock symbol.
router.get("/:symbol", async (req, res) => {
  try {
    const symbol = req.params.symbol.toUpperCase();
    const stockData = hardcodedStockData[symbol];

    if (!stockData) {
      return res.status(404).json({ error: "No data found for symbol" });
    }

    // Return the hardcoded data for the requested symbol
    res.json(stockData);
  } catch (error) {
    console.error(
      `Error fetching stock data for ${req.params.symbol}:`,
      error.message
    );
    res
      .status(500)
      .json({ error: "Failed to fetch stock data", details: error.message });
  }
});

export default router;
