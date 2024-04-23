import { StyleSheet, Text, View } from '@react-pdf/renderer';

type SubHeadingProps = {
  heading: string;
  subHeading?: string;
  isMarginBottom?: boolean;
  isBold?: boolean;
};

const SubHeading = ({ heading, subHeading, isMarginBottom = false, isBold = false }: SubHeadingProps): JSX.Element => {
  const styles = StyleSheet.create({
    container: {
      fontSize: 10, // Font size should be a number
      fontWeight: isBold ? 700 : 400, // Use numerical values for font weight
      textTransform: 'capitalize',
      marginBottom: isMarginBottom ? 5 : 0, // Margin should be a number
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
