Simplest input component mainly used in other more complex components such as
select component where options filter is supported and we need input for the
filter itself, phone input component etc.

But of couse this component can be used directly in the web application if
simple input component is required.

# Why this component exists
It provides debounce functionality for text based input types.

# Supported input types
- <input type="text">
- <input type="email">
- <input type="number">
- <input type="password">
- <input type="search">
- <input type="tel">
- <input type="url">

The rest of input types are not supported in this component:
- <input type="checkbox"> not supported because debouncing makes no sence
when we deal with just boolean value and the checkbox itself is very
simple component which doesn't require style separation i.e. it is
absolutely enough to keep checkbox as simply member of the theme.

- <input type="color"> not supported because debounce will not make sence
for color picker and most probably throttling will be better option so
there should be a separate component for this kind of input if needed.

- <input type="file"> not supported since it doesn't require debounce
and there is no text input in this case so most probably just simple
component in the theme would work.

- <input type="button"> not supported because it can be completely replaced
with <button> html element which has wider functionality.
This type of input is maily for legacy.

- <input type="radio"> not supported because debouncing makes no sence
when we deal with radio value and the redio itself is very simple component
which doesn't require style separation i.e. it is absolutely enough to
keep checkbox as simply member of the theme.

- <input type="range"> not supported because it doesn't have texual
input to be debounced and this is enough to store this component as part
of the theme.

- <input type="date"> and <input type="datetime-local"> and
<input type="month"> and <input type="time"> and <input type="week"> are
not supported because the UX of the standard html data input purely depends
on specific browser implementation and will differ along the browsers quite
dramatically and there is no easy way changin that style and make it
consistant across the browsers there should be separate style agnostic
component to handle date/time user input.

- <input type="hidden"> not supported since it doesn't need debounce
this kind of input is used to pass some data to the server without
interactin with user and while there are number of other ways to do
this with modern web development but there still are some valid use
cases but anyway just component in a theme would work because seems
there is not potential for reusable logic here to separate from
the style.

- <input type="image"> not supported because input type image which is
basically a submit button in a form of image can be replaced with more
flexible <button> with <img> inside. Even if we still for some reason
need input type image this is not valid component for debounce since
there is no text user input involved

- <input type="reset"> not supported and can be replaced with
<button type="reset">

- <input type="submit"> not supported and can be replaced with
<button type="submit">

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
all projects share same eslint rules and build configuration.

This particular project also contains a component demo for convenience of
development and testing. And the demo project is very similar to 
[react-template](https://github.com/omatviiv/react-template#setup-notes).
Except that its buildable src/ is demo/ and stores not the component itself
but demo pages for the component.

# Node & npm versions
Project created with node 18 and npm 8.
