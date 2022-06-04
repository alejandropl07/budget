import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";

function FormExpense(props) {
  const { saveExpense, saveCreateExpense } = props;
  const [nameExpense, saveNameExpense] = useState("");
  const [amountExpense, saveAmountExpense] = useState(0);
  const [error, saveError] = useState(false);

  const addExpense = (e) => {
    e.preventDefault();
    if (nameExpense === "" || amountExpense < 1 || isNaN(amountExpense)) {
      saveError(true);
      return;
    }
    const expense = {
      nameExpense,
      amountExpense,
      id: shortid.generate(),
    };
    saveExpense(expense);
    saveCreateExpense(true);
    saveError(false);
    saveNameExpense("");
    saveAmountExpense("");
  };
  return (
    <form onSubmit={addExpense}>
      <h2>Add expenses</h2>
      {error ? <Error message="Both fields are required" /> : null}
      <div className="campo">
        <label htmlFor="nameExpense">Expense name</label>
        <input
          type="text"
          className="u-full-width"
          id="nameExpense"
          placeholder="Ej. Transport"
          value={nameExpense}
          onChange={(e) => saveNameExpense(e.target.value)}
        />
      </div>

      <div className="campo">
        <label htmlFor="expense">Expense</label>
        <input
          type="number"
          className="u-full-width"
          id="expense"
          placeholder="Ej. 300"
          value={amountExpense}
          onChange={(e) => saveAmountExpense(parseInt(e.target.value, 10))}
        />
      </div>

      <input
        type="submit"
        className="button-primary    u-full-width"
        value="Add expense"
      />
    </form>
  );
}

export default FormExpense;
