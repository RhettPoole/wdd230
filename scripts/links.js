const baseURL = "https://rhettpoole.github.io/wdd230/";
const linksURL = "https://rhettpoole.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

function displayLinks(weeks) {
  const linksContainer = document.querySelector('.card ul');
  linksContainer.innerHTML = ''; // Clear existing content

  weeks.lessons.forEach(lesson => {
    const lessonItem = document.createElement('li');
    lessonItem.textContent = `${lesson.lesson}: `;

    lesson.links.forEach(link => {
      const linkElement = document.createElement('a');
      linkElement.href = baseURL + link.url;
      linkElement.textContent = link.title;
      lessonItem.appendChild(linkElement);
      lessonItem.appendChild(document.createTextNode(' | ')); // Add separator
    });

    // Remove the last separator
    lessonItem.lastChild.remove();

    linksContainer.appendChild(lessonItem);
  });
}

getLinks();