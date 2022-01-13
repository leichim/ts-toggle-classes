# ts-toggle-classes
Simple TypeScript function for toggling classes in HTML Elements.

## Usage
Using this functions is simple.

```js
import { ToggleClass } from ./toggle-class

// Single class
ToggleClass( document.querySelector('.your-element-to-toggle'), 'toggled-class');

// Multiple classes
ToggleClass( document.querySelector('.your-element-to-toggle'), ['toggled-class', 'another-class']);
```
