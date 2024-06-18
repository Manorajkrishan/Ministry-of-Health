import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import midlogo from "../Assets/midwife2.png";

function Homemidwifes() {
  return (
    <div className="fluid">
      <Header title="Midwife Home" />
      <div className="homebrief">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-7">
          <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#4d4d4d' }}>Welcome to Midwife Home</h2>
          <div className="container" style={{ display: 'flex', flexWrap: 'nowrap' }} >
            <div>
              <img src={midlogo} className="App-logo" alt="logo" style={{ width: '600px', height: '900px', marginTop: '15px', marginLeft: '83px' }} />
            </div>
            <div>
              {/* Managing Newly Married Couples */}
              <section style={{ marginBottom: '30px' }}>
                <h4 style={{ color: '#0066cc' }}>Managing Newly Married Couples</h4>
                <p style={{ textAlign: 'left', fontSize: '14px', width:'500px'}}>
                  As a midwife, you play an important role in supporting newly married couples as they embark on their journey together. Here are some key aspects of managing newly married couples:
                </p>
                <ul style={{ textAlign: 'left', fontSize: '14px' }}>
                  <li>Provide counseling and education on family planning methods.</li>
                  <li>Offer advice on building healthy relationships.</li>
                  <li>Monitor the health and well-being of both partners.</li>
                  <li>Coordinate with healthcare professionals for any necessary medical interventions.</li>
                </ul>
              </section>

              {/* Managing Pregnant Mothers */}
              <section style={{ marginBottom: '30px' }}>
                <h4 style={{ color: '#0066cc' }}>Managing Pregnant Mothers</h4>
                <p style={{ textAlign: 'left', fontSize: '14px', width:'500px' }}>
                  Supporting pregnant mothers throughout their pregnancy is essential for ensuring a safe and healthy delivery. Here's how you can effectively manage pregnant mothers:
                </p>
                <ul style={{ textAlign: 'left', fontSize: '14px' }}>
                  <li>Provide prenatal care, including regular check-ups and screenings.</li>
                  <li>Offer guidance on nutrition and exercise during pregnancy.</li>
                  <li>Address any concerns or complications that may arise during pregnancy.</li>
                  <li>Prepare expectant mothers for labor and delivery.</li>
                </ul>
              </section>

              {/* Managing Newborn Babies */}
              <section>
                <h4 style={{ color: '#0066cc' }}>Managing Newborn Babies</h4>
                <p style={{ textAlign: 'left', fontSize: '14px', width:'500px' }}>
                  Welcoming a newborn baby into the world is a joyous occasion, and as a midwife, you play a vital role in ensuring the health and well-being of both the baby and the mother. Here are some important aspects of managing newborn babies:
                </p>
                <ul style={{ textAlign: 'left', fontSize: '14px' }}>
                  <li>Provide postnatal care for the mother and newborn baby.</li>
                  <li>Assist with breastfeeding and newborn care techniques.</li>
                  <li>Monitor the baby's growth and development in the early stages of life.</li>
                  <li>Offer support and guidance to new parents as they adjust to parenthood.</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homemidwifes;
