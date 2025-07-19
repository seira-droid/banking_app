function transferFunds(event) {
  event.preventDefault();
  const to = document.getElementById("to").value;
  const amount = document.getElementById("amount").value;
  alert(`Transferred $${amount} to ${to}`);
}