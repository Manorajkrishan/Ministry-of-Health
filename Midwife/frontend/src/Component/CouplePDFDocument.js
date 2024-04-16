import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 50,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontWeight: 'underline',
    marginBottom: 10,
    textAlign:'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  value: {
    marginBottom: 5,
  },
});

const CouplePDFDocument = ({ coupleData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Couple Information</Text>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Wife's Name:</Text>
          <Text style={styles.value}>{coupleData.wifeName}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Wife's NIC:</Text>
          <Text style={styles.value}>{coupleData.wifeNic}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Husband's Name:</Text>
          <Text style={styles.value}>{coupleData.husbandName}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Husband's NIC:</Text>
          <Text style={styles.value}>{coupleData.husbandNic}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Telephone:</Text>
          <Text style={styles.value}>{coupleData.tel}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Email:</Text>
          <Text style={styles.value}>{coupleData.email}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Address:</Text>
          <Text style={styles.value}>{coupleData.address}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Family Plan:</Text>
          <Text style={styles.value}>{coupleData.familyPlan}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default CouplePDFDocument;
