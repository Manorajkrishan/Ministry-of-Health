const express = require('express');
const router = express.Router();
const Student = require("../models/Studentschema");
const School = require("../models/Schoolschema");

router.post('/students', async (request, response) => {
    try {
      if (
        !request.body.name ||
        !request.body.age ||
        !request.body.DOB ||
        !request.body.gender || 
        !request.body.mail ||
        !request.body.address ||
        !request.body.number ||
        !request.body.height ||
        !request.body.weight ||
        !request.body.BMI ||
        !request.body.stunting ||
        !request.body.wasting ||
        !request.body.overweight
      ) {
        return response.status(400).send({
          message: 'Send all required fields',
        });
      }
      const newStudent = {
        name: request.body.name,
        age: request.body.age,
        DOB: request.body.DOB,
        gender: request.body.gender,
        mail: request.body.mail,
        address: request.body.address,
        number: request.body.number,
        height: request.body.height,
        weight: request.body.weight,
        BMI: request.body.BMI,
        stunting: request.body.stunting,
        wasting: request.body.wasting,
        overweight: request.body.overweight,
      };
  
      const student = await Student.create(newStudent);
  
      return response.status(201).send(student);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

  router.get('/students', async (request, response) => {
    try {
      const students = await Student.find({});
  
      return response.status(200).json({
        count: students.length,
        data: students,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

  router.get('/students/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const student = await Student.findById(id);

        if (!student) {
            return response.status(404).json({ message: 'Student not found' });
        }

        return response.status(200).json(student);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

  router.put('/students/:id', async (request, response) => {
    try {
      if (
        !request.body.name ||
        !request.body.age ||
        !request.body.DOB ||
        !request.body.gender ||
        !request.body.mail ||
        !request.body.address ||
        !request.body.number ||
        !request.body.height ||
        !request.body.weight ||
        !request.body.BMI ||
        !request.body.stunting ||
        !request.body.wasting ||
        !request.body.overweight
      ) {
        return response.status(400).send({
          message: 'Send all required fields: title, author, publishYear',
        });
      }
  
      const { id } = request.params;
  
      const result = await Student.findByIdAndUpdate(id, request.body);
  
      if (!result) {
        return response.status(404).json({ message: 'Student not found' });
      }
  
      return response.status(200).send({ message: 'Student updated successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

  router.delete('/students/:id', async (request, response) => {
    try {
      const { id } = request.params;
  
      const result = await Student.findByIdAndDelete(id);
  
      if (!result) {
        return response.status(404).json({ message: 'Student not found' });
      }
  
      return response.status(200).send({ message: 'Student deleted successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
 
  /*router.get('/students/report', async (request, response) => {
    try {
      // Fetch the necessary data for the report from the database
      const reportData = await Student.find({}, 'BMI'); // Assuming BMI is the field you want for the report
  
      return response.status(200).json({
        count: reportData.length,
        data: reportData,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });*/
  

  router.post('/schools', async (request, response) => {
    try {
      if (
        !request.body.name ||
        !request.body.address ||
        !request.body.telephoneNumber ||
        !request.body.numberOfTeachers ||
        !request.body.numberOfStudents ||
        !request.body.dentalDetails ||
        !request.body.dentalDetails_text ||
        !request.body.toiletFacilities ||
        !request.body.toiletFacilities_text ||
        !request.body.waterSupply ||
        !request.body.waterSupply_text ||
        !request.body.schoolCanteen ||
        !request.body.schoolCanteen_text
      ) {
        return response.status(400).send({
          message: 'Send all required fields',
        });
      }
  
      const newSchool = {
        name: request.body.name,
        address: request.body.address,
        telephoneNumber: request.body.telephoneNumber,
        numberOfTeachers: request.body.numberOfTeachers,
        numberOfStudents: request.body.numberOfStudents,
        dentalDetails: request.body.dentalDetails,
        dentalDetails_text: request.body.dentalDetails_text,
        toiletFacilities: request.body.toiletFacilities,
        toiletFacilities_text: request.body.toiletFacilities_text,
        waterSupply: request.body.waterSupply,
        waterSupply_text: request.body.waterSupply_text,
        schoolCanteen: request.body.schoolCanteen,
        schoolCanteen_text: request.body.schoolCanteen_text,
      };
  
      const school = await School.create(newSchool);
  
      return response.status(201).send(school);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
  
  

router.get('/schools', async (request, response) => {
  try {
    const schools = await School.find({});
  
    return response.status(200).json({
      count: schools.length,
      data: schools,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get('/schools/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const school = await School.findById(id);

    if (!school) {
      return response.status(404).json({ message: 'School not found' });
    }

    return response.status(200).json(school);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.put('/schools/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await School.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'School not found' });
    }

    return response.status(200).send({ message: 'School updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.delete('/schools/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await School.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'School not found' });
    }

    return response.status(200).send({ message: 'School deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
  
module.exports = router;
