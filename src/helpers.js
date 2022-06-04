export const reviewBudget = (budget, rest) => {
  let classN;
  // Comprobar el 25%
  if (budget / 4 > rest) {
    classN = "alert alert-danger";
  } else if (budget / 2 > rest) {
    classN = "alert alert-warning";
  } else {
    classN = "alert alert alert-success";
  }
  return classN;
};
