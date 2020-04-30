const copyToClipboard = (text) => {
  const pseudoElement = document.createElement('textarea');
  pseudoElement.value = text;
  document.body.appendChild(pseudoElement);
  pseudoElement.select();
  document.execCommand('copy');
  document.body.removeChild(pseudoElement);
};

const bindButton = (button) => {
    button.addEventListener("click", copySnippet);
}

const copySnippet = (e) => {
    copyToClipboard(e.currentTarget.parentElement.querySelector("code").innerText);
}

const placeBindedButtons = (answers) => {


    // Add buttons to each code snippet
    answers.forEach((answer) => {

        // Gets code snippets
        const snippets = answer.querySelectorAll("pre");

        snippets.forEach((snippet) => {

            //Places and binds button
            snippet.insertAdjacentHTML("beforeend", buttonHtml);
            const newButton = snippet.querySelector(".clipboardBtn");
            bindButton(newButton);
        })

    })
}



    // Array of answer containers
    const answers = document.querySelectorAll(".answer");

    // Button to be inserted
    const buttonHtml = `<button class='clipboardBtn'>copy</button>`;

    placeBindedButtons(answers);











// Todo =>
    // Check if div is scrollable sideways and move button accordingly if scrolled
    // Style Button
    // Extension icon
    // Extension menu
    // CSS?
