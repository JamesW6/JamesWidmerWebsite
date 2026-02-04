function listenerFunction(this: HTMLElement, event: Event) {
    window.location.replace('../projects/projects.html');
}
export function initFunction() {
    console.log("i hate you");
    const element = document.getElementById('mainButton');
    element?.addEventListener('click', listenerFunction);
}

initFunction();
