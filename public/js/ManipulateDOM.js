function $(query) {
    const elements = document.querySelectorAll(query);
    if(elements.length === 1) {
        return elements[0];
    } else {
        return elements;
    }
}

function showElement(element, animate = false) {
    element.style.display = "block";
}

function toggleElement(element, animate = false) {
    element.style.opacity == 0 ? (element.style.opacity = 1) : (element.style.opacity = 0);
    if(animate) {
        element.style.transform == "scale(1)" ? (element.style.transform = "scale(0.5)") : (element.style.transform = "scale(1)");
        setTimeout(() => {
            element.style.display === 'block' ? (element.style.display = 'none') : (element.style.display = 'block');
        }, 150)
    }
}

class ManipulateDOM {
    constructor(controller, container, animate = false) {
        this.controller = document.querySelector(controller);
        this.container = document.querySelector(container);
        
        // set container scale to 0.9 if animate == true
        if(animate) {
            this.container.style.opacity = 0;
            this.container.style.transform = 'scale(0.5)';
        }
        if(this.controller.tagName.toLowerCase() === 'input') {
            this.controller.addEventListener("change", (e) => {
                toggleElement(this.container, true);
            })
        } else {
            console.log("Not a button");
        }
    }

}