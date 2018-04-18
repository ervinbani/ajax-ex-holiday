for(var i=2000; i<2018;i++){
    $('.container').children('#year').append("<option class=newyear value="+i+">"+i+"</option>");
}
for(var i=1; i<13;i++){
    $('.container').children('#month').append("<option class=option value="+i+">"+i+"</option>");
}

$(document).ready(function(){

      $(document).on('click', $('#btn'), function(){
        var state=$('.container').children('#country').children('.option:selected');
        var correntyear=$('.container').children('#year').children('.newyear:selected');
        thisState=state.val();
        thisYear=correntyear.val();

          console.log(thisState);




          $.ajax({
              url:'https://holidayapi.com/v1/holidays',
              method:'GET',
              data:{
                  key:'2c6965c6-0570-42d7-b76a-8e54095558ef',
                  country:thisState,
                  year:thisYear,

              },

              success:function(data){
                console.log(data);

              },
              error: function(){

              }
          });

      });

});
