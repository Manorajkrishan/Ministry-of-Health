import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import exportTitle from "../../Assets/exportTitle.png";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 50,
    fontSize: 14, // Increased font size
    border: '1px solid black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 25,
    marginTop: 20,
    textAlign:'center',
  },
  certificate: {
    marginTop: 20,
    marginBottom: 20, // Increased spacing
    lineHeight: 1.5, // Increased line gap
  },
  signing: {
    position: 'absolute',
    bottom: 40, // Adjusted position
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  nameSign: {
    marginLeft: 40, // Adjusted position
  },
  dateSign: {
    marginRight: 40, // Adjusted position
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

// Create PDF document component
const MotherPDFDocument = ({ motherData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Logo */}
      <Image src={exportTitle} style={styles.image} />
      
      {/* Certificate Content */}
      <View style={styles.certificate}>
        <Text>
        <Text style={styles.title}>Maternal Health Registration</Text>
          {'\n\n'}
        This is to certify that {capitalizeFirstLetter(motherData.name)} is officially registered within the Ministry of Health system for 
        maternal health management.
          {'\n\n'}
        </Text>
        <Text>
          Her identity has been verified, and her contact information is as follows: 
          {'\n'}
          Contact Number - {motherData.contact}
          {'\n'}
          Address - {capitalizeFirstLetter(motherData.address)}
          {'\n'}
          Email - {motherData.email}.
          {'\n\n'}
        </Text>
        <Text>
          {capitalizeFirstLetter(motherData.name)}'s health profile indicates that she is {capitalizeFirstLetter(motherData.status)}. 
          Based on her reported date of birth and months pregnant, appropriate maternal health services will be provided to ensure her well-being 
          and that of her unborn child.
          {'\n\n'}
        </Text>
        <Text>
          Furthermore, {capitalizeFirstLetter(motherData.name)}'s blood group is recorded as {motherData.bloodgroup}. This information will 
          be vital for any medical interventions during her pregnancy.
          {'\n\n'}
        </Text>
        <Text>
          This registration signifies the Ministry of Health's commitment to providing comprehensive maternal health care, ensuring the safety 
          and well-being of expectant mothers and their babies.
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

export default MotherPDFDocument;
