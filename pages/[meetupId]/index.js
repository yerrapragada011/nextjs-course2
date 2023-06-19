import MeetupDetail from '@/components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
      image='https://upload.wikimedia.org/wikipedia/commons/b/b5/Marburg_asv2022-02_img04_Reitgasse.jpg'
      title='First Meetup'
      address='Some Street 5, Some City'
      description='This is a first meetup'
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/b/b5/Marburg_asv2022-02_img04_Reitgasse.jpg',
        id: meetupId,
        title: 'First Meetup',
        address: 'Some Street 5, Some City',
        description: 'This is a first meetup',
      },
    },
  };
}

export default MeetupDetails;
