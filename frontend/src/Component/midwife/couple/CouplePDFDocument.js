import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import exportTitle from "../../Assets/exportTitle.png";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 50,
    fontSize: 14,
    border: '1px solid black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 25,
    marginTop: 20,
    textAlign: 'center',
  },
  certificate: {
    marginTop: 20,
    marginBottom: 20,
    lineHeight: 1.5,
  },
  signing: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  nameSign: {
    marginLeft: 40,
  },
  dateSign: {
    marginRight: 40,
  },
  image: {
    width: '100%',
    height: 'auto', // Adjust height as needed
    marginBottom: 20, // Move image up by adjusting margin
  },
});

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const CouplePDFDocument = ({ coupleData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Logo */}
      <Image src={exportTitle} style={styles.image} />

      {/* Certificate Content */}
      <View style={styles.certificate}>
        <Text style={styles.title}>Newly Married Couple Registration</Text>
        <Text>
          This is to certify that {capitalizeFirstLetter(coupleData?.wifeName)} and {capitalizeFirstLetter(coupleData?.husbandName)} have been 
          officially registered within the Ministry of Health system as a newlywed couple. Their respective National Identification Cards, 
          {coupleData?.wifeNic} and {coupleData?.husbandNic}, have been verified and recorded.
        </Text>
        <Text>
          {'\n'}
          They have provided their contact information as follows:
          {'\n'}
          Address - {capitalizeFirstLetter(coupleData?.address)}
          {'\n'}
          Telephone Number - {coupleData?.tel}
          {'\n'}
          Email - {coupleData?.email}.
        </Text>
        <Text>
          {'\n'}
          Furthermore, {capitalizeFirstLetter(coupleData?.wifeName)} and {capitalizeFirstLetter(coupleData?.husbandName)} have expressed 
          their preference for family planning as {coupleData?.familyPlan}. This information will be crucial for tailoring healthcare services 
          to their specific needs.
        </Text>
        <Text>
          {'\n'}
          This registration signifies their commitment to proactive health management and family planning, as endorsed by the Ministry of Health.
        </Text>
      </View>

      {/* Name and Date Signing */}
      <View style={styles.signing}>
        <View style={styles.nameSign}>
          <Text>............................</Text>
          <Text>Authorized By: [Name/Position]</Text>
        </View>
        <View style={styles.dateSign}>
          <Text>............................</Text>
          <Text>Date: [Date]</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default CouplePDFDocument;
