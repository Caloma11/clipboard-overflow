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
		"dart": "//",
        "jquery": "//"
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

// Returns a string formatted if the user wants to credit the source
const formattedCodeSnippet = (text, url) => {
	return `${commentCharacter} ${url}\n${text}`;
}

// Copies the snippet to the clipboard along with the source url as a comment
const copyToClipboard = (text) => {
	const pseudoElement = document.createElement('textarea');
	const url = window.location.href;
	if (window.saveComments) {
		pseudoElement.value = formattedCodeSnippet(text, url)
	} else {
		pseudoElement.value = text;
	}
	document.body.appendChild(pseudoElement);
	pseudoElement.select();
	document.execCommand('copy');
	document.body.removeChild(pseudoElement);
};

// Gets the saved preferences and puts it in the DOM
const setSourceComment = () => {
	chrome.storage.sync.get({
		saveComments: false
  	}, function(items) {
  		window.saveComments = items.saveComments;
  	});
}

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

setSourceComment();

// Programming language tags
const tags = document.querySelector(".post-taglist").innerText.split(" ");
const commentCharacter = getCommentCharacter(tags);

// Array of answer containers
const answers = document.querySelectorAll(".answer");

// Button template to be inserted
const buttonDiv = `<div class='buttonContainer'>
						<button class='clipboardBtn'>
							Copy
						</button>
					</div>`;


// Injects buttons in the page
placeBindedButtons(answers);









// Todo =>
	// Extension icon

