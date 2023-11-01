const financialRecord = require("../models/financialRecords");
const httpStatus = require("http-status-codes");

const createFinancialRecord = async (req, res) => {
  const userId = req.params.userId;
  const { year, month, income, expense, savings } = req.body;
  try {
    const financialData = await financialRecord.create({
      userId,
      year,
      month,
      income,
      expense,
      savings,
    });
    res
      .status(httpStatus.OK)
      .json({ financialData, msg: "Financial record created" });
  } catch (error) {
    console.error(error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

const getFinanceForCurrYear = async (req, res) => {
  const { userId } = req.params;
  const currentYear = new Date().getFullYear();
  try {
    const financialData = await financialRecord.findOne({
      userId,
      year: currentYear,
    });
    if (!financialData) {
      return res
        .status(httpStatus.FORBIDDEN)
        .json({ error: "Financial data not found" });
    }
    res.json(financialData);
  } catch (error) {
    console.error(error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};
const filterFinancyByMonth = async (req, res) => {
    const { userId } = req.params;
    const { month } = req.query;
  
    try {
      // Parse month as an integer
      const parsedMonth = parseInt(month);
  
      let query = { userId, month: parsedMonth };
      const financialData = await financialRecord.findOne(query);
      if (!financialData) {
        return res
          .status(httpStatus.FORBIDDEN)
          .json({ error: "Financial data not found" });
      }
      res.json(financialData);
    } catch (error) {
      console.error(error);
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: "Internal Server Error" });
    }
  };
  
  

const incomeExpense = async (req, res) => {
  const { userId } = req.params;
  const { year, month } = req.query;

  try {
    let query = { userId };
    if (month !== undefined) {
      query.month = month;
    }
    if (year !== undefined) {
      query.year = year;
    }
    const incomeExpense = await financialRecord.find(query);
    res.status(httpStatus.OK).json(incomeExpense);
  } catch (error) {
    console.error(error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createFinancialRecord,
  getFinanceForCurrYear,
  filterFinancyByMonth,
  incomeExpense
};
