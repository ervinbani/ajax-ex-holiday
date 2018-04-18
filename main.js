for(var i=2000; i<2018;i++){
    $('.container').children('#year').append("<option class=option>"+i+"</option>");
}
for(var i=1; i<13;i++){
    $('.container').children('#month').append("<option class=option>"+i+"</option>");
}

$(document).ready(function(){

      $(document).on('click', '#btn', function(){
        alert('ciao');
          $.ajax({
              url:'https://holidayapi.com/v1/holidays',
              method:'GET',
              data:{
                  key:'2c6965c6-0570-42d7-b76a-8e54095558ef',
                  cauntry:'IT',
                  year:'2017',

              },

              success:function(data){
                console.log(data);

              },
              error: function(){

              }
          });

      });

});
