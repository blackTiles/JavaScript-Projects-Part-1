// button selector
let convertBtn = document.querySelector("#convert-btn");

// button click event listener
convertBtn.addEventListener("click", function () {
  let text = document.querySelector("#text").value.toLowerCase();
  let wordArray = text.split(" ");

  // camelCase conversion
  let camelCase = "";
  for (let word of wordArray) {
    if (wordArray.indexOf(word) == 0) {
      camelCase += word;
    } else {
      word = word.charAt(0).toUpperCase() + word.substring(1);
      camelCase += word;
    }
  }
  document.querySelector("#camel-case").innerHTML = camelCase;

  // PascalCase conversion
  let PascalCase = "";
  wordArray.forEach(function (word) {
    word = word.charAt(0).toUpperCase() + word.substring(1);
    PascalCase += word;
  });
  document.querySelector("#pascal-case").innerHTML = PascalCase;

  // snake_case conversion
  let snake_case = wordArray.join("_");
  document.querySelector("#snake-case").innerHTML = snake_case;

  // screaming snake_case conversion
  let screaming_snake_case = wordArray.join("_");
  document.querySelector("#screaming-snake-case").innerHTML =
    screaming_snake_case.toUpperCase();

  // kebab_case conversion
  let kebab_case = wordArray.join("-");
  document.querySelector("#kebab-case").innerHTML = kebab_case;

  // screaming kebab_case conversion
  let screaming_kebab_case = wordArray.join("-");
  document.querySelector("#screaming-kebab-case").innerHTML = screaming_kebab_case.toUpperCase();
});
