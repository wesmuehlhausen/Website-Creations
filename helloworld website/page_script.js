// -Wesley Muehlhausen
// -Weight Lifting One Rep Max Calculator
// -Javascript implementation for calculating values
// -This program inputs personal info such as weight, 
//  age, weight and reps of a lift to determine your 
//  theoretical one rep max

//import lifting data from database
var xlsx = require("xlsx");
var data = xlsx.readFile("lifting_standards_data.xlsx");
var wsheet = data.Sheets["standards"];
var darray = xlsx.utils.sheet_to_json(wsheet);
//console.log(darray);//print all contents in the database
var out = darray[3].BW;
console.log(out); //yields 140 from the data sheet
console.log(out.toString());
var x = out + 3
var tmp = JSON.stringify(darray[3]);

function calculate() {
    
    
    var lft = parseInt(document.getElementById("lft").value);
    var rps = parseInt(document.getElementById("rps").value);
    var wgt = parseInt(document.getElementById("wgt").value);

    //calculate 1rm value
    if(Number.isInteger(rps) && Number.isInteger(lft)){
        var max = epleyFormula(rps,lft);
        document.getElementById("l6").value = Math.round(max);//to set the final value
    }
    else{//if valid numbers not set
        document.getElementById("l6").value = "Error";//to set the final value
    }
    
    document.getElementById("l6").value = tmp;
    document.getElementById("strlvl").innerHTML = tmp;
    
    

    /*
    if(wgt <= 310 || wgt >= 110){
        //find where in the range it is and report based on that
        var adj_wgt = (Math.round(wgt / 10) * 10);
        var index = ((adj_wgt / 10) - 10);//find the valid index for given weight
        document.getElementById("strlvl").innerHTML = darray[3].BW;// FIX Get value from darray to work
    }
    else{
        document.getElementById("wgt").value = "Enter weight from 110-310Lbs";
    }
    */
    
    
    //document.getElementById("wgt").value = (Math.round(wgt / 10) * 10);//to set the final value
    //document.getElementById("strlvl").innerHTML = (Math.round(max / 10) * 10) + "%";//to set the final value
   
    //console.log(Math.round(wgt / 10) * 10);
}

function epleyFormula(r, w){
    return w * (1 + ( r / 30 ));
}


//document.getElementById("l5").innerHTML = ("haha");