import { useEffect, useState } from "react";
import BudgetControl from "./components/BudgetControl";
import FormExpense from "./components/FormExpense";
import ListExpenses from "./components/ListExpenses";
import Question from "./components/Question";

function App() {
  const [budget, saveBudget] = useState(0);
  const [rest, saveRest] = useState(0);
  const [questionBudget, saveQuestionBudget] = useState(true);
  const [createExpense, saveCreateExpense] = useState(false);

  const [expense, saveExpense] = useState({});
  const [expenses, saveExpenses] = useState([]);

  useEffect(() => {
    if (createExpense) {
      const listExpenses = [...expenses, expense];
      saveExpenses(listExpenses);
      const budgetRest = rest - expense.amountExpense;
      saveRest(budgetRest);
      saveCreateExpense(false);
    }
  }, [createExpense]);

  return (
    <div className="App container">
      <header>
        <h1>Weekly expense</h1>
        <div className="contenido-principal  contenido">
          {questionBudget ? (
            <Question
              saveBudget={saveBudget}
              saveRest={saveRest}
              saveQuestionBudget={saveQuestionBudget}
            />
          ) : (
            <div className="row">
              <div className="one-half  column">
                <FormExpense
                  saveExpense={saveExpense}
                  saveCreateExpense={saveCreateExpense}
                />
              </div>
              <div className="one-half  column">
                <ListExpenses expenses={expenses} />

                <BudgetControl budget={budget} rest={rest} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
