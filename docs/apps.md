# Inside Javascript apps

The Javascript apps use Yarn worspaces to share code. The apps are built with SvelteJS.
The /apps/packages/shared folder contains the shared code used by other apps in the `/packages/`.

Following script are used:

1. Development
   - cd into the app folder (example: `cd packages/search` from the root of the repository for the search app.)
   - run `yarn install` to install dependencies (if not done previously)
   - run `yarn dev` to start the local development server
2. Production
   - run `yarn deploy` to build all the apps and copy them to the `/build/`
   
   for a single app, cd into the app folder (example: `cd packages/search` from the root of the repository for the search app.)
   - run `yarn build` to build the app (the app bundle will be located in the `/public` inside the app folder.
