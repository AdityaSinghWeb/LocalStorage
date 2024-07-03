document.querySelector("form").addEventListener("submit", result);
let arr = JSON.parse(localStorage.getItem("data")) || [];
table(arr);

function result(event) {
  event.preventDefault();
  let obj = {
    ques: document.querySelector("#ques").value,
    link: document.querySelector("#link").value,
    diff: document.querySelector("#diff").value,
  };
  arr.push(obj);
  localStorage.setItem("data", JSON.stringify(arr));
  table(arr);
}

function table(arr) {
  document.querySelector("tbody").innerHTML = "";
  arr.forEach(function (el) {
    let tr = document.createElement("tr");
    document.querySelector("tbody").append(tr);
    let td1 = document.createElement("td");
    td1.innerText = el.ques;
    let td2 = document.createElement("td");
    td2.innerText = el.link;
    let td3 = document.createElement("td");
    td3.innerText = el.diff;
    let td4 = document.createElement("td");
    if (el.diff == "Easy") {
      td4.innerText = "NO";
    } else if (el.diff == "--") {
      td4.innerText = "";
    } else {
      td4.innerText = "YES";
    }
    tr.append(td1, td2, td3, td4);
  });
}