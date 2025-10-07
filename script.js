function calculate(operation) {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  let result;
  if (isNaN(n1) || isNaN(n2)) {
    alert("Please enter valid numbers!");
    return;
  }
  switch (operation) {
    case "add":
      result = n1 + n2;
      break;
    case "sub":
      result = n1 - n2;
      break;
    case "mul":
      result = n1 * n2;
      break;
    case "div":
      if (n2 === 0) {
        alert("Cannot divide by zero!");
        clearValues();
        return;
      }
      result = n1 / n2;
      break;
    default:
      alert("Invalid operation!");
      return;
  }
  document.getElementById("result").innerText = `Result: ${result}`;
}
function clearValues() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").innerText = "Result";
}
function AC() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").innerText = "";
}
