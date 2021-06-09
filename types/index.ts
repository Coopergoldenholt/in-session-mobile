export interface IText{
  style?: any;
  children: any;
}

export interface IStream {
  key_words: string;
  price: string | null;
  live: boolean;
  playback_id: string;
  private: boolean;
  scheduled_date: Date;
  stream_info: string;
  stream_key: string;
  stream_title: string;
  total_interseted: number;
  thumbnail: string;
  viewers: number | null;
  id: string;
  total_interested: number;
  username: string;
}

export interface IIcons {
  iconType: 
  | 'logo'
  | 'paperclip'
  | 'close'
  | 'close'
  | 'eye'
  | 'eye-off'
  | 'account-circle'
  | 'key'
  | 'left-chevron'
  | 'calendar-blank'
  | 'card' 
  | 'plus-circle-outline'
  | 'chevron-up' 
  | 'chevron-down'
  | 'video-call'
  | 'search'
}