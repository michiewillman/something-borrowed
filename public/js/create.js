const createBtn = document.getElementById("create-btn");

// global variable
let imgURL;

// initalizes the cloudinary widget in memory
var myWidget = cloudinary.createUploadWidget(
  {
    cloudName: "dnmefbufn",
    uploadPreset: "somethingBorrowed",
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      imgURL = result.info.secure_url;
    }
  }
);

document.querySelector(".cloudinary-button").addEventListener(
  "click",
  function (event) {
    event.preventDefault();
    myWidget.open();
  },
  false
);
const createHandler = async function (event) {
  event.preventDefault();

  let title = document.querySelector("#item-title").value;
  let description = document.querySelector("#item-description").value;
  let location = document.querySelector("#item-location").value;
  let category = document.querySelector("#category-select").value;

  let itemData = {
    title: title,
    description: description,
    location: location,
    category_id: category,
    image:
      imgURL ||
      "https://res.cloudinary.com/du1rn35uq/image/upload/v1692239985/f8ycsrl6e6ttkbgvffme.jpg",
  };

  await fetch(`/api/item`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(itemData),
  });
  window.location.href = "/my-listings";
};

// Event listener on create button
createBtn.addEventListener("click", createHandler);
