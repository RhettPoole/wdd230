// Placeholder for general interactivity
console.log("Main JS loaded");

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".nav-toggle");
    const menu = document.querySelector(".nav-menu");
    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
      });
    }
  });


/* data/rentals.json */
{
  "rentals" [
    { "name": "Honda Metro Scooter", "maxPersons": 1, "halfDay": 20, "fullDay": 30 },
    { "name": "Honda Dio Scooter", "maxPersons": 2, "halfDay": 30, "fullDay": 40 },
    { "name": "Honda PCX150 Scooter", "maxPersons": 2, "halfDay": 40, "fullDay": 50 },
    { "name": "Honda Pioneer ATV", "maxPersons": 4, "halfDay": 50, "fullDay": 70 },
    { "name": "Jeep Wrangler 4-Door", "maxPersons": 5, "halfDay": 70, "fullDay": 100 },
    { "name": "Jeep Wrangler 2-Door", "maxPersons": 4, "halfDay": 60, "fullDay": 85 }
  ]
}