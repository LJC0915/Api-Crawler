export interface ApiPage {
  title: string;
  url: string;
  apis: Api[];
}

export interface Api {
  desc: string;
  url: string;
}
