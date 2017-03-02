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


// var name = "AlbERt EINstEiN";

// function nameChanger(oldName) {
//     var finalName = oldName;
//     // Your code goes here!

//     finalName = oldName.toLowerCase();
//     arrOfName = finalName.split(" ");
//     arrOfName[1] = arrOfName[1].toUpperCase();
//     arrOfName[0] = arrOfName[0].slice(0, 1).toUpperCase() + arrOfName[0].slice(1).toLowerCase();
//     finalName = arrOfName.join(" ");
//     // Don't delete this line!
//     return finalName;
// };

// Did your code work? The line below will tell you!
// console.log(nameChanger(name));


//DOM
// document.getElementsByClassName("text-atom")[0]

// var weirdObject = {
//     "property": "Time for an astronomy lesson!",
//     "property1": "Cameron's minor in college was astronomy",
//     "property-2": "The 4 Galilean largest moons of Jupiter are:",
//     "property 3": "Io, Ganymede, Callisto, Europa",
//     "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
//     " property": "The Sun contains 99.87% of the mass of the entire solar system",
//     "property()": "There are 5 dwarf planets in our solar system:",
//     "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
//     "8property": "Mars has two tiny moons: Phobos and Deimos"
// };


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


// Quiz: Relationships
// function getRelationship(x, y) {
//     //Relationship compare
//     var rtnStr = "Can't compare relationships because [this value] and [that value] [is]/[are] not [a] number[s]";
//     var rtnStrVal = ["[this value]", "[that value]"];

//     if (arguments.length < 2) {
//         arguments[1] = "undefined";
//     }

//     // We know we have two inputs
//     var err = 0;
//     for (ii in arguments) {
//         if (isNaN(arguments[ii])) {
//             err++;
//             rtnStr = rtnStr.replace(rtnStrVal[ii], arguments[ii]);
//         }
//     }

//     switch (err) {
//         case 1:
//             rtnStr = rtnStr.replace(rtnStrVal[0], "");
//             rtnStr = rtnStr.replace(rtnStrVal[1], "");
//             rtnStr = rtnStr.replace(" and ", "");
//             rtnStr = rtnStr.replace("[is]/[are] not [a] number[s]", "is not a number");
//             break;
//         default:
//         case 2:
//             rtnStr = rtnStr.replace("[is]/[are] not [a] number[s]", "are not numbers");
//             break;
//     }

//     if (err)
//         return rtnStr;


//     // Regular comparison - the easy part
//     if (x < y) rtnStr = "<";
//     else if (x > y) rtnStr = ">";
//     else rtnStr = "=";

//     return rtnStr;

//     // Your code goes here!
// };

// // Try logging these functions to test your code!
// console.log(getRelationship(1, 4));
// console.log(getRelationship(1, 1));
// console.log(getRelationship("that", 2) + " = Can't compare relationships because that is not a number");
// console.log(getRelationship("this", " something else"));
// console.log(getRelationship(3));
// console.log(getRelationship("hi") + " = Can't compare relationships because hi and undefined are not numbers");
// console.log(getRelationship(NaN));
// console.log(getRelationship(NaN, undefined));


// Quiz Astronauts Array
// var moonWalkers = [
//     "Neil Armstrong",
//     "Buzz Aldrin",
//     "Pete Conrad",
//     "Alan Bean",
//     "Alan Shepard",
//     "Edgar Mitchell",
//     "David Scott",
//     "James Irwin",
//     "John Young",
//     "Charles Duke",
//     "Eugene Cernan",
//     "Harrison Schmitt"
// ];

// function alphabetizer(names) {
//     var new_names = [];
//     for (ii in names) {
//         arrName = names[ii].split(" ");
//         new_names.push(arrName[1] + ", " + arrName[0]);
//     }
//     return new_names.sort();
// }

// // Try logging your results to test your code!
// console.log(alphabetizer(moonWalkers));



// Quiz: PageSpeed insights

// Iterate through the localizedRuleNames in ruleResults and 
// return an array of their strings.
function ruleList(results) {
    var strArr = [];
    for (ii in results.formattedResults.ruleResults)
        strArr.push(results.formattedResults.ruleResults[ii].localizedRuleName);
    return strArr;
}

// Iterate through pageStats in the psiResults object and 
// return the total number of bytes to load the website.
function totalBytes(results) {
    var totalBytes = 0;
    var resPageStat = results.pageStats;
    for (key in resPageStat) {
        if (key.indexOf("Bytes") != -1) {
            totalBytes += Number(resPageStat[key]);
        }
    }
    return totalBytes;
}

// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!

psinsights = {
    "kind": "pagespeedonline#result",
    "id": "/speed/pagespeed",
    "responseCode": 200,
    "title": "PageSpeed Home",
    "score": 90,
    "pageStats": {
        "numberResources": 22,
        "numberHosts": 7,
        "totalRequestBytes": "2761",
        "numberStaticResources": 16,
        "htmlResponseBytes": "91981",
        "cssResponseBytes": "37728",
        "imageResponseBytes": "13909",
        "javascriptResponseBytes": "247214",
        "otherResponseBytes": "8804",
        "numberJsResources": 6,
        "numberCssResources": 2
    },
    "formattedResults": {
        "locale": "en_US",
        "ruleResults": {
            "AvoidBadRequests": {
                "localizedRuleName": "Avoid bad requests",
                "ruleImpact": 0.0
            },
            "MinifyJavaScript": {
                "localizedRuleName": "Minify JavaScript",
                "ruleImpact": 0.1417,
                "urlBlocks": [{
                    "header": {
                        "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
                        "args": [{
                                "type": "BYTES",
                                "value": "1.3KiB"
                            },
                            {
                                "type": "INT_LITERAL",
                                "value": "0"
                            }
                        ]
                    },
                    "urls": [{
                            "result": {
                                "format": "Minifying $1 could save $2 ($3% reduction).",
                                "args": [{
                                        "type": "URL",
                                        "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
                                    },
                                    {
                                        "type": "BYTES",
                                        "value": "717B"
                                    },
                                    {
                                        "type": "INT_LITERAL",
                                        "value": "1"
                                    }
                                ]
                            }
                        },
                        {
                            "result": {
                                "format": "Minifying $1 could save $2 ($3% reduction).",
                                "args": [{
                                        "type": "URL",
                                        "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
                                    },
                                    {
                                        "type": "BYTES",
                                        "value": "258B"
                                    },
                                    {
                                        "type": "INT_LITERAL",
                                        "value": "0"
                                    }
                                ]
                            }
                        }
                    ]
                }]
            },
            "SpriteImages": {
                "localizedRuleName": "Combine images into CSS sprites",
                "ruleImpact": 0.0
            }
        }
    },
    "version": {
        "major": 1,
        "minor": 11
    }
};

// Try logging the outputs below to test your code!
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));