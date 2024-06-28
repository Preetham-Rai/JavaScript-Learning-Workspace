function addLanguage(lang) {
  const newLang = document.createElement("li");
  newLang.innerText = `${lang}`;
  const oldLanguage = document.querySelector("ul");

  oldLanguage.appendChild(newLang);
}

addLanguage("Python");
