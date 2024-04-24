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
    },
    heading: {
      textAlign: 'left',
    },
    subHeading: {
      textAlign: 'right',
    },
  });

  return (
    <View style={[styles.container, { flexDirection: 'row' }]}>
      <View style={[styles.heading, { flex: 1 }]}>
        <Text>{heading}</Text>
      </View>
      <View style={[styles.subHeading, { flex: 1 }]}>
        <Text>{subHeading}</Text>
      </View>
    </View>
  );
};

export default SubHeading;
