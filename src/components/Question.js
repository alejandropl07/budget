import React, { Fragment, useState } from "react";
import Error from "./Error";

function Question(props) {
  const { saveBudget, saveQuestionBudget } = props;
  const [amount, saveAmount] = useState(0);
  const [error, saveError] = useState(false);

  const addBudget = (e) => {
    e.preventDefault();
    if (amount < 1 || isNaN(amount)) {
      saveError(true);
      return;
    }

    saveError(false);
    saveBudget(amount);
    saveQuestionBudget(false);
  };

  return (
    <Fragment>
      <h2>Place your budget</h2>
      {error ? (
        <Error  message="Incorrect budget"/>
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
