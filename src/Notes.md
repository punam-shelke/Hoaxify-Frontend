# Writing test in Jest

## Convention

### Placing test files

- under the `__tests__` folder
- under the same directory as source

### Naming Test

- component.spec.js
  - spec stands for specification of component
- component.test.js

### Pages of application

- Different pages of application can be put under pages folder.

## Dependencies required

- `react` because we are going to render react components.
- `render` function from `@testing-library/react` to render components
- for additional functionality `@testing-library/jest-dom/extend-expect`

## Functions

- we can group js tests with `describe` functions.
- `it` or `test` function is for defining one test
- `render` function returns query functions eg `container` function.
- `container.querySelector` get the particular element of component
- `queryByPlaceholderText` function can find the input element with specific placeholder value.

**we get these query functions by javascript's destructuring functionality**

## Assertion

- for assertions we use `expect` API with **matchers**
- to check the text content of html element `toHaveTextContent` matcher can be used
- `toBeInTheDocument` matcher checks for element to be present in the document.
