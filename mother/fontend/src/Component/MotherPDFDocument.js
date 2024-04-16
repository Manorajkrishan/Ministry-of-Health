import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

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
        marginBottom: 25,
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

// Create PDF document component
const MotherPDFDocument = ({ motherData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>{motherData.name}'s Details</Text>
        <Text style={styles.text}>Name: {motherData.name}</Text>
        <Text style={styles.text}>Age: {motherData.age}</Text>
        <Text style={styles.text}>Blood Group: {motherData.bloodgroup}</Text>
        <Text style={styles.text}>Pregnant Months: {motherData.pregnantmonthcount}</Text>
        <Text style={styles.text}>Contact: {motherData.contact}</Text>
        <Text style={styles.text}>Address: {motherData.address}</Text>
        <Text style={styles.text}>Last Consulted: {motherData.lastconsult}</Text>
        <Text style={styles.text}>Next Consultation: {motherData.nextconsult}</Text>
        <Text style={styles.text}>Email: {motherData.email}</Text>
        <Text style={styles.text}>Status: {motherData.status}</Text>
        <Text style={styles.text}>Last Updated: {new Date().toLocaleString()}</Text>
      </View>
    </Page>
  </Document>
);

export default MotherPDFDocument;
