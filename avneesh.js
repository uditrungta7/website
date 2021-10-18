student = {
    firstName: 'Aditya',
    lastName: 'Singh',
    studentAge: 20,
    enrollmentNo: 'A2305218449',
    studentInfo: function(){
        return this.firstName + " " + this.lastName + "\n" + this.enrollmentNo + "\n" + this.studentAge;
    }
};
console.log('The student Inforation:');
console.log(student.studentInfo());
