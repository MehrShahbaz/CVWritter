import { StyleSheet, Text, View } from '@react-pdf/renderer';

type DetailsProps = {
  details: string[];
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  bullet: {
    fontSize: 10,
    marginTop: 2,
  },
  text: {
    marginLeft: 5,
    fontSize: 10,
    flex: 1,
  },
});
const Details = ({ details }: DetailsProps): JSX.Element => (
  <View>
    {details.map((detail, index) => (
      <View key={index} style={styles.container}>
        <Text style={styles.bullet}>{'\u2022'}</Text>
        <Text style={styles.text}>{detail}</Text>
      </View>
    ))}
  </View>
);

export default Details;
