//resumeBuilder.js

var skills = ["remote management", "javaScript"];
var welcomeStr = "Manager with  SDLC and remote team skills."

// Biografy Object
var bio = {
    "name": "Christian Morsing",
    "role": "Director of Engineering",
    "contacts": {
        "mobile": "408-905-7161",
        "email": "morsingnet@gmail.com",
        "github": "christian-m",
        "location": "Nashville, TN"
    },

    "pictureURL": "C:/Users/cmorsing/Pictures/CK7/8-6-2016/DSC00860.JPG",
    "welcomeMsg": welcomeStr,
    "skills": skills,
}

bio.display = function() {
    // Append bio
    if (bio) {

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        var formattedvar = HTMLbioPic.replace("%data%", bio.pictureURL);
        $("#header").append(formattedvar);

        formattedvar = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedvar);

        formattedvar = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedvar);

        formattedvar = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedvar);

        formattedvar = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedvar);

        formattedvar = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
        $("#header").append(formattedvar);
    }

    // Append skills
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (ii in bio.skills) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[ii]));
        }
    }
}

// Work Object
var jobs = { "title": "", "employer": "", "dates": "", "location": "", "description": "" };
var work = { jobs: [{}, {}] };

work.jobs[0].title = bio.role;
work.jobs[0].employer = "LitePoint Corp";
work.jobs[0].dates = "2006 - Current";
work.jobs[0].location = "Sunnyvale, CA";
work.jobs[0].description = "Manager for Calibration, Firmware and FPGA groups.";

work.jobs[1].title = "Advisor";
work.jobs[1].employer = "EC";
work.jobs[1].dates = "2017 - Current";
work.jobs[1].location = "Nashville, TN";
work.jobs[1].description = "Advisor for startups";

work.display = function() {
    //Append work
    var formattedStr = "";
    for (ii in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[ii].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[ii].title);
        formattedStr = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedStr);

        formattedStr = HTMLworkDates.replace("%data%", work.jobs[ii].dates);
        $(".work-entry:last").append(formattedStr);

        formattedStr = HTMLworkLocation.replace("%data%", work.jobs[ii].location);
        $(".work-entry:last").append(formattedStr);

        formattedStr = HTMLworkDescription.replace("%data%", work.jobs[ii].description);
        $(".work-entry:last").append(formattedStr);

    }
}




// projets Object
var projects = {};
projects.title = "2nd Gen Wireless Tester";
projects.employer = "LitePoint Corp";
projects.dates = 1;
projects.location = "Sunnyvale";
projects.description = "Managed the 2nd Gen Wireless Tester development for FW,CAL and FPGA"

projects.display = function() {
    var formattedvar = "";
    $("#projects").append(HTMLprojectStart);

    formattedvar = HTMLprojectTitle.replace("%data%", projects.title);
    $(".project-entry:last").append(formattedvar);

    formattedvar = HTMLworkEmployer.replace("%data%", projects.employer);
    $(".project-entry:last").append(formattedvar);

    formattedvar = HTMLworkDates.replace("%data%", projects.dates);
    $(".project-entry:last").append(formattedvar);

    formattedvar = HTMLworkLocation.replace("%data%", projects.location);
    $(".project-entry:last").append(formattedvar);

    formattedvar = HTMLworkDescription.replace("%data%", projects.description);
    $(".project-entry:last").append(formattedvar);
}


// Education Object
var education = {
    "schools": [{
        "name": "Univeristy of Santa Cruz",
        "location": "Santa Cruz, CA",
        "degree": "Certificate",
        "majors": ["PPM"],
        "dates": 2011,
        "url": "https://www.ucsc-extension.edu/"
    }, {
        "name": "Technical Univeristy of Denmark",
        "location": "Kgs Lyngby, Denmark",
        "degree": "Master",
        "majors": ["EE"],
        "dates": 2006,
        "url": "http://www.dtu.dk/"
    }],
    "onlineCourses": [{
        "title": "JavaScript Syntax",
        "school": "Udacity",
        "dates": 2017,
        "url": "http://www.udacity.com/courses/ud804/"
    }]
}

education.display = function() {
    var formattedvar = "";

    for (ii in education.schools) {
        $("#education").append(HTMLschoolStart);

        formattedvar = HTMLschoolName.replace("%data%", education.schools[ii].name);
        $(".education-entry:last").append(formattedvar);

        formattedvar = HTMLschoolDegree.replace("%data%", education.schools[ii].degree);
        $(".education-entry:last").append(formattedvar);

        formattedvar = HTMLschoolDates.replace("%data%", education.schools[ii].dates);
        $(".education-entry:last").append(formattedvar);

        formattedvar = HTMLschoolLocation.replace("%data%", education.schools[ii].location);
        $(".education-entry:last").append(formattedvar);

        formattedvar = HTMLschoolMajor.replace("%data%", education.schools[ii].majors);
        $(".education-entry:last").append(formattedvar);
    }

    for (ii in education.onlineCourses) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);

        formattedvar = HTMLonlineTitle.replace("%data%", education.onlineCourses[ii].title);
        $(".education-entry:last").append(formattedvar);

        formattedvar = HTMLonlineSchool.replace("%data%", education.onlineCourses[ii].school);
        $(".education-entry:last").append(formattedvar);

        formattedvar = HTMLonlineDates.replace("%data%", education.onlineCourses[ii].dates);
        $(".education-entry:last").append(formattedvar);

        formattedvar = HTMLonlineURL.replace("%data%", education.onlineCourses[ii].url);
        $(".education-entry:last").append(formattedvar);
    }

}

//Display Resume
projects.display();
work.display();
bio.display();
education.display();

$(document).click(function(loc) {
    // Code goes here
    var x = loc.pageX
    var y = loc.pageY;
    logClicks(x, y);
});



//internationalize
$("#main").append(internationalizeButton);

function inName(strFullName) {
    var strArr = strFullName.trim().split(" ");
    strArr[1] = strArr[1].toUpperCase(); // lastname
    strArr[0] = strArr[0].slice(0, 1).toUpperCase() + strArr[0].slice(1).toLowerCase();
    return strArr.join(" ");
}


//Add Map
$("#mapDiv").append(googleMap);