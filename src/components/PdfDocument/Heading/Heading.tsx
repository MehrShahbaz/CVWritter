import { StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    fontFamily: 'OpenSans',
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  line: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 5,
  },
});

type HeadingProps = {
  heading: string;
};

const Heading = ({ heading }: HeadingProps): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.title}>{heading}</Text>
    <View style={styles.line} />
  </View>
);

export default Heading;
