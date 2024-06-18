import React from 'react';
import BootstrapCarousel from "react-bootstrap/Carousel";
import phiimages from "../../dashimages/phiimages.jpg";
import midwife from "../../dashimages/midwife.jpg";
import doctor from "../../dashimages/doctor.jpg";
import backgroundImage from "../../dashimages/backgroundimage.jpg";
import Footer from "../../footer"

function CarouselComponent() {
    const carouselStyle = {
        maxWidth: "50%",
        margin: "auto",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "20px"
      };
    
      const boxStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        margin: "auto",
        marginTop: "20px"
      };
    
      const descriptionStyle = {
        backgroundColor: "white",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
        padding: "20px",
        borderRadius: "10px",
        width: "30%",
        textAlign: "justify",
        color: "#000000" 
      };
    
  return (
    <div>
    <div style={carouselStyle}>
        <BootstrapCarousel>
          <BootstrapCarousel.Item>
            <img src={phiimages} className="d-block w-100" alt="First slide" />
            <BootstrapCarousel.Caption style={{ fontSize: "24px" }}>
              <h3 style={{ fontSize: "32px" ,color: "#333"}}>PHI Services Management</h3>
              <p style={{ fontSize: "20px" ,color: "#333" }}>The PHI Services website offers a comprehensive suite of solutions spanning disease management, patient details management, school health services, and hotel inspection.</p>
            </BootstrapCarousel.Caption>
          </BootstrapCarousel.Item>
          <BootstrapCarousel.Item>
            <img src={midwife} className="d-block w-100" alt="Second slide" />
            <BootstrapCarousel.Caption style={{ fontSize: "24px" }}>
              <h3 style={{ fontSize: "32px" ,color: "#333"}}>Midwife Services Management</h3>
              <p style={{ fontSize: "20px" ,color: "#333"}}>The midwife services section of the website provides comprehensive support for newly wedded couples, pregnant mothers, and baby information management</p>
            </BootstrapCarousel.Caption>
          </BootstrapCarousel.Item>
          <BootstrapCarousel.Item>
            <img src={doctor} className="d-block w-100" alt="Third slide" />
            <BootstrapCarousel.Caption style={{ fontSize: "24px" }}>
              <h3 style={{ fontSize: "32px" ,color: "#333"}}>Doctor Services Management</h3>
              <p style={{ fontSize: "20px" ,color: "#333"}}>The doctor services section of the website provides a comprehensive platform for recording student details and vaccination information</p>
            </BootstrapCarousel.Caption>
          </BootstrapCarousel.Item>
        </BootstrapCarousel>
      </div>
      <div style={boxStyle}>
        <div style={descriptionStyle}>
          <h4>PHI Services</h4>
          <p>The PHI Services website offers a comprehensive suite of solutions spanning disease management, patient details management, school health services, and hotel inspection. In the domain of infectious disease management, our platform equips healthcare professionals with real-time monitoring and collaboration tools to effectively combat outbreaks. We provide secure patient details management systems, ensuring compliance with regulations like HIPAA, and enhancing efficiency in healthcare delivery. For schools, our solutions encompass student health record management and facilities' sanitary details, promoting a safe learning environment through immunization tracking and communicable disease surveillance. Additionally, our hotel inspection tools enable thorough evaluations of hygiene and safety standards, empowering hospitality establishments to maintain compliance and uphold quality standards.</p>
        </div>
        <div style={descriptionStyle}>
          <h4>Midwife Services</h4>
          <p>The midwife services section of the website provides comprehensive support for newly wedded couples, pregnant mothers, and baby information management. Through our platform, expectant parents can access personalized care plans, educational resources, and appointment scheduling tools tailored to their needs. For newly wedded couples, we offer preconception counseling and fertility support to assist in family planning. Throughout pregnancy, our midwives provide compassionate prenatal care, including routine check-ups, screenings, and personalized guidance on nutrition and wellness. After childbirth, our platform facilitates the recording and management of vital baby information, such as growth milestones, immunizations, and developmental assessments, empowering parents to track their child's progress and ensure optimal health and well-being.</p>
        </div>
        <div style={descriptionStyle}>
          <h4>Doctor Services</h4>
          <p>The doctor services section of the website provides a comprehensive platform for recording student details and vaccination information. Our platform offers efficient tools for healthcare providers to securely store and manage student records, including demographic information, medical history, and contact details. Additionally, we streamline the process of tracking vaccination details, enabling healthcare professionals to record immunizations, schedule reminders for follow-up doses, and generate reports for individual students or entire school populations. Our user-friendly interface and robust data management capabilities ensure compliance with regulatory standards while enhancing the delivery of healthcare services to students, promoting a healthy school environment.</p>
        </div>
      </div>
      <Footer/>
      </div>
  )
}

export default CarouselComponent;
