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
    copyToClipboard(e.currentTarget.parentElement.nextElementSibling.querySelector("code").innerText);
}

const placeBindedButtons = (answers) => {

    // Add buttons to each code snippet
    answers.forEach((answer) => {

        // Gets code snippets
        const snippets = answer.querySelectorAll("pre");

        snippets.forEach((snippet) => {

            //Places and binds button
            snippet.insertAdjacentHTML("beforebegin", buttonDiv);
            //const newButton = snippet.querySelector(".clipboardBtn");
            const newButton = snippet.previousElementSibling.children[0]
            bindButton(newButton);
        })

    })
}


    // Array of answer containers
    const answers = document.querySelectorAll(".answer");

    // Button to be inserted
    const buttonDiv = `<div class='buttonContainer'>
                            <button class='clipboardBtn'>
                                Copy
                            </button>
                        </div>`;

    placeBindedButtons(answers);











// Todo =>
    // Check if div is scrollable sideways and move button accordingly if scrolled
    // Style Button
    // Extension icon
    // Extension menu



