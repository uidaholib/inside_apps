# Inside Javascript apps

The Javascript apps use [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) to share code. The apps are built with SvelteJS and are located in the `/packages/` folder.

The `/packages/shared` folder contains the shared code used by other apps in the `/packages/`.

## Dependencies

To build and test the following should be installed:

- Node and NPM (or [Yarn](https://yarnpkg.com/)). [NodeJS website](https://nodejs.org/en/)

## Scripts

The following script are used:

1. Development
   - cd into the app folder (example: `cd packages/search` from the root of the repository for the search app.)
   - run `yarn install` to install dependencies (if not done previously)
   - run `yarn dev` to start the local development server
2. Production
   - run `yarn deploy` to build all the apps and copy them to the `build/` (ensure that `build/browse-framework`, `build/browse-org`, and `build/search` directories exist in the repository) 
   - After running `yarn deploy` the contents of `build/` should be copied to inside_source `assets/lib/` to be integrated into the website.
   - for a single app, cd into the app folder (example: `cd packages/search` from the root of the repository for the search app), then run `yarn build` to build the app (the app bundle will be located in the `/public` inside the app folder.

## API 

The API functions are located in `packages/shared/api` folder.

#### Important files

1) `organizations.js` is used to retrieve the open data organizations and their groups
2) `group.js` is used to retrieve a list of items for an open data group
3) `items.js` is used to retrieve datasets for the `Browse Framework` app
4) `search.js` is used to search for datasets in a list of open data groups

#### API Endpoints

1) List of Open Data organizations: https://insideidaho.org/assets/data/organizations.json (Generated from csv file with Jekyll)
2) Open Data API version 2: https://opendata.arcgis.com/api/v2/
3) Open Data API version 3: https://hub.arcgis.com/api/v3/ 
4) ESRI Rest API: https://www.arcgis.com/sharing/rest/community/
  
#### API Functions

1) To retrieve a list of open data groups for an organization:
   - make a request to the following API endpoint: https://insideidaho.org/assets/data/organizations.json to retrieve the open data organizations
   - For each open data organization, use its ID to retrieve its open data groups:
   `https://www.arcgis.com/sharing/rest/community/groups?f=pjson&q=isopendata:true AND (orgid:ID)&num=NUM`
   where `ID` is the ID of the open data organization and `NUM` is the total number of groups to return.

2) To retrieve a list of datasets for an open data group:
   - using the open data group ID, make a request to:
     `https://hub.arcgis.com/api/v3/datasets?filter[groupIds]=ID&page[size]=99` 
     where `page[size]` the number of results to return

3) To search for datasets in a list of open data groups:
   - using an array of open data groups `IDs`, make a request to:
   `https://hub.arcgis.com/api/v3/datasets?q=TEXT&filter[groupIds]=GROUP_IDS&page[size]=99`
   where `TEXT` is the search term and `GROUP_IDS` is the open data groups IDs.
   - The search result will not return the thumbnail URL of the items, to retrieve the URL make a request to:
   `https://www.arcgis.com/sharing/content/items/ITEM_ID/info/thumbnailUrl`
   where `thumbnailUrl` is the thumbnail URL returned from the search result and `ITEM_ID` is the item's ID.

#### API Items formatting

The file `packages/shared/api/item.js` is used to parse the items returned from the API requests to format that is need for the different apps. The following fields are necessary for the results to be displayed using the `Card.svelte` component:

- `id`: result id,
- `title`: result attributes name
- `subtitle`,
- `owner`: result attributes owner
- `type`: result attributes itemType
- `description`: result attributes description
- `thumbnailUrl`: result attributes thumbnail URL
- `slug`: result attributes slug
- `landingPage`: result attributes landing page
- `url`: result attributes url
- `org`: result attributes source
