const sendData = async (text) => {
  try {
    const response = await (
      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(text),
      })
    ).json();
  } catch (error) {
    alert(error);
  }
};
window.onload = () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = {
      name: event.target[0].value,
      email:event.target[1].value,
      message: event.target[2].value,
    };
    console.log(text)
    sendData(text);
  });

};