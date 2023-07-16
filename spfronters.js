var fronters;
var frontMembers = [];
var imbed;
var token = "G46zPi4dDLgthAPEIAc6K/K+Ar9Jo/tSCAnLbchAschbplhg3X9s/OkasaxEMPeQ";


// api request that gets uid and menber id of all current fronters, ran first
function getFronters(){
    var frontCheck = new XMLHttpRequest;

    frontCheck.addEventListener("load", useFronters);
    frontCheck.open("GET", "https://api.apparyllis.com:8443/v1/fronters/");
    frontCheck.setRequestHeader("Authorization", token);
    frontCheck.send();

}

//stores the data from the first api request and then initates a fronters to members
function useFronters(){
    console.log(this)
    fronters = JSON.parse(this.responseText);
    console.log(fronters)
    //console.log(fronters[0].content.member)

    //getMembersData(fronters[0].content.uid, fronters[0].content.member)
    frontersToMembers();
}

// runs get member data for each fronter
function frontersToMembers() {
    for (let i = 0; i < Object.keys(fronters).length; i++) {
        getMembersData(fronters[i].content.uid, fronters[i].content.member)
    }
    // this code is bullshit 
}

// an api request for a spesific system member
function getMembersData(uid, member){
    var getMembers = new XMLHttpRequest;
    getMembers.addEventListener("load", storeFronters);
    getMembers.open("GET", ("https://api.apparyllis.com:8443/v1/member/" + uid + "/" + member));
    //getMembers.open("GET", ("https://api.apparyllis.com:8443/v1/member/"));
    getMembers.setRequestHeader("Authorization", token);

    getMembers.send();

}

//puts all the newly gathered fronter data(from getMembersData) into an object
function storeFronters(){
    console.log(this)
    //frontMembers = JSON.parse(this.responseText);
    frontMembers.push(JSON.parse(this.responseText));
    makeFronterElements(document.getElementById("SPF"));
}
function makeFronterElements(imbed) {
    for (let i = 0; i < Object.keys(fronters).length; i++) {

        imbed.innerHTML += '<div class="mcont" "&' + frontMembers[i].content.name + '"><img class="favi" src="' + frontMembers[i].content.avatarUrl + '"><div class="fname">' + frontMembers[i].content.name + '</div><div class=fpro>' + frontMembers[i].content.pronouns + '</div></div>'
        console.log(i)
        console.log(imbed.innerHTML)
    }
    console.log("makingem")
}

getFronters();


console.log(Object.keys(frontMembers).length)

