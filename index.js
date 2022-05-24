var vidElement = null;
function start() {
  var camAvailable =
    navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
  if (camAvailable) {
    vidElement = document.getElementById("vid");
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        vidElement.srcObject = stream;
        vidElement.play();
      });
  }
}
function stop() {
  vidElement.pause();
}

// ------------ next qst --------
let i = 1;
$("#next").click(function () {
  if (i >= 5) {
    $("#qst5 p").text("Dernière question").removeClass("d-none");
    setTimeout(function () {
      $("#qst5 p").addClass("d-none");
    }, 1000);
    return;
  }
  $("#qst" + i).hide();
  i = i + 1;
  $("#qst" + i).removeClass("d-none");
  console.log(i);
});
// ---------------------------------------

// -------------- Animation ----------
function trans(a) {
  $(a).addClass("trans");
}
trans("#choixMetier");
function slideShow(b) {
  $(b).slideDown("slow");
}

function zoomIn() {
  $(".commerceImmobilierHide").addClass("commerceImmobilierShow");
}
