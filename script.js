const copyToClipboard = (text) => {
  const pseudoElement = document.createElement('textarea');
  pseudoElement.value = text;
  document.body.appendChild(pseudoElement);
  pseudoElement.style.display = "none";
  pseudoElement.select();
  document.execCommand('copy');
  document.body.removeChild(pseudoElement);
};



console.log("You are in stackoverflow")
