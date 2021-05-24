// -Wesley Muehlhausen
// -Weight Lifting One Rep Max Calculator
// -Javascript implementation for calculating values
// -This program inputs personal info such as weight, 
//  age, weight and reps of a lift to determine your 
//  theoretical one rep max

//DATABASE 
    //var xlsx = require("xlsx");
    //var data = xlsx.readFile("lifting_standards_data.xlsx");
    //var wsheet = data.Sheets["standards"];
    //var darray = xlsx.utils.sheet_to_json(wsheet);
    //console.log(darray);//print all contents in the database
    //var out = darray[3].BW;
    //console.log(out); //yields 140 from the data sheet
    //console.log(out.toString());
    //var x = out + 3
    //console.log(x);
    //document.getElementById("strlvl").innerHTML = out;


//import lifting data from database
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
}

//calculation of 1rm given reps and weight
function epleyFormula(r, w){
    if(r == 1)
        return w;
    else
        return w * (1 + ( r / 30 ));
}
