function up_now(){
    event.preventDefault();
  var count;

  count=document.getElementById('count').value;
  count = parseInt(count)  +1;
  document.getElementById('count').value=count;

  console.log(count);

}