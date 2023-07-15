
var fronters;
var frontMembers;
var fronterParsed;
var token = "G46zPi4dDLgthAPEIAc6K/K+Ar9Jo/tSCAnLbchAschbplhg3X9s/OkasaxEMPeQ";


function getFronters(){
    var frontCheck = new XMLHttpRequest;

    frontCheck.addEventListener("load", storeFronters);
    frontCheck.open("GET", "https://api.apparyllis.com:8443/v1/fronters/");
    frontCheck.setRequestHeader("Authorization", token);
    frontCheck.send();

}


function storeFronters(){
    console.log(this)
    fronters = JSON.parse(this.responseText);
    console.log(fronters)
    console.log(fronters[0].content.member)

    //getMembersData(fronters[0].content.uid, fronters[0].content.member)
}


function getMembersData(uid, member){
    var getMembers = new XMLHttpRequest;
    getMembers.addEventListener("load", useFronters);
    getMembers.open("GET", ("https://api.apparyllis.com:8443/v1/member/" + uid + "/" + member));
    //getMembers.open("GET", ("https://api.apparyllis.com:8443/v1/member/"));
    getMembers.setRequestHeader("Authorization", token);

    getMembers.send();

}


function useFronters(){
    console.log(this)
    frontMembers = JSON.parse(this.responseText);
}

getFronters();

for (let i in fronters) {
    getMembersData(fronters[i].content.uid, fronters[i].content.member)
}