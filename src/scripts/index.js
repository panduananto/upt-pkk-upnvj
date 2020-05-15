const excerpt = document.querySelectorAll("#excerpt");

excerpt.forEach((element) => {
  const excerptText = element.innerText;
  if (excerptText.length > 80) {
    let trimmedText = `${excerptText.substr(0, 80)}...`;
    element.innerHTML = trimmedText;
  }
});
