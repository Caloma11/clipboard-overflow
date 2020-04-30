//wAIT PAGE LOAD
// FUNCTIONS

const copyToClipboard = (text) => {
  const pseudoElement = document.createElement('textarea');
  pseudoElement.value = text;
  document.body.appendChild(pseudoElement);
  // pseudoElement.style.display = "none";
  pseudoElement.select();
  document.execCommand('copy');
  document.body.removeChild(pseudoElement);
};

const bindButton = (button) => {
    button.addEventListener("click", (e) => {
        copyToClipboard(e.currentTarget.parentElement.querySelector("code").innerText);
        console.log(e.currentTarget.parentElement.querySelector("code").innerText)
    });
}

// const copySnippet = (e) => {
//     copyToClipboard(e.currentTarget.parentElement.querySelector("code").innerText);
// }



// Array of answer containers
const answers = document.querySelectorAll(".answer");

// Button to be inserted
const buttonHtml = `<button class='clipboardBtn' style='font-size: 8px;
position: absolute;right: 0px;bottom: 0px;
font-weight: bold;color:white'>copy</button>`


// Add buttons to each code snippet

answers.forEach((answer) => {
    // Gets code snippets
    const snippets = answer.querySelectorAll("pre");

    snippets.forEach((snippet) => {

        // Adjusts code container to fit button

        snippet.style.position = "relative";
        snippet.style.paddingBottom = "20px";

        //Places and binds button

        snippet.insertAdjacentHTML("beforeend", buttonHtml);
        const newButton = snippet.querySelector(".clipboardBtn");
        bindButton(newButton);
    })

})




// Todo =>
    // Check if div is scrollable sideways and move button accordingly if scrolled
    // Style Button
    // Extension icon
    // Extension menu
    // CSS?
