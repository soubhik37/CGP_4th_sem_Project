let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
};

$(".overview-boxes .box").click(function () {
  if (!$(this).hasClass("box-active")) {
    $(".box").removeClass("box-active");
    $(this).addClass("box-active");
  }
  if (this.id == "total-student-card") {
    $(".option-boxes").removeClass("show");
    $("#total-student-container").addClass("show");
  } 
  else if (this.id == "pending-studnets-card") {
    $(".option-boxes").removeClass("show");
    $("#pending-studnets-container").addClass("show");
  } 
  else if (this.id == "total-notice-card") {
    $(".option-boxes").removeClass("show");
    $("#total-notice-container").addClass("show");
  }
   else if (this.id == "total-post-card") {
    $(".option-boxes").removeClass("show");
    $("#total-post-container").addClass("show");
  }
});

if ($(this).hasClass("active")) {
  $(this).removeClass("active");
} else {
  $(this).addClass("active");
}

$(document).ready(function () {
  $("#total-students").DataTable();
  $("#pending-students").DataTable();
  $("#total-notices").DataTable();
  $("#total-posts").DataTable();
});
