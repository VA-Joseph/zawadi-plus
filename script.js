function addVisit() {
  const phoneInput = document.getElementById("phoneInput");
  const phone = phoneInput.value.trim();

  if (!phone) return alert("📱 Please enter a valid phone number.");

  let data = JSON.parse(localStorage.getItem("zawadiPlusData")) || {};

  if (!data[phone]) {
    data[phone] = 1;
  } else {
    data[phone]++;
  }

  // Save to storage
  localStorage.setItem("zawadiPlusData", JSON.stringify(data));

  // Show updated visit count
  document.getElementById("visitDisplay").innerText = `📊 Visits: ${data[phone]}`;

  // Check for reward
  const rewardDisplay = document.getElementById("rewardDisplay");
  if (data[phone] === 5) {
    rewardDisplay.innerText = `🎉 ${phone} just earned a reward! 🎁`;
    rewardDisplay.classList.add("celebrate");

    // Reset visits after reward
    data[phone] = 0;
    localStorage.setItem("zawadiPlusData", JSON.stringify(data));

    setTimeout(() => {
      rewardDisplay.innerText = "✨ No rewards yet — start earning!";
      rewardDisplay.classList.remove("celebrate");
      document.getElementById("visitDisplay").innerText = `📊 Visits: 0`;
    }, 4000);
  } else {
    rewardDisplay.innerText = "✅ Visit added successfully!";
    rewardDisplay.classList.remove("celebrate");
  }

  // Clear input
  phoneInput.value = "";
}
