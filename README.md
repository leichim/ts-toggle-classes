# ts-toggle-classes
Simple TypeScript function for toggling classes in HTML Elements.

## Usage
Using this functions is simple.

```js
import { ToggleClass } from "./toggle-class";

const yourElement = document.querySelector('.your-element-to-toggle');

// Single class
ToggleClass(yourElement, 'toggled-class');

// Multiple classes
ToggleClass(yourElement, ['toggled-class', 'another-class']);
```
