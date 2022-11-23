import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    { title: "mazda", amount: 3000, Image: "mazda.jpg" },
    { title: "ford", amount: 2000, Image: "ford.jpg" },
    { title: "nisan", amount: 1000, Image: "nissan.jpg" },
    { title: "honnda", amount: 500, Image: "honda.jpg" },
  ];
  return (
    <div>
      <h2> this is my cars</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        Image={expense[0].Image}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        Image={expense[1].Image}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        Image={expense[2].Image}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        Image={expense[3].Image}
      ></ExpenseItem>
    </div>
  );
}

export default App;
