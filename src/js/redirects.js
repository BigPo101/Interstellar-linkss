const keys = [
   { rank: "Owner", name: "Ethan", key: "SWN5MTM=" },
   { rank: "Staff", name: "Matthew", key: "TWF0aDAx" },
   { rank: "Member", name: "Test", key: "TWVtYmVy" },
   { rank: "Staff", name: "Caleb", key: "Q2Fsbw==" },
   { rank: "Staff", name: "BJ", key: "QmVqb3Rh" },
];
const inactivekeys = [
   { rank: "Premium", name: "Inactive", key: "SW5hY3RpdmU=" },
];
const services = [
       { serviceNum: "1", hash: "aHR0cHM6Ly96ODNuM3ctODA4MC5jc2IuYXBwLw==", rank: "staff"},
       { serviceNum: "2", hash: "aHR0cHM6Ly93Nmo0a2otODA4MC5jc2IuYXBwLw==", rank : "public"},
       { serviceNum: "3", hash: "aHR0cHM6Ly9wZjY1bWMtODA4MC5jc2IuYXBwLw==", rank : "premium"},
       { serviceNum: "4", hash: "aHR0cHM6Ly80cnk2NXYtODA4MC5jc2IuYXBwLw==", rank : "member"},
       { serviceNum: "5", hash: "aHR0cHM6Ly9ncTR4cXEtODA4MC5jc2IuYXBwLw==", rank : "staff"},
       { serviceNum: "6", hash: "aHR0cHM6Ly8zam55bmstODA4MC5jc2IuYXBwLwo=", rank : "public"},
       { serviceNum: "7", hash: "aHR0cHM6Ly9xNHN5am4tODA4MC5jc2IuYXBwLw==", rank : "premium"},
       { serviceNum: "8", hash: "aHR0cHM6Ly9saHB4Y2wtODA4MC5jc2IuYXBwLw==", rank : "member"},
       { serviceNum: "9", hash: "aHR0cHM6Ly93dDM1emgtODA4MC5jc2IuYXBwLw==", rank : "staff"},
       { serviceNum: "10", hash: "aHR0cHM6Ly92MnQ3ZzMtODA4MC5jc2IuYXBwLw==", rank : "public"},
       { serviceNum: "11", hash: "aHR0cHM6Ly90OTNkcjQtODA4MC5jc2IuYXBwLw==", rank : "premium"},
       { serviceNum: "12", hash: "aHR0cHM6Ly80bnF5eGstODA4MC5jc2IuYXBwLw==", rank : "member"},
       { serviceNum: "13", hash: "", rank : "staff"},
       { serviceNum: "14", hash: "", rank : "public"},
       { serviceNum: "15", hash: "", rank : "premium"},
       { serviceNum: "16", hash: "", rank : "member"},
       { serviceNum: "17", hash: "", rank : "staff"},
       { serviceNum: "18", hash: "", rank : "public"},
       { serviceNum: "19", hash: "", rank : "premium"},
       { serviceNum: "20", hash: "", rank : "member"},
       { serviceNum: "21", hash: "", rank : "staff"},
       { serviceNum: "22", hash: "", rank : "public"},
       { serviceNum: "23", hash: "", rank : "premium"},
       { serviceNum: "24", hash: "", rank : "member"},
       { serviceNum: "25", hash: "", rank : "staff"},
       { serviceNum: "26", hash: "", rank : "public"},
       { serviceNum: "27", hash: "", rank : "premium"},
       { serviceNum: "28", hash: "", rank : "member"},
       { serviceNum: "29", hash: "", rank : "staff"},
       { serviceNum: "30", hash: "", rank : "public"},
       { serviceNum: "31", hash: "", rank : "premium"},
       { serviceNum: "32", hash: "", rank : "member"},
       { serviceNum: "33", hash: "", rank : "staff"},
       { serviceNum: "34", hash: "", rank : "public"},
       { serviceNum: "35", hash: "", rank : "premium"},
       { serviceNum: "36", hash: "", rank : "member"},
       { serviceNum: "37", hash: "", rank : "staff"},
       { serviceNum: "38", hash: "", rank : "public"},
       { serviceNum: "39", hash: "", rank : "premium"}
];

const pages = [
   { linkNum: "0.1", page: "publicLinks.html"},
   { linkNum: "0.2", page: "premiumLinks.html"},
   { linkNum: "0.3", page: "memberLinks.html"},
   { linkNum: "0.4", page: "staffLinks.html"},
];

var b = document.getElementById("premiumdecKey");
var c = document.getElementById("memberdecKey");
var d = document.getElementById("staffdecKey");


function redirect(num) {
    pages.forEach((page) => {
       if (num == page.linkNum) {
            window.location.href = page.page;
        };
    });
    services.forEach((service) => {
        if (num == service.serviceNum) {
            if (service.rank == "public") {
               localStorage.setItem("hash",service.hash);
               window.location.href = "load.html";
            };
            if (service.rank == "premium") {
               localStorage.setItem("hash",service.hash);
               window.location.href = "load.html";
            };
            if (service.rank == "member") {
               localStorage.setItem("hash",service.hash);
               window.location.href = "load.html";
            };
            if (service.rank == "staff") {
               localStorage.setItem("hash",service.hash);
               window.location.href = "load.html";
            };
        };
    });
};
