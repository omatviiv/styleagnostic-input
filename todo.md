# todo conventions
- task is not done yet
@ task is in progress
+ task is done

__fix__ - small fix that doesn't introduce new functionality

__feat__ - change that introduces new functionality but doesn't break
           backward compatibility

__break__ - change that breaks backward compatibility

# setup project tasks (for the initial release)
Tasks in this section are all __fix__ because project is before initial release.

Though styleagnostic-input is already released and has already lots of
versions but its because this project is used as experimental for polishing
styleagnostic-component template that is why here as an exception
styleagnostic-input is still in `before intial release` state.

- add react-syntax-highlighter
- add input component version in the main header of the public demo
- add cypress and write first test
- implement disabled state for the input and document in Use section
- create stickable to either of corners MainMenu component in demo/theme-service
  use it in demo/app/index.tsx
- move components from demo/theme-service to styleagnostic-theme-service
  but before doing this we need to finish with styleagnostic-component
  setup because theme-service will be using that setup as well so this is
  kind of circular dependency. This circularity will be solved by not
  installing theme-service in the styleagnostic-component template
  project - each component will install this theme additionally - add
  additional note to README in styleagnostic-component repo.
  So basically demo will be practically empty for newely created component
  and this is fine.

# fixes and improvements (post initial release)
Tasks in this section will follow todo conventions.
