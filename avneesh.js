student = {
    firstName: 'Aditya',
    lastName: 'Rungta',
    studentAge: 20,
    enrollmentNo: 'A2305218409',
    studentInfo: function(){
        return this.firstName + " " + this.lastName + "\n" + this.enrollmentNo + "\n" + this.studentAge;
    }
};
console.log('The student Inforation:');
console.log(student.studentInfo());
