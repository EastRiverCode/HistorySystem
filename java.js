
function SearchingFunc(){
  var shuttleType = document.getElementsByClassName("menu")[0];
  var shuttleNumber = document.getElementsByClassName("number")[0];
  var shuttle = shuttleType.value + "-" + shuttleNumber.value;
  var shutDisp = document.getElementById("shuttleDisp");

  alert(shuttle);
  shutDisp.innerText = shuttle;
}

function maxLengthCheck(self){
  if (self.value.length > self.maxLength){
    //object.maxLength : 매게변수 오브젝트의 maxlength 속성 값입니다.
    self.value = self.value.slice(0, self.maxLength);
  }
}

jQuery.get('history.txt', function(data) {
    document.getElementById("historyWindow").innerText = data;
});



// function historyLoad(){
//     var input = document.createElement("input");
//     input.type = "file";
//     input.accept = "text/plain"; // 확장자가 xxx, yyy 일때, ".xxx, .yyy"
//     input.onchange = function (event) {
//         processFile(event.target.files[0]);
//     };
//     input.click();
// }
// function processFile(file) {
//     var reader = new FileReader();
//     reader.onload = function () {
//         historyWindow.innerText = reader.result;
//     };
//     reader.readAsText(file, /* optional */ "euc-kr");
// }
