import { StyleSheet, Text, View } from '@react-pdf/renderer';

type SubHeadingProps = {
  heading: string;
  subHeading?: string;
  isBold?: boolean;
  willMarginTop?: boolean;
};

const SubHeading = ({ heading, subHeading, isBold = false, willMarginTop = false }: SubHeadingProps): JSX.Element => {
  const styles = StyleSheet.create({
    container: {
      fontFamily: isBold ? 'OpenSans' : 'OpenSansItalic',
      fontSize: 10,
      fontWeight: isBold ? 700 : 400,
      textTransform: 'capitalize',
      marginTop: willMarginTop ? 5 : 0,
      flexDirection: 'row',
    },
    heading: {
      textAlign: 'left',
      flex: 1,
    },
    subHeading: {
      textAlign: 'right',
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text>{heading}</Text>
      </View>
      <View style={styles.subHeading}>
        <Text>{subHeading}</Text>
      </View>
    </View>
  );
};

export default SubHeading;
