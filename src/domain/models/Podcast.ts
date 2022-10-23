export interface ApiPodcast {
  category: Category;
  id: Id;
  "im:artist": Label;
  "im:contentType": ContentType;
  "im:image": Image[];
  "im:name": Label;
  "im:price": Price;
  "im:releaseDate": ReleaseDate;
  link: Link;
  rights: Label;
  summary: Label;
  title: Label;
}

export interface Podcast {
  category: Category;
  id: Id;
  artist: Label;
  contentType: ContentType;
  image: Image[];
  name: Label;
  price: Price;
  releaseDate: ReleaseDate;
  link: Link;
  rights: Label;
  summary: Label;
  title: Label;
}

export interface Image {
  label: string;
  attributes: Attributes;
}

interface Label {
  label: string;
}

interface Attributes {
  height: string;
}

interface PriceAttributes {
  amount: string;
  currency: string;
}

interface Price {
  label: string;
  attributes: PriceAttributes;
}

interface ContentTypeAttributes {
  term: string;
  label: string;
}

interface ContentType {
  attributes: ContentTypeAttributes;
}

interface LinkAttributes {
  rel: string;
  type: string;
  href: string;
}

interface Link {
  attributes: LinkAttributes;
}

interface IdAttributes {
  "im:id": string;
}

interface Id {
  label: string;
  attributes: IdAttributes;
}

interface CategoryAttributes {
  "im:id": string;
  term: string;
  scheme: string;
  label: string;
}

interface Category {
  attributes: CategoryAttributes;
}

interface ReleaseDate {
  label: Date;
  attributes: Label;
}
