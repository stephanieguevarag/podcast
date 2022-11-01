export interface PodcastDetailData {
  wrapperType: string;
  kind: string;
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  trackRentalPrice: number;
  collectionHdPrice: number;
  trackHdPrice: number;
  trackHdRentalPrice: number;
  releaseDate: Date;
  collectionExplicitness: string;
  trackExplicitness: string;
  trackCount: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating: string;
  artworkUrl600: string;
  genreIds: string[];
  genres: string[];
  previewUrl: string;
  closedCaptioning: string;
  artistIds: number[];
  episodeGuid: string;
  description: string;
  shortDescription: string;
  artworkUrl160: string;
  episodeFileExtension: string;
  episodeContentType: string;
  trackTimeMillis?: number;
  episodeUrl: string;
}

export interface PodcastDetail {
  resultCount: number;
  results: PodcastDetailData[];
}
