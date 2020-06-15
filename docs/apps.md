# Inside Javascript apps

The Javascript apps use Yarn worspaces to share code. The apps are built with SvelteJS.
The `/packages/shared folder` contains the shared code used by other apps in the `/packages/`.

## Dependencies
To build and test the following should be installed:
- Node and NPM (or Yarn). 

## Scripts
Following script are used:

1. Development
   - cd into the app folder (example: `cd packages/search` from the root of the repository for the search app.)
   - run `yarn install` or `npm install` to install dependencies (if not done previously)
   - run `yarn dev` or `npm run dev` to start the local development server
2. Production
   - run `yarn deploy` or `npm run deploy` to build all the apps and copy them to the /src/assets/lib/
