function logMovement(event) {
    log.insertAdjacentHTML(
      "afterbegin",
      `movement: ${event.movementX}, ${event.movementY}<br>`,
    );
    while (log.childNodes.length > 128) log.lastChild.remove();
}
  
const log = document.getElementById("log");
document.addEventListener("mousemove", logMovement);
  
