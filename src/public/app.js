// Put all your frontend code here.
const msgForm = document.querySelector("#msg");
console.log(window.location.host);
const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
  console.log("Connected to Server ✅");
});

socket.addEventListener("message", (message) => {
  console.log("New message: ", message.data);
});

socket.addEventListener("close", () => {
  console.log("Disconnected from Server ❌");
});

const handleMsgSubmit = (event) => {
  event.preventDefault();
  const input = msgForm.querySelector("input");
  console.log(input.value);
  socket.send(input.value);
  input.value = "";
};

msgForm.addEventListener("submit", handleMsgSubmit);
