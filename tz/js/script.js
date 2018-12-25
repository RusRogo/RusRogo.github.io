
function show(state, id){
  if(id!=null)
    document.getElementById(id).style.display = state;
  else{
    document.getElementById('wrap__popup').style.display = state;
  }
  document.getElementById('fogging').style.display = state;
}
