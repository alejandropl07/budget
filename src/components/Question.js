import React, { Fragment } from "react";

function Question() {
  return (
    <Fragment>
      <h2>Place your budget</h2>
      <form>
        <input
          type="number"
          name="budget"
          id="budget"
          placeholder="Add budget"
          className="u-full-width"
          //onChange={d}
        />
        <input type="submit"    className="button-primary   u-full-width" value="Add budget" />
      </form>
    </Fragment>
  );
}

export default Question;
