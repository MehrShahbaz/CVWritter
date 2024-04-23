import { StyleSheet, Text, View } from '@react-pdf/renderer';

type DetailsProps = {
  details: string[];
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: '5px',
    alignItems: 'center',
  },
  text: {
    marginLeft: '5px',
    fontSize: '10px',
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
