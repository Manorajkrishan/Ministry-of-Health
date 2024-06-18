import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar';
import { Link, useParams } from 'react-router-dom';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

export default function ViewStudent() {
    const [student, setStudent] = useState({});
    const { id } = useParams();

    const getStudentData = async () => {
        try {
            const res = await fetch(`http://localhost:8090/getstud/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await res.json();

            if (res.status === 422 || !data) {
                console.log("Error fetching student data");
            } else {
                setStudent(data);
                console.log("Data fetched successfully");
            }
        } catch (error) {
            console.error("Error fetching student data:", error);
        }
    }

    useEffect(() => {
        getStudentData();
    }, [id]);

    const MyDocument = () => (
        <Document>
            <Page style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.heading}>Student Information</Text>
                    <Text>Name: {student.name}</Text>
                    <Text>Address: {student.address}</Text>
                    <Text>Parent Name: {student.parent}</Text>
                    <Text>Contact: {student.contact}</Text>
                    <Text>Health Issue: {student.health}</Text>
                    <Text>Vision: {student.vision}</Text>
                    <Text>Overweight: {student.overweight ? 'Yes' : 'No'}</Text>
                    <Text>Disabilities: {student.disabilities}</Text>
                    <Text>Date: {student.date}</Text>
                </View>
            </Page>
        </Document>
    );

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4',
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        },
        heading: {
            fontSize: 20,
            marginBottom: 10
        }
    });

    return (
        <div className="container mt-5">
            <SideBar />
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <PDFViewer width="100%" height="600px">
                        <MyDocument />
                    </PDFViewer>
                    <div className="text-center mt-5">
                        <Link className="btn btn-primary" to="/homedoctor">Back</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
