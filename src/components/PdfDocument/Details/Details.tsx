import { StyleSheet, Text, View } from '@react-pdf/renderer';

type DetailsProps = {
  details: string[];
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Align items to the start of the container
    marginBottom: 4, // Add margin at the bottom of each detail for separation
  },
  bullet: {
    fontSize: 10,
    marginTop: 2, // Adjust the spacing between the bullet point and the text
  },
  text: {
    marginLeft: 5,
    fontSize: 10,
    flex: 1, // Allow the text to take up remaining space in the container
    // You may need to adjust the font size or use ellipsis (...) for long text
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
