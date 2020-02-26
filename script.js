      // Date and Time Updated over time
      var time = moment().format('LTS dddd LL');
      
      var currentHour = parseInt(moment().format('HH'))

      $('.date').text(time);
      
      for (let i = 9; i < 18; i++) {
        if(currentHour === i ){
          $('#hour'+i).addClass('present')
        }
        else if(currentHour < i){
          $('#hour'+i).addClass('future')
        }
        var local = localStorage.getItem("hour"+i)
        if(local !== null){
            $("#hour"+i).val(local)
        }
      }
      var dateTime = null,
      date = null;

      var update = function() {
        date = moment(new Date())
        var time = moment().format('dddd LL');
        $('.date').text(time);
      };

      $(document).ready(function() {
        dateTime = $('#dateTime')
        update();
        setInterval(update, 1000);
      });
      
      // Saving to local storage
     function save_data(hour) {
        
        var value= $("#hour"+hour).val()
        localStorage.setItem("hour"+hour, value)
     }