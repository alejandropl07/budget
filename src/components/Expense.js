import React, { useState } from "react";

function Expense(props) {
  const [nameExpense, saveNameExpense] = useState("");
  const [expense, saveExpense] = useState(0);
  const [error, saveError] = useState(false);

  const addExpense = (e) => {
    e.preventDefault();
    if (nameExpense === "" || expense < 1 || isNaN(expense)) {
      saveError(true);
      return;
    }
  };
  return (
    <form onSubmit={addExpense}>
      <h2>Add expenses</h2>
      <div className="campo">
        <label htmlFor="nameExpense">Name expense</label>
        <input
          type="text"
          className="u-full-width"
          id="nameExpense"
          placeholder="Ej. Transport"
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
          onChange={(e) => saveExpense(parseInt(e.target.value, 10))}
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

export default Expense;
