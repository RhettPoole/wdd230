// MODIFICATION TIMESTAMP
let nLastModif = Date.parse(document.lastModified);
// Format the timestamp into a readable date string
let readableDate = new Date(nLastModif).toLocaleString();
// Insert the formatted date into the "lastModified" element
document.getElementById("lastModified").innerText += readableDate;

// COPYRIGHT SYMBOL AND YEAR
// Get the copyright element
const copyrightElement = document.getElementById("copyright");
// Dynamically insert the copyright symbol and current year
const currentYear = new Date().getFullYear();
copyrightElement.innerHTML = `&copy; ${currentYear} Rhett Poole | `;