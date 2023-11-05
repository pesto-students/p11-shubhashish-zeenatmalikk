const router = require("express").Router();

const {
  createFinancialRecord,
  getFinanceForCurrYear,
  filterFinancyByMonth,
  incomeExpense,
} = require("../controller/financialData");

router
  .route("/:userId")
  .post(createFinancialRecord)
  .get(getFinanceForCurrYear)
  .get(filterFinancyByMonth)
  .get(incomeExpense);

module.exports = router;
