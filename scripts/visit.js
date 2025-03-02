document.addEventListener("DOMContentLoaded", function () {
  const currentVisit = Date.now();

  localStorage.setItem("lastVisit", currentVisit);

  // Check if 'pageVisits' exists in localStorage
  if (localStorage.getItem("pageVisits")) {
    // Increment the visit count
    localStorage.setItem(
      "pageVisits",
      Number(localStorage.getItem("pageVisits")) + 1
    );
  } else {
    // Initialize the visit count
    localStorage.setItem("pageVisits", 1);
  }

  // Display the visit count
  document.getElementById(
    "visitMessage"
  ).textContent = `Page Visits: ${localStorage.getItem("pageVisits")}`;
});
