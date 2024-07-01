//1//My resume data in JSON format

let myResume={
    "basics": {
      "name": "KARTHIKEYAN.K",
      "email": "karthikidd03@gamil.com",
      "phone": 6383665646,
      "degree": "B.Tech",
      "department": "Chemical Engineering"
    },
      "location": {
        "address": "262,South Street,Ambalavarkattalai,Ariyalur",
        "postalCode": 621701,
        "city": "Ariyalur",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": {
          "github":"https://github.com/Karthikeyan1028"
        },
        "education": {
        "institution": "St.Peter's College of Engineering and Technology",
        "department": "Chemical Engineering",
        "studyType": "fulltime",
        "batch start year": 2015,
        "batch end year": 2019,
        "gpa": 6.2,
      },
    "skills":{
        "name": "javascript",
        "level": "beginner",
      },

    "languages": 
      {
        "language": "Tamil,English",
      },
    "interests":
      {
        "name": "Cricket,Football",
      }
}

  console.log(myResume);


  //2//for the above JSON iterations loops as follows
  //for loop
  for(let i = 0; i < myResume.length; i++){
    let obj = myResume[i];
    console.log(obj.basics.name);
    console.log(obj.basics.phone);
    console.log(obj.location.city);
}
// The Output is 
//KARTHIKEYAN.K
//6383665646
//Ariyalur


//for Each loop
myResume.forEach(function(obj) { console.log(obj.location.address); });
// The Output is 262,South Street,Ambalavarkattalai,Ariyalur


//for in loop
for (var key in myResume) {
    if (myResume.hasOwnProperty(key)) {
      console.log(myResume[key].education.department);
    }
}
// The Output is Chemical Engineering

//for Of loop
let text = "";
for (let x of myResume[key].basics.email) {
 text += x; 
}
 console.log(text);
 //The Output is karthikidd03@gamil.com