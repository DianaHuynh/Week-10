function calc(){
  var a = paraInt(document.querySelector("#value1").value);
  var b = paraInt(document.querySelector("#value2").value);
  var op = document.querySelector("#operator").value;
  var calculate;

  if (op == "add") {
    calculate = a + b;
  }
document.querySelector("#result").innerHTML = calculate;
}
