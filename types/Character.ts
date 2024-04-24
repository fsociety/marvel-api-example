interface URLItem {
    type: string;
    url: string;
  }
  
interface ThumbnailData {
  path: string;
  extension: string;
}

interface ComicListItem {
  resourceURI: string;
  name: string;
}

interface ComicSummary {
  available: number;
  returned: number;
  collectionURI: string;
  items: ComicListItem[];
}

interface StoryListItem {
  resourceURI: string;
  name: string;
  type: string;
}

interface StorySummary {
  available: number;
  returned: number;
  collectionURI: string;
  items: StoryListItem[];
}

interface EventListItem {
  resourceURI: string;
  name: string;
}

interface EventSummary {
  available: number;
  returned: number;
  collectionURI: string;
  items: EventListItem[];
}

interface SeriesListItem {
  resourceURI: string;
  name: string;
}

interface SeriesSummary {
  available: number;
  returned: number;
  collectionURI: string;
  items: SeriesListItem[];
}

interface CharacterResult {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: URLItem[];
  thumbnail: ThumbnailData;
  comics: ComicSummary;
  stories: StorySummary;
  events: EventSummary;
  series: SeriesSummary;
}

interface CharacterDataContainer {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: CharacterResult[];
}
  
interface CharacterResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: CharacterDataContainer;
  etag: string;
}

export type {CharacterResponse};