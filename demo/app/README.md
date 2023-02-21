`demo/app` contains component demo application for developer convenience
of component development and testing.

This demo application is not hosted anywhere directly because its intented
for local development use but it is very useful to have a separate consolidated
components demo public web application that would have all the components
consolidated in one web site where component user can play and see
some how to use code examples.

So to reuse code from local demo app in the public consolidated components
demo there should be @demo tag npm published version which will contain one
demo component for the component which then could be imported in the
consolidated components demo app.

This @demo tagged version should include the demo commponent which should be
located in the `demo/app/public` folder. And the default route of the component
demo should always point to `demo/app/public`. One more important rule about
public component demo: it should not depend on anything from the local demo
application and has to be selfcontained component that only imports
the component itself and nothing more.

`demo/app/testing` can contain any number of components or pages to be
used for specific testing purposes: some specific test cases for cypress
tests to make testing more convenient isolated and focused on specific aspect
of the component.
