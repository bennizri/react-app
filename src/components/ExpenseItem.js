import ExpenseImg from "./ExpenseImg";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ul>
        <div className="expense-item__description "> {props.title}</div>
        <div className="expense-item__price"> {props.amount}</div>
      </ul>
      <ExpenseImg Image={props.Image} />
    </div>
  );
}

export default ExpenseItem;
