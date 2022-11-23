import "./ExpenseImg.css";

function ExpenseImg(props) {
  console.log(props.Image);
  return (
    <div className="expense-img">
      <img src={props.Image} alt="img" />
    </div>
  );
}

export default ExpenseImg;
