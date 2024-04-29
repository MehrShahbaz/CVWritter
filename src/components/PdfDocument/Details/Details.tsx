import { StyleSheet, Text, View } from '@react-pdf/renderer';

type DetailsProps = {
  details: string[];
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: -4,
    flexDirection: 'row',
    marginLeft: 8,
    alignItems: 'center',
  },
  text: {
    marginLeft: 5,
    fontSize: 10,
  },
});
const Details = ({ details }: DetailsProps): JSX.Element => (
  <View>
    {details.map((detail, index) => (
      <View key={index} style={styles.container}>
        <Text>{'\u2022'}</Text>
        <Text style={styles.text}>{detail}</Text>
      </View>
    ))}
  </View>
);

export default Details;
