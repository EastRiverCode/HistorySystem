
function SearchingFunc(){
  var shuttleType = document.getElementsByClassName("menu")[0];
  var shuttleNumber = document.getElementsByClassName("number")[0];
  var shuttle = shuttleType.value + "-" + shuttleNumber.value;
  var shutDisp = document.getElementById("shuttleDisp");

  if(shutDisp.innerText == shuttle){
    alert("이미 대차번호가 "+shuttle+" 입니다.");
  }
  else{
    shutDisp.innerText = shuttle;
    alert("대차번호 "+shuttle+" 선택되었습니다.");
  }
}
function maxLengthCheck(self){
  if (self.value.length > self.maxLength){
    //object.maxLength : 매게변수 오브젝트의 maxlength 속성 값입니다.
    self.value = self.value.slice(0, self.maxLength);
  }
}
function historyLoad(){
  jQuery.get('history.txt', function(data) {
    document.getElementById("historyWindow").innerText = data;
  });
}
