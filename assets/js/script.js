//adding current date to jumbo
var now = dayjs();
$("#currentDay").text(now);

//save button functions
$(".saveBtn").on("click",function(){
    var saveTask = $(this).siblings("textarea").val();
    var taskID = $(this).siblings("textarea").attr("id");
    console.log(saveTask,taskID);
    localStorage.setItem(taskID,saveTask);
})

//show saved values
$("#hour9").val(localStorage.getItem("hour9"))
