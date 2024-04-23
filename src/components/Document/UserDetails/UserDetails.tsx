import { Link, StyleSheet, Text } from '@react-pdf/renderer';

import { UserDetailsType } from '@/types/userTypes';

import Heading from '../Heading/Heading';

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    marginBottom: '10px',
  },
  name: {
    fontSize: '18px',
  },
  title: {
    fontSize: '13px',
  },
  contactInfo: {
    textAlign: 'center',
    fontSize: '10px',
  },
  line: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginBottom: '5px',
  },
  link: {
    color: 'black',
  },
});

type UserDetailsProps = {
  userDetails: UserDetailsType;
};

const UserDetails = ({ userDetails }: UserDetailsProps): JSX.Element => {
  const { firstName, lastName, title, address, phoneNumber, linkedinUrl, email, aboutMe } = userDetails;

  return (
    <>
      <header style={styles.container}>
        <Text style={styles.name}>
          {firstName} {lastName}
        </Text>
        <Text style={styles.title}>{title}</Text>
      </header>
      <section style={styles.container}>
        <Text style={styles.contactInfo}>
          {address} | {phoneNumber} |{' '}
          <Link href={linkedinUrl} style={styles.link}>
            LinkedIn Profile
          </Link>{' '}
          |{' '}
          <Link href={`mailto:${email}`} style={styles.link}>
            {email}
          </Link>
        </Text>
      </section>
      <section>
        <Heading heading="About Me" />
        <Text style={{ fontSize: '10px' }}>{aboutMe}</Text>
      </section>
    </>
  );
};

export default UserDetails;
