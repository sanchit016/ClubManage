// createIndexes.js

const mongoose = require("mongoose");
const Admin = require('./models/Admin'); // Adjust the path accordingly
const Club = require('./models/Club');
const ClubJoinRequest = require('./models/ClubJoinRequest');
const ClubMember = require('./models/ClubMember');
const Student = require('./models/Student');
const Teacher = require('./models/Teacher');
const connectDB = require("./config/connectDB");

const createIndexes = async () => {
  try {
    await Admin.createIndexes();
    console.log('Unique index on Admin email field created successfully');

    await Club.createIndexes();
    console.log('Unique index on Club name field created successfully');

    await ClubJoinRequest.createIndexes();
    console.log('Compound index on ClubJoinRequest studentId and clubId fields created successfully');

    await ClubMember.createIndexes();
    console.log('Compound index on ClubMember studentId and clubId fields created successfully');

    await Student.createIndexes();
    console.log('Unique index on Student email field created successfully');

    await Teacher.createIndexes();
    console.log('Unique index on Teacher email field created successfully');
  } catch (error) {
    console.error('Error creating indexes:', error.message);
  } finally {
    mongoose.disconnect();
  }
};

connectDB();
createIndexes();
