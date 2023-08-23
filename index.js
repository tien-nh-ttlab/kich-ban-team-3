const box = document.getElementById('box');

import scriptContents from "./content.json" assert { type: 'json' };;

const createHtmlTDElement = (content) => {
    const element = document.createElement('th');
    element.textContent = content;
    return element;
}

for (const content of scriptContents) {
    const element = document.createElement('tr');

    if (content.header) {
        const temp = createHtmlTDElement('')
        const headerElement = createHtmlTDElement(content.header);
        element.appendChild(temp)
        element.appendChild(headerElement);
        box.appendChild(element);
        continue;
    }

    const actorElement = createHtmlTDElement(content.actor);

    const scriptElement = createHtmlTDElement(content.script);

    const actionElement = createHtmlTDElement(content.action);
    const audioTableElement = document.createElement('td');
    if (content.audioSrc) {
        const audioElement = document.createElement('AUDIO');
        audioElement.setAttribute('src', content.audioSrc);
        audioElement.setAttribute("controls", "controls");
        audioTableElement.appendChild(audioElement)
    }

    element.appendChild(actorElement);
    element.appendChild(scriptElement);
    element.appendChild(actionElement);
    if (content.audioSrc) {
        element.appendChild(audioTableElement);
    }
    box.appendChild(element);
}
