//Funktion Formular
document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);

const handleSubmit = (e) => {
  e.preventDefault();
  let myForm = document.getElementById("pizzaOrder");
  let formData = new FormData(myForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};

<input type="hidden" name="form-name" value="name_of_my_form" />

function encode(data) {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...name,
      }),
    })
      .then(() => navigate("/thank-you/"))
      .catch((error) => alert(error));
  };

  return (
    <form
      data-netlify="true"
      name="pizzaOrder"
      method="post"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="pizzaOrder" />
      <label>
        What order did the pizza give to the pineapple?
        <input name="order" type="text" onChange={handleChange} />
      </label>
      <input type="submit" />
    </form>
  );

  document.forms.fileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const result = document.querySelector(".result");
    fetch("/", {
      body: new FormData(event.target),
      headers: { "Content-Type": "multipart/form-data" },
      method: "POST",
    })
      .then(() => {
        result.innerHTML = "Success";
      })
      .catch((error) => {
        result.innerHTML = `Failed: ${error}`;
      });
  });
  //Funktion Formular ende
  
  