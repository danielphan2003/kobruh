export interface IImage {
  poster: string,
  banner: string,
  thumbnail: string,
  backdrop: string,
}

export interface IMenu {
  id: string,
  name: string,
  slug: string,
  required: boolean,
  icon: string,
  sub_menu: string[],
};

export interface IMovie {
  id: string,
  group: string,
  type: Number,
  title: string,
  known_as: string,
  short_description: string,
  long_description: string,
  resolution: Number,
  runtime: Number,
  share_urls: string,
  slug: string,
  released: boolean,
  is_single_season: boolean,
  release_year: string,
  publish_date: string,
  release_date: string,
  favorites: Number,
  views: Number,
  images: IImage[],
  payment_type: string,
  is_watchable: boolean,
  price: Number,
};

export interface IMetadata {
  total: Number,
  limit: Number,
  page: 0,
};

export interface IRibbon {
  id: string,
  name: string,
  type: Number,
  options: string,
  items: IMovie[],
  metadata: IMetadata,
};

export interface IPage {
  banners: IMovie[],
  ribbons: IRibbon[],
};