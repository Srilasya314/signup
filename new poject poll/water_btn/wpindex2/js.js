function calculateIndex() {
  // Get input values
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").values);
  const d = parseFloat(document.getElementById("d").value);
  const x = parseFloat(document.getElementById("x").value);

  // Calculate the pollution index using the formula
  const index = x * (a + b + c + d);

  // Display the result
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `Water Pollution Index: ${index.toFixed(2)}`;
}
