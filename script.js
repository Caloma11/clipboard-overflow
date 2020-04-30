const commentMap = {
        "ruby": "#",
        "javascript": "//",
        "java": "//",
        "python": "#",
        "c#": "//",
        "c": "//",
        "php": "//",
        "lua": "--",
        "haskell": "--",
        "swift": "//",
        "go": "//",
        "sql": "--",
        "r": "#",
        "perl": "#",
        "kotlin": "//",
        "rust": "//",
        "scheme": ";;;",
        "erlang": "%",
        "scala": "//",
        "elixir": "#",
        "c++": "//",
        "dart": "//"
    }



// Finds the correct comment symbol according to the language of the question
const getCommentCharacter = (tags) => {
    const languages = Object.keys(commentMap);
    const intersection = languages.filter(x => tags.includes(x));
    if (intersection.length > 0) {
       return commentMap[intersection[0]];
    }
    return "";
}

const copyToClipboard = (text) => {
  const pseudoElement = document.createElement('textarea');
  const url = window.location.href;
  pseudoElement.value = `${commentCharacter} ${url}\n${text}`;
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



// Programming language tags
const tags = document.querySelector(".post-taglist").innerText.split(" ");
const commentCharacter = getCommentCharacter(tags);

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
    // Extension icon
    // Extension menu -> Turn off comment

