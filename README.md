Simplest input component mainly used in other more complex components such as
select component where options filter input is requied and we need input
for the filter itself, phone input component etc.

But ofcouse this component can be used directly in the web application if
simple input component is required.

# Use
1. `npm install styleagnostic-input`
2. Import and use in JSX:
```
import React from 'react';
import Input from 'styleagnostic-input';

const App = () => <>
  <Input/> // with default values to all props
  <Input type='email'/> // see [below](supported-input-types) for types list
  <Input value='some text'/> // value can be used in controlled manner
                             // (changed dynamically from the parent component)
  <Input placeholder='Start typing here'/>
  <Input debounceTimeout='400'/> // change default debounce timeout (300) in ms
  <Input onChange={(v) => { console.log(v); }}/>
  <Input theme={BeautifulTheme}/> // see [styleagnostic approach](style-agnostic-component-approach) for more info
</>;
```

# Why this component exists
It provides debounce functionality for text based input types.

## Supported input types
- `<input type="text">`
- `<input type="email">`
- `<input type="number">`
- `<input type="password">`
- `<input type="search">`
- `<input type="tel">`
- `<input type="url">`

The rest of input types are not supported in this component:
- `<input type="checkbox">` not supported because debouncing makes no sence
when we deal with just boolean value and the checkbox itself is very
simple component which doesn`t require style separation i.e. it is
absolutely enough to keep checkbox as simply member of the theme.

- `<input type="color">` not supported because debounce will not make sence
for color picker and most probably throttling will be better option so
there should be a separate component for this kind of input if needed.

- `<input type="file">` not supported since it doesn't require debounce
and there is no text input in this case so most probably just simple
component in the theme would work.

- `<input type="button">` not supported because it can be completely replaced
with <button> html element which has wider functionality.
This type of input is legacy.

- `<input type="radio">` not supported because debouncing makes no sence
when we deal with radio value and the redio itself is very simple component
which doesn`t require style separation i.e. it is absolutely enough to
keep checkbox as simply member of themes.

- `<input type="range">` not supported because it doesn't have texual
input to be debounced and this is enough to store this component as part
of the theme.

- `<input type="date">` and `<input type="datetime-local">` and
`<input type="month">` and `<input type="time">` and `<input type="week">` are
not supported because the UX of the standard html data input purely depends
on specific browser implementation and will differ along the browsers quite
dramatically and there is no easy way changin that style and make it
consistant across the browsers there should be separate style agnostic
component to handle date/time user input.

- `<input type="hidden">` not supported since it doesn't need debounce
this kind of input is used to pass some data to the server without
interactin with user and while there are number of other ways to do
this with modern web development but there still are some valid use
cases but anyway just component in a theme would work because seems
there is not potential for reusable logic here to separate from
the style.

- `<input type="image">` not supported because input type image which is
basically a submit button in a form of image can be replaced with more
flexible `<button>` with `<img>` inside. Even if we still for some reason
need input type image this is not valid component for debounce since
there is no text user input involved

- `<input type="reset">` not supported and can be replaced with
`<button type="reset">`

- `<input type="submit">` not supported and can be replaced with
`<button type="submit">`

# Style agnostic component approach
Component is implemented in a way that in its JSX structure all tags and styles
are coming from one single conponent property `theme`.
Thanks to [styled-components](https://styled-components.com/) we can
create a map (`theme` property object) of styled components where each will
represent a specific node in the JSX structure of the component.

Thus when following the rule above we are achieving complete style separation
from the component structure and logic. And taking this into account there is
one more important rule for styleagnostic components:
- if component doesn't have any logic to be separated from the styling then
such component doesn't deserve a separate repo and can be simply part of the
theme.

# Build setup notes
The component is provided as is without any bundling or transformation.
It is responsibility of the destination project to build it and bundle.
Which means that this approach will only work in the infrastructure where
all projects share same eslint rules and similar build configuration.

This particular project also contains a component demo for convenience of
development and testing. And the demo project is very similar to 
[react-template](https://github.com/omatviiv/react-template#setup-notes).
Except that its buildable src/ is demo/ and stores not the component itself
but demo pages for the component.

## Build setup notes for component demo
`demo/` contains component demo application for developer convenience
of component development and testing.

This demo application is not hosted anywhere directly because its intented
for local development use but it is very useful to have a separate
components demo public web application that would have all the components
demonstrated in one web site where component user can see how to use
components with code examples.

**Demo requirements to satisfy manually:**
- Create `demo/index.tsx` public demo which should be independent from anything
inside `demo/` and can only import the component or optionally some external
libraries
- no import aliases are allowed in the `demo/index.tsx`
- demo/index.tsx may be reused in local demo but only as independent demo page
(i.e. without demo controls like menu etc.)
**Demo requirements to satisfy by using `npm run publish-all`:**
- This @demo tagged version should include the demo commponent which should be
located in the `demo/index.tsx` file.
- to reuse code from local demo app in the public consolidated components
demo there should be @demo tag npm published version which will contain one
demo component for the component which then could be imported in the
consolidated components demo app.

`demo/pages` can contain any number of demo pages to be used for specific
testing purposes: some specific test cases for cypress tests to make
testing more convenient isolated and focused on specific aspect of
the component.

## Webpack bundle analyzer
There is no need for bundle analyzer because there is no bundle.
Webpack is present here only for demo application which is only intended
for local development and its newer deployed anywhere. It is just demo/index.tsx
which is included into demo tagged npm version but it is provided as is
without any additional processing.

And same thing with ensuring that test files don't go into bundle - nothing
to ensure because there is no deployable bundle.


# Demo application webpack setup notes
As `demo/index.tsx` is reserved for the isolated default demo component for
ability to share default demo into some consolidated components demo web app
the demo application itself originates from `demo/main.tsx`.

# Component release notes
todo.md - is a file where some fixes or improvements are planned and documented
specifically for the component itself independently from the whole
styleagnostic project backlog.
Project backlog is for organising work between all of the components and themes
but todo.md is completely dedicated to the component related changes.

# Take part in component development
1. clone the repo
2. run `npm install`
3. run `npm run demo` to start the demo application˙
4. run `npm run jest` to run tests watch
5. run `npm run gulp` to run svg images automatic optimisation

# Node & npm versions
Project created with node 20 and npm 10.
