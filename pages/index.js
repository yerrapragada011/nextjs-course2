import MeetupList from '@/components/meetups/MeetupList';
import { useEffect, useState } from 'react';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/b/b5/Marburg_asv2022-02_img04_Reitgasse.jpg',
    address: 'Some address 5, 1233 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/b/b5/Marburg_asv2022-02_img04_Reitgasse.jpg',
    address: 'Some address 10, 1233 Some City',
    description: 'This is a second meetup!',
  },
];

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // send a http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
}

export default HomePage;
