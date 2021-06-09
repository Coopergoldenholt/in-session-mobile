import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ScrollableStream from '../../components/Stream/ScrollableStreams';
import {URL} from '../../config/urlConfig';
import {IStream} from '../../types';
// import {checkMultiple, PERMISSIONS} from 'react-native-permissions';

// import {saveSockets} from '../../ducks/reducers/socketsReducer';

const data = [
  {
    streamUser: 'Nick Mercs',
    streamInfo: 'This is my stream that is really cool',
    viewers: 21365,
    streamID: 'aslkdfjalksdjflaskjdf',
    streamThumbnail:
      'https://fffsoss.com/wp-content/uploads/2020/03/Screen-Shot-2020-03-21-at-11.37.34-AM.png',
    streamRTMP: 'server',
  },
  {
    streamUser: 'Alex Holt',
    streamInfo: 'I can bake bread really good, so follow this class.',
    viewers: 121,
    streamID: 'aslkdasdfvbbrtgvd',
    streamThumbnail:
      'https://www.newmusicusa.org/wp-content/uploads/2018/06/16-nicolas-lb-livestream-featured.jpg',
    streamRTMP: 'server',
  },
];

const Discover = (props: any) => {
  const [streams, setStreams] = useState<[IStream] | []>([]);

  useEffect(() => {
    getStreams();
  }, []);

  const getStreams = async () => {
    await axios.get(`${URL}/api/scehduled-streams`).then(res => {
      setStreams(res.data);
    });
  };

  return streams ? (
    <ScrollableStream streamData={streams} navigation={props.navigation} />
  ) : null;
};

export default Discover;
