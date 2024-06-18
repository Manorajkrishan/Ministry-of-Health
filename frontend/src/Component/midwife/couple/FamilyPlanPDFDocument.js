// FamilyPlanPDFDocument.js
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

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
    marginBottom: 10,
    textAlign: 'center',
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

const FamilyPlanPDFDocument = ({ familyPlanType }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Family Plan</Text>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Plan Type:</Text>
          <Text style={styles.value}>{familyPlanType}</Text>
        </View>
        {/* Add more sections for other relevant information */}
      </View>
    </Page>
  </Document>
);

export default FamilyPlanPDFDocument;
