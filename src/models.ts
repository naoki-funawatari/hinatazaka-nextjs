type SongInfo = {
  id: string;
  title: string;
  songOrder: number;
};

type SingleInfo = {
  titlePrefix: string;
  singleOrder: number;
  songs: SongInfo[];
};

export type { SongInfo, SingleInfo };
