import React, { Fragment, useState } from "react";

function Question() {
  const [amount, saveAmount] = useState(0);
  const [error, saveError] = useState(false);

  const addBudget = (e) => {
    e.preventDefault();
    if (amount < 1 || isNaN(amount)) {
      saveError(true);
      return;
    }
  };

  return (
    <Fragment>
      <h2>Place your budget</h2>
      {error ? (
        <p className="alert    alert-danger    error">Incorrect budget</p>
      ) : null}
      <form onSubmit={addBudget}>
        <input
          type="number"
          name="budget"
          id="budget"
          placeholder="Add budget"
          className="u-full-width"
          onChange={(e) => saveAmount(parseInt(e.target.value, 10))}
        />
        <input
          type="submit"
          className="button-primary   u-full-width"
          value="Add budget"
        />
      </form>
    </Fragment>
  );
}

export default Question;
