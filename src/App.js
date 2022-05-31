import { useState } from "react";
import FormExpense from "./components/FormExpense";
import Question from "./components/Question";

function App() {
  const [budget, saveBudget] = useState(0);
  const [questionBudget, saveQuestionBudget] = useState(true);

  const [expense, saveExpense] = useState({});
  const [expenses, saveExpenses] = useState([]);

  return (
    <div className="App container">
      <header>
        <h1>Weekly expense</h1>
        <div className="contenido-principal  contenido">
          {questionBudget ? (
            <Question
              saveBudget={saveBudget}
              saveQuestionBudget={saveQuestionBudget}
            />
          ) : (
            <div className="row">
              <div className="one-half  column">
                <FormExpense saveExpense={saveExpense} />
              </div>
              <div className="one-half  column"></div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
