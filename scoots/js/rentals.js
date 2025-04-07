document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("#rentalTable tbody");

  fetch("data/rentals.json")
    .then(response => response.json())
    .then(data => {
      data.rentals.forEach(rental => {
        const row = document.createElement("tr");

        row.innerHTML = `
          <td><img src="${rental.image}" alt="${rental.type}" style="max-width: 100px; border-radius: 8px;"></td>
          <td>${rental.type}</td>
          <td>${rental.maxPersons}</td>
          <td>$${rental.reservationHalfDay}</td>
          <td>$${rental.reservationFullDay}</td>
          <td>$${rental.walkInHalfDay}</td>
          <td>$${rental.walkInFullDay}</td>
        `;

        tableBody.appendChild(row);
      });
    })
    .catch(error => console.error("Error fetching rental data:", error));
});