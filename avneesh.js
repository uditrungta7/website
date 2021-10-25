student = {
    firstName: 'Avneesh',
    lastName: 'SinghYadav',
    studentAge: 23,
    enrollmentNo: 'A2305218462',
    studentInfo: function(){
        return this.firstName + " " + this.lastName + "\n" + this.enrollmentNo + "\n" + this.studentAge;
    }
};
console.log('The student Inforation:');
console.log(student.studentInfo());
