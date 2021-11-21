# Common mistakes in testing

## Repository structure

Each case (except "unneeded act") contains three test suites:
* `yellow.test.tsx` - test suite which passes but is unstable, error prone, etc
* `red.test.tsx` - slightly changed `yellow` test suite which fails
* `green.test.tsx` - correct stable version of `yellow` test suite

All tests except `yellow`s are turned off, please remove `describe.skip` to check the behavior.

Use `yarn test:a` to `yarn test:e` commands to run tests for the specific case.

## Cases

### await on sync methods
`src/a-await-sync-methods`

Case shows potential problems with `await` on sync methods as it implicitly adds a delay in execution. The only difference in `red` test suite compared to `yellow` is a used API which performs two requests in order to get data.

### missing await on async functions
`src/b-async-without-await`

Case shows how missed await for e.g. `waitFor()` could affect test reliability. `red` is very similar to `yellow` but has an incorrect assertion and still passes.

### faker in lists or regexps
`src/c-faker-in-lists-regexps`

Case shows how tests might be flaky when faker is used to generate data. Tests in `yellow` use faker to generate data for lists or `getByText()` with a regexp, tests in `red` are the same but are executed multiple times.

### side-effects in waitFor
`src/d-side-effects-in-waitFor`

Case shows how tests with side-effects inside `waitFor` callback are prone to failure when component implementation changes. `red` renders another component that only differs from `yellow` by an extra line which is fetched from another resource.

### unneeded act()
`src/e-unneeded-act`

Case shows how to properly use `act()` to get rid of warnings. This case doesn't have a `red` test suite as at the moment of writing `act()` doesn't really affect (or I never ran into it) runtime (this might change in next versions of React)