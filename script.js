function saveMood() {
  const mood = document.getElementById("mood").value;
  const note = document.getElementById("note").value;
  const date = new Date().toLocaleDateString();

  if (!mood) {
    alert("Please select a mood");
    return;
  }

  const entry = { mood, note, date };

  let history = JSON.parse(localStorage.getItem("moods")) || [];
  history.push(entry);
  localStorage.setItem("moods", JSON.stringify(history));

  document.getElementById("note").value = "";
  showHistory();
}

function showHistory() {
  let history = JSON.parse(localStorage.getItem("moods")) || [];
  const list = document.getElementById("history");
  list.innerHTML = "";
  history.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = `${entry.date} - ${entry.mood} - ${entry.note}`;
    list.appendChild(li);
  });
}

// show history when page loads
showHistory();
