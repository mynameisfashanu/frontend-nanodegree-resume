/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = "Fashanu";
var role = "Web developer";


var formattedRole = HTMLheaderRole.replace("%data%",role);
var formattedName = HTMLheaderName.replace("%data%",name);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var work = {
  "jobs" : [
    {
      "employer" : "App Your Event",
      "title" : "Web and mobile application developer",
      "location" : "Johanessburg, South Africa",
      "dates" : "",
      "description" : "Developed, mobile and web technologies for event CMS platform"
    },
    {
      "employer" : "SensePost",
      "title" : "Junior Penetration tester",
      "location" : "Johanessburg, South Africa",
      "dates" : "",
      "description" : "Network security, Web and mobile security vulnerability assessments"
    },
    {
      "employer" : "MWR labs",
      "title" : "Security researcher",
      "location" : "Johanessburg, South Africa",
      "dates" : "",
      "description" : "worked on cryptography and binary exploitation research"
    }
  ]
}

var projects = {
  "projects" : [
    {
      "title" : "Anime recommendation engine",
      "date" : "2016-04-03",
      "description" : "I built an Anime and manga recommendation engine using machine learning",
      "images" : ["image1","image2","image3"]
    },
    {
      "title" : "Cancer detection deep learning",
      "date" : "2016-04-03",
      "description" : "I built a tool to detect cancer using neural networks",
      "images" : ["image1","image2","image3"]
    },
    {
      "title" : "Linux syscall Fuzzer",
      "date" : "2016-04-03",
      "description" : "Built a fuzzer that using symbolic code execution to detect bugs in the linux kernel",
      "images" : ["image1","image2","image3"]
    },
    {
      "title" : "Medi-Cloud",
      "date" : "2016-04-03",
      "description" : "A cloud based medical management system for doctors, hospitals and patients",
      "images" : ["image1","image2","image3"]
    }
  ]
}

var bio = {
  "name" : "",
  "role" : "",
  "welcomeMessage" : "",
  "contacts" : {
    "email" : "fashanu13@gmail.com",
    "github" : "@mynameisfashanu",
    "twitter" : "@mynameisfashanu",
    "mobile" : "081 486 4637",
    "location" : "Johanessburg, South Africa"
  },
  "skills" : [
    "Web Development",
    "Mobile Development",
    "Security research",
    "Machine learning"
  ]
}

var education = {
  "schools" : [
    {
      "name" : "Unisa",
      "location" : "Pretoria, South Africa",
      "degree" : "Bsc Computer science & Applied maths",
      "majors" : ["Computer science", "Applied maths"],
      "dates" : "2015-2018",
      "url" : "www.unisa.ac.za"
    },
    {
      "name" : "MIT",
      "location" : "Pretoria, South Africa",
      "degree" : "Physics & Electrical Engineering",
      "majors" : ["Physics", "EE"],
      "dates" : "2015-2018",
      "url" : "www.mit.ac.za"
    },
    {
      "name" : "Standford",
      "location" : "Pretoria, South Africa",
      "degree" : "Artifical Intelligence & Neuroscience",
      "majors" : ["Artifical Intelligence", "Neuroscience"],
      "dates" : "2015-2018",
      "url" : "www.standford.ac.za"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Machine learning",
      "school" : "Standford",
      "dates" : "2016",
      "url" : "www.coursera.com"
    },
    {
      "title" : "Software Engineering",
      "school" : "san diago",
      "dates" : "2016",
      "url" : "www.coursera.com"
    },
    {
      "title" : "Computer Security",
      "school" : "university of new york",
      "dates" : "2016",
      "url" : "www.nyuploy.com"
    }
  ]
}

if(bio["skills"].length > 0)
{
  $("#header").append(HTMLskillsStart);

  for(var i = 0; i < bio.skills.length; i++)
  {
    var formattedSkill = HTMLskills.replace("%data%",bio["skills"][i]);
    $("#skills").append(formattedSkill);
  }
}
