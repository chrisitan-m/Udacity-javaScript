// var speed_of_light = 299792458;
// $("#main").append(["Christian"]);

// $("#main").append(["How fast is light in centimeters/nanosecond? \r"]);
// $("#main").append([(speed_of_light*100/1e9)]);


// var firstname = "Christian";
// var age = 35;
// var awesomeThoughts = "I am " + firstname + " and I am AWESOME";
// var email = "morsingnet@gmail.com";


// console.log(awesomeThoughts);
// funThoughts = awesomeThoughts.replace("AWESOME","FUN");
// console.log(funThoughts);


var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!

    finalName = oldName.toLowerCase();
    arrOfName = finalName.split(" ");
    arrOfName[1] = arrOfName[1].toUpperCase();
    arrOfName[0] = arrOfName[0].slice(0, 1).toUpperCase() + arrOfName[0].slice(1).toLowerCase();
    finalName = arrOfName.join(" ");
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
// console.log(nameChanger(name));


//DOM
// document.getElementsByClassName("text-atom")[0]

var weirdObject = {
    "property": "Time for an astronomy lesson!",
    "property1": "Cameron's minor in college was astronomy",
    "property-2": "The 4 Galilean largest moons of Jupiter are:",
    "property 3": "Io, Ganymede, Callisto, Europa",
    "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
    " property": "The Sun contains 99.87% of the mass of the entire solar system",
    "property()": "There are 5 dwarf planets in our solar system:",
    "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
    "8property": "Mars has two tiny moons: Phobos and Deimos"
};


// for (var o in weirdObject)
// console.log(weirdObject[o]);


//Return Statements

// var work = {
//   "jobs": [
//     {
//       "employer": "Udacity",
//       "title": "Course Developer",
//       "location": "Mountain View, CA",
//       "dates": "Feb 2014 - Current",
//       "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//     },
//     {
//       "employer": "LearnBIG",
//       "title": "Software Engineer",
//       "location": "Seattle, WA",
//       "dates": "May 2013 - Jan 2014",
//       "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//     },
//     {
//       "employer": "LEAD Academy Charter High School",
//       "title": "Science Teacher",
//       "location": "Nashville, TN",
//       "dates": "Jul 2012 - May 2013",
//       "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//     },
//     {
//       "employer": "Stratford High School",
//       "title": "Science Teacher",
//       "location": "Nashville, TN",
//       "dates": "Jun 2009 - Jun 2012",
//       "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//     }
//   ]
// };

// // Your code goes here! Let me help you get started

// function locationizer(work_obj) {
//     var work_arr = [];
//     for (ii in work_obj.jobs) {
//         work_arr.push(work_obj.jobs[ii].location);
//     }
//     return work_arr;
// }

// Did locationizer() work? This line will tell you!
// console.log(locationizer(work));






function getRelationship(x, y) {
    //Relationship compare
    var rtnStrErr = "Can't compare relationships because [this value] and [that value] [is]/[are] not [a] number[s].";
    var rtnStr = "";
    var rtnStrVal = ["[this value]", "[that value]"];

    if (arguments.length < 2) {
        rtnStr = rtnStrErr.replace(rtnStrVal[0], x);
        rtnStr = rtnStr.replace("[that value] [is]/[are] not [a] number[s]", "undefined are not numbers");
        return rtnStr;
    }
    var err = 0;
    rtnStr = rtnStrErr;
    // console.log(arguments[0])
    for (ii in arguments) {
        // console.log(isNaN(arguments[ii]))
        if (isNaN(arguments[ii])) {
            err++;
            rtnStr = rtnStr.replace(rtnStrVal[ii], arguments[ii]);
            // console.log(arguments[ii])
        }
    }

    switch (err) {
        case 1:
            rtnStr = rtnStr.replace("[is]/[are] not [a] number[s]", "is not a number");
            rtnStr = rtnStr.replace(rtnStrVal[0], "");
            rtnStr = rtnStr.replace(rtnStrVal[1], "");
            rtnStr = rtnStr.replace(" and ", "");
            break;
        default:
        case 2:
            rtnStr = rtnStr.replace("[is]/[are] not [a] number[s]", "are not numbers");
            break;
    }

    if (err)
        return rtnStr;


    if (x < y) rtnStr = "<";
    else if (x > y) rtnStr = ">";
    else rtnStr = "=";

    return rtnStr;

    // Your code goes here!
};

// Try logging these functions to test your code!
console.log(getRelationship(1, 4));
console.log(getRelationship(1, 1));
console.log(getRelationship("that", 2));
console.log(getRelationship("this", " something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));