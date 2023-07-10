dayjs.extend(dayjs_plugin_advancedFormat);



//Updates the day and time displayed, and calls updateClasses.
function updateTime() {
  const dayJsTime = dayjs();
  $("#currentDay").text(dayJsTime.format("dddd, MMMM Do"));
  $("#currentTime").text(dayJsTime.format("h:mm:ss A"));
}

//Updates the time on the next repaint of the animation frame.
function startTimerInterval() {
  updateTime();
  requestAnimationFrame(startTimerInterval);
}

$( "#datepicker" ).datepicker();

$(function () {
  //Calls the timerInterval function.
  startTimerInterval();

  //Calls the loadTasks function.
  loadTasks();

  $('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
    
  })


});

