# Inside Javascript apps

The Javascript apps use Yarn workspaces to share code. The apps are built with SvelteJS.

The `/packages/shared` folder contains the shared code used by other apps in the `/packages/`.

## Dependencies

To build and test the following should be installed:

- Node and NPM (or Yarn). 

## Scripts

Following script are used:

1. Development
   - cd into the app folder (example: `cd packages/search` from the root of the repository for the search app.)
   - run `yarn install` to install dependencies (if not done previously)
   - run `yarn dev` to start the local development server
2. Production
   - run `yarn deploy` to build all the apps and copy them to the `/build/`
   - for a single app, cd into the app folder (example: `cd packages/search` from the root of the repository for the search app), then run `yarn build` to build the app (the app bundle will be located in the `/public` inside the app folder.
