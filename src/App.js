import { useState } from "react";
import Expense from "./components/Expense";
import Question from "./components/Question";

function App() {
  const [budget, saveBudget] = useState(0);
  const [questionBudget, saveQuestionBudget] = useState(true);

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
                <Expense/>
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
