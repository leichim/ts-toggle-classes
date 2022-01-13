/**
 * Toggles the class(es) for a given HTML element
 * @param element The element for which the class should be toggled
 * @param className The name of the given class, or an array of names
 */
export function ToggleClass(element: HTMLElement | null, className: string | string[]): void {

    if( ! element ) {
        return;
    }

    if( Array.isArray(className) ) {
        className.forEach(name => {
            if( element.classList.contains(name) ) {
                element.classList.remove(name);
            } else {
                element.classList.add(name);
            }            
        });
    } else {
        if( element.classList.contains(className) ) {
            element.classList.remove(className);
        } else {
            element.classList.add(className);
        }
    }
    
}
