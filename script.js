
let upBtn = document.getElementById('upload-btn');
const log = [];
function obj(fn,ln,db,ag,emai,pno,edu,br,dpt,sk){
    let logentry = {
        fname:fn,
        lname:ln,
        dob:db,
        age:ag,
        email:emai,
        pno:pno,
        education:edu,
        branch:br,
        dept:dpt,
        skill:sk
    
    };
    log.push(logentry);
}
function show(){ 
    const fName = document.getElementById("fname").value;
    const lName = document.getElementById("lname").value;
    const dob = document.getElementById("dob").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const pNumber = document.getElementById("phone-no").value;
    const education = document.getElementById("graduate").value;
    const branch_ug = document.getElementById("branch-ug").value;
    const branch_pg = document.getElementById("branch-pg").value;
    const depart = document.getElementById("dept").value;
    const skill = document.getElementById("skills").value
    const upload = document.getElementById("uploaded").value;
    
    // if(education === "ug"){
    //     getElementById('branch-ug')
    //     getElementById('branch_pg')
    // }

    obj(fName,lName,dob,age,email,pNumber,education,branch,depart,skills);
    console.log(log);
}

upBtn.addEventListener('click',show);
