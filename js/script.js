function up_now(){
    event.preventDefault();
  var count;
  document.getElementById('down').disabled=false;

  count=document.getElementById('count').value;


  if(count<10){
    count = parseInt(count)  +1;


 }
else{
  alert('Sayaç 10 sayisindan büyük olamaz')
}

if(count==10){
  document.getElementById('up').disabled=true;
}
  

  document.getElementById('count').value=count;

  console.log(count);

}


function down_now (){
    event.preventDefault();
  var count;
  document.getElementById('up').disabled=false;
  count=document.getElementById('count').value;
if(count>0){
  count = parseInt(count)  -1;

}
  else{alert('Sayaç negatif olamaz')}
  if(count==0){
    document.getElementById('down').disabled=true;
  }

  document.getElementById('count').value=count;

  console.log(count);

}
