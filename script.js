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

$(function () {
  //Calls the timerInterval function.
  startTimerInterval();

  //Calls the loadTasks function.
  loadTasks();
});
