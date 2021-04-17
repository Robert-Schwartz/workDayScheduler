//adding current date to jumbo
var now = moment().format("dddd, MMMM, Do YYYY"); 
$("#currentDay").text(now);

//clear local storage
// var reset = localStorage.clear();

//save buttons function
$(".saveBtn").on("click", function () {
  var saveTask = $(this).siblings("textarea").val();
  var taskID = $(this).siblings("textarea").attr("id");
  console.log(saveTask, taskID);
  $(this).addClass("saveBtnSelected");
  localStorage.setItem(taskID, saveTask);
});

//show saved values
$("#hour9").val(localStorage.getItem("hour9"));
$("#hour10").val(localStorage.getItem("hour10"));
$("#hour11").val(localStorage.getItem("hour11"));
$("#hour12").val(localStorage.getItem("hour12"));
$("#hour1").val(localStorage.getItem("hour1"));
$("#hour2").val(localStorage.getItem("hour2"));
$("#hour3").val(localStorage.getItem("hour3"));
$("#hour4").val(localStorage.getItem("hour4"));
$("#hour5").val(localStorage.getItem("hour5"));




