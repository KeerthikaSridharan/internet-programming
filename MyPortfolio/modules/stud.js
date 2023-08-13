 const names = {
    "2231MCA001": "Kumar",
    "2231MCA002": "Raja",
    "2231MCA003": "Suresh",
    "2231MCA004": "Rajesh",
    "2231MCA005": "Manoj"
};

function getname()
{
    const regnum = document.getElementById("regnumInput").value;
    console.log('Reg No: ${regnum}')
    const name = names[regnum];
    console.log('NAME: ${name}')
    const resultdiv = document.getElementById("displayname");
    if(name){
        resultdiv.textContent("displayname") = 'Name : ${name}';
    }
    else
    {
        resultdiv.textContent("displayname") = 'Please select the number';
    }
} 