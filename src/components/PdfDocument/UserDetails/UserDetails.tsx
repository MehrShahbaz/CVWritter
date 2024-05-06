import { Link, StyleSheet, Text } from '@react-pdf/renderer';
import { UserJobDetailsType, UserPersonalDetailsType } from 'types/userTypes';

import Heading from '../Heading/Heading';

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    marginBottom: '10px',
  },
  secondContainer: {
    textAlign: 'center',
  },
  name: {
    fontFamily: 'OpenSans',
    fontSize: '18px',
  },
  title: {
    fontFamily: 'OpenSans',
    fontSize: '13px',
  },
  contactInfo: {
    textAlign: 'center',
    fontSize: '10px',
  },
  line: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 1,
  },
  link: {
    color: 'black',
  },
  aboutMe: {
    fontSize: 10,
  },
});

type UserDetailsProps = {
  personalDetails: UserPersonalDetailsType;
  jobDetails: UserJobDetailsType;
};

const UserDetails = ({ personalDetails, jobDetails }: UserDetailsProps): JSX.Element => {
  const { firstName, lastName, address, phoneNumber, linkedinUrl, email } = personalDetails;
  const { title, aboutMe } = jobDetails;

  return (
    <>
      <header style={styles.container}>
        <Text style={styles.name}>
          {firstName} {lastName}
        </Text>
        <Text style={styles.title}>{title}</Text>
      </header>
      <section style={styles.secondContainer}>
        <Text style={styles.contactInfo}>
          {address} | {phoneNumber} |&nbsp;
          <Link href={linkedinUrl} style={styles.link}>
            LinkedIn
          </Link>
          &nbsp;|&nbsp;
          <Link href={`mailto:${email}`} style={styles.link}>
            {email}
          </Link>
        </Text>
      </section>
      <section>
        <Heading heading="About Me" />
        <Text style={styles.aboutMe}>{aboutMe}</Text>
      </section>
    </>
  );
};

export default UserDetails;
