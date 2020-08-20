$(document).foundation()
// const handlebars = require("express-handlebars");
// const db = require("../models/index");

// closes the panel on click outside
$(document).mouseup(function (e) {
    var container = $('#contact-panel');
    if (!container.is(e.target) // if the target of the click isn't the container...
    && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
        container.removeClass('is-active');
      }
});

//function to add Course
$(".course-modal-submit-button").on("click", function(){
    console.log("why")
    const token = window.localStorage.getItem('Token');
    if(token){
      $.ajaxSetup({
        headers:{'x-access-token': token}
      });
    }
    let cName = $("#courseName").val();
    let subject = topic;
    console.log("Hillllllll")
    $.ajax({
      // url: location.hostname + "/api/auth/signup",
      url: "http://localhost:8000/api/user/instructor/courses",
      method: "POST",
      data: {
            "course_name": cName,
            "subject": subject,
            },
      success: (response) =>{
        console.log("my response", response);
        console.log("Am here")
        window.location.href();
      }
    })
  });

  //student roster toggling
  $('[data-open-details]').click(function (e) {
    e.preventDefault();
    $(this).next().toggleClass('is-active');
    $(this).toggleClass('is-active');
  });
    

  //Add new student
  $("#AddStu").on("click", function(){
    event.preventDefault();
    let fname = $("#stuFirst").val()
    let lname = $("#stuLast").val()
    let email = $("#stuMail").val()
    let crsid = $("#stuCourse").val()
    console.log("course id", crsid);
    let pwd = $("#stuPwd").val() 
    //Ajax post call goes here 
    console.log(fname, lname, email, pwd)  

    $.ajax({
      // url: location.hostname + "/api/auth/signup",
      url: "http://localhost:8000/api/auth/signup",
      method: "POST",
      data: {
            "first_name": fname,
            "last_name": lname,
            "email": email,
            "role": "STUDENT",
            "password": pwd,
            "crsid": crsid
          },
      success: (response) =>{
        console.log("my response", response);
        //Refresh roster to show student
      }
    });
  })

  //Target login button after student is checked in
    let user = localStorage.getItem("User")
    $("#LoginIns").text("Logged in:" + user)
    $("#LoginIns").css("color","green")
    $("#LoginIns").hover(function(){
        $("#LoginIns").addClass("hide")
        $("#LogoutIns").removeClass("hide")
      },
      function(){
          $("#LogoutIns").addClass("hide")
          $("#LoginIns").removeClass("hide")

      }
    )

//funtion to log out
$("#LogoutIns").on("click", function(){
  window.location.href = "/";
  localStorage.clear()
})



