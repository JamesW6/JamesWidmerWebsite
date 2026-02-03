function listenerFunction(this: HTMLElement, event: Event) {
    alert("i hate you");
    console.log("Button clicked!");
}
export function initFunction() {
    console.log("i hate you");
    const element = document.getElementById('mainButton');
    element?.addEventListener('click', listenerFunction);
}

initFunction();
