 let video = document.getElementById("video");
let canvas = document.getElementById("canvas");

function startCamera() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => video.srcObject = stream)
    .catch(() => alert("Camera permission denied"));
}

function takePhoto() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext("2d").drawImage(video, 0, 0);
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(
    pos => {
      document.getElementById("location").innerText =
        "Lat: " + pos.coords.latitude +
        ", Long: " + pos.coords.longitude;
    },
    () => alert("Location permission denied")
  );
}
