import { BehaviorSubject, of } from 'rxjs';
import { startWith, switchMap, map, tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
export const currentGroup$ = new BehaviorSubject(of(null));

import AsyncState from './async_state';

const state = new AsyncState();
export const currentState$ = state.currentState;


export const items$ = currentGroup$.asObservable().pipe(
  tap((_) => state.setLoading()),
  switchMap(group => {
    const url = `https://hub.arcgis.com/api/v3/datasets?filter[groupIds]=${group.id}&page[size]=99`;
    return ajax(url);
  }),
  map((data) => {
    return data.response.data.map((result) => {
      let subtitle = '';
      if (result.attributes.tags && result.attributes.tags.find((s) => s.match(/\(?igc-ec\)?|idaho\s+geospatial\s+council\s+-\s+executive\s+committee\s+framework\s+layer/gi))) {
        subtitle = 'Idaho Framework Layer';
      }
      const itemId = result.links.itemPage.split("=")[1];
      const description = result.attributes.searchDescription;
      return ({
        id: result.id,
        title: result.attributes.name,
        subtitle,
        description,
        owner: result.attributes.owner,
        type: result.attributes.type,
        snippet: description,
        thumbnailUrl: `https://www.arcgis.com/sharing/content/items/${itemId}/info/${result.attributes.thumbnailUrl}`,
        slug: result.attributes.slug,
        landingPage: result.links.self.replace("api/v3/", ""),
        url: result.links.itemPage,
        org: result.attributes.organization,
      });
    });
  }),
  tap((_) => state.setLoaded()),
  startWith([]),
);
