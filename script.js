// Content element
let content = document.getElementById("content");

// Pages object
let pages = {
	"#page1": "page1.html",
	"#page2": "page2.html",
	"#page3": "page3.html",
};

// Listen for hash change
window.addEventListener("hashchange", function () {
	// Load page
	loadPage(window.location.hash);
});

// Load page
function loadPage(pageHash) {
	// Fetch page
	fetch(pages[pageHash])
		.then((response) => response.text())
		.then((data) => {
			// Set content
			content.innerHTML = data;
		});
}

// If no hash, load page1
if (!window.location.hash) {
	loadPage("#page1");
}
