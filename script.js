function addVisit() {
  const phone = document.getElementById("phoneInput").value.trim();
  if (!phone) return alert("Please enter a valid phone number.");

  let data = JSON.parse(localStorage.getItem("zawadiPlusData")) || {};

  if (!data[phone]) {
    data[phone] = 1;
  } else {
    data[phone]++;
  }

  if (data[phone] === 5) {
    alert(`🎁 ${phone} just earned a reward!`);
    data[phone] = 0; // Reset after reward
  }

  localStorage.setItem("zawadiPlusData", JSON.stringify(data));
  displayData();
  document.getElementById("phoneInput").value = "";
}

function displayData() {
  let data = JSON.parse(localStorage.getItem("zawadiPlusData")) || {};
  const container = document.getElementById("customerData");

  container.innerHTML = "<h3>Customer Visits:</h3>";
  for (let phone in data) {
    container.innerHTML += `<p>${phone}: ${data[phone]} visit(s)</p>`;
  }
}

window.onload = displayData;
