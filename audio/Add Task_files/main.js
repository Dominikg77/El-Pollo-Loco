//templates laden
async function init() { // die übergeordnete Funktion benötigt ebbenfalls Await 
    await includeHTML();
}
async function includeHTML() { // sollte zuerst die Webseiten Templates Laden
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i]; // element ist gleich Header
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) { // wenn resp ok ist dann
            element.innerHTML = await resp.text();
        } else { // wenn nicht, dann  
            element.innerHTML = 'Page not found';
        }
    }
}