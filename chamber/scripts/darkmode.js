const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const cards = document.querySelectorAll(".card");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		//main.style.color = "#fff";
        modeButton.textContent = "🔆";
         //   cards.forEach(card => {
         //       card.style.background = '#333';
         //   });
	} else {
		main.style.background = "#DCCCBB";
		main.style.color = "#003c5f";
		modeButton.textContent = "🕶️";
        //cards.forEach(card => {
        //    card.style.background = "white";
        //})
	}
});