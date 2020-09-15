export default class Item {
  static from(result) {
    let subtitle = "";
    if (
      result.attributes.tags &&
      result.attributes.tags.find((s) =>
        s.match(
          /\(?igc-ec\)?|idaho\s+geospatial\s+council\s+-\s+executive\s+committee\s+framework\s+layer/gi
        )
      )
    ) {
      subtitle = "Idaho Framework Layer";
    }
    const thumbnailUrl = `https://www.arcgis.com/sharing/rest/content/items/${result.attributes.id}/info/${result.attributes.thumbnailUrl}`;
    return {
      id: result.id,
      title: result.attributes.name,
      subtitle,
      owner: result.attributes.owner,
      type: result.attributes.itemType,
      description: result.attributes.searchDescription,
      thumbnailUrl,
      slug: result.attributes.slug,
      landingPage: result.attributes.landingPage,
      url: result.attributes.url,
      org: result.attributes.source,
    };
  }
}
