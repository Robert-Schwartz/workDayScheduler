//Global Task variables


//adding current date to jumbo
var now = moment().format("LLLL");
$("#currentDay").text(now);

//clear local storage
// localStorage.clear();

//Compare - Task Time vs Current Time
var compareTime = function (taskTime) {
  var momentTime = taskTime.slice(-2);
  if (momentTime === "am") {
    momentTime = parseInt(taskTime[0]);
  } else {
    momentTime = parseInt(taskTime[0]) + 12;
  }
  var currentHour = moment().hours();
  console.log(currentHour, momentTime);
};
compareTime("hour1");




//save buttons function
$(".saveBtn").on("click", function () {
  var saveTask = $(this).siblings("textarea").val();
  var taskID = $(this).siblings("textarea").attr("id");
  $(this).addClass("saveBtnSelected");
  localStorage.setItem(taskID, saveTask);
  console.log(localStorage);
});

//show persistance values in each task from local storage
$("#task1").val(localStorage.getItem("task1"));
$("#task2").val(localStorage.getItem("task2"));
$("#task3").val(localStorage.getItem("task3"));
$("#task4").val(localStorage.getItem("task4"));
$("#task5").val(localStorage.getItem("task5"));
$("#task6").val(localStorage.getItem("task6"));
$("#task7").val(localStorage.getItem("task7"));
$("#task8").val(localStorage.getItem("task8"));
$("#task9").val(localStorage.getItem("task9"));

