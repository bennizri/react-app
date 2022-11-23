import ExpenseImg from "./ExpenseImg";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseImg Image={props.Image} />
      <div className="expense-item__description "> {props.title}</div>
      <div className="expense-item__price"> {props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
