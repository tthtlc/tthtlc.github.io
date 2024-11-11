'use strict';
window.addEventListener('DOMContentLoaded', function() {
	// Open/close control panel:
	const controlsWindow = document.querySelector("#controlswindow");
	let controlsBar;
	if (controlsWindow) {
		controlsBar = document.createElement("button");
		controlsBar.setAttribute("id", "controlsbar");
		controlsBar.setAttribute("aria-label", "Open and close the controls window.");
		controlsWindow.insertBefore(controlsBar, controlsWindow.children[0]);	
		for (let i = 0; i < 2; i++) {
			const span = document.createElement("span");
			controlsBar.appendChild(span);
		}
		if(controlsWindow.dataset.state === "open") { openControlWindow(true); }
		else { openControlWindow(false);  }
		const controls = document.querySelector("#controls");	
		document.addEventListener('click', function() {
			if (controlsWindow.dataset.state === "open") { openControlWindow(false) }
		},false);
		controlsBar.addEventListener('click', function(event) {
			if (controlsWindow.dataset.state === "closed") { openControlWindow(true) }
			else { openControlWindow(false) }
			event.stopPropagation();
		},false);
		if (controls) {
			controls.addEventListener('click', function(event) {
				event.stopPropagation();
			},false);
		}
	}

	function openControlWindow(bool) {
		if (bool) {
			controlsWindow.dataset.state = "open";
			controlsBar.setAttribute("title", "Close controls");
		} else {
			controlsWindow.dataset.state = "closed";
			controlsBar.setAttribute("title", "Open controls");		
		}
	};
	const form = document.querySelector("#controlswindow form");
	if (form) {
		form.addEventListener('submit', function(event) {
			event.stopPropagation();
		});
	}
	
	const footer = document.querySelector("footer") || document.createElement("footer");
	const footerAnchor = document.createElement("a");
	footerAnchor.setAttribute("href","https://library.fridoverweij.com/");
	footerAnchor.textContent = "By Frido Verweij"; // ©
	footer.appendChild(footerAnchor);
	document.body.appendChild(footer);
	
	// toggle explanation window
	const explanationWindow = document.querySelector("#explanation");
	const header = document.querySelector("header") || document.createElement("header");	
	if (explanationWindow) {
		explanationWindow.classList.remove("visible");
		const openExplanation = document.createElement("button");
		const closeExplanation = document.createElement("button");
		openExplanation.setAttribute("title","Open explanation");
		openExplanation.setAttribute("aria-label", "Open explanation window.");
		closeExplanation.setAttribute("title","Close this explanation");
		closeExplanation.setAttribute("aria-label", "Close explanation window.");
		header.appendChild(openExplanation);
		explanationWindow.appendChild(closeExplanation);		
		openExplanation.addEventListener('click', toggleVisible);
		closeExplanation.addEventListener('click', toggleVisible);
		document.body.appendChild(header);
	}
	
	function toggleVisible() {
		explanationWindow.classList.toggle("visible");
	};
}); 