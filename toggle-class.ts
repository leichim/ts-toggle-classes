/**
 * Toggles the class(es) for a given HTML element
 * @param element The element for which the class should be toggled
 * @param className The name of the given class, or an array of names
 */
export function ToggleClass(element: HTMLElement | Element | null, className: string | string[]): void {

    if( ! element ) {
        return;
    }

    if( Array.isArray(className) ) {
        className.forEach(name => {
            element.classList.toggle(name);            
        });
    } else {
        element.classList.toggle(className);
    }
    
}
