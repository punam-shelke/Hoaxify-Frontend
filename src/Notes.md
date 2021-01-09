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
- `toHaveValue` matcher checks for `value` attribute of input element.

## Handling input change

### simulating user input in test

- `fireEvent` triggers content change and simulates user input action
- `change` function of fireEvent takes 2 parameters.

  - input field
  - changeEvent

- in html input component, whenever a change occurs it triggers an event and this event object carries input value inside **target object value field**

```
eg.
const changeEvent = {
        target: {
          value: "my-display-name",
        },
      };
```

- Input element has it's inner value state.
- If we want to specify our own state to it then we also have to provide callback function to handle change events.

### setting callback function onChange event for input

- to modify state we call `this.setState({ property: value })`
- setState is a part of component
- we can just provide change set of json to setState, it merges that input with existing state.
