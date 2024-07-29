const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
const closeButton = document.querySelector(".closeButton");

const payButton = document.querySelector(".payButton");
const successfull = document.querySelector(".successfull");
const backButton = document.querySelector(".backButton");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
  
  
});


// payButton.addEventListener("click", () => {
//   payment.style.display="none";
//   successfull.style.display = "block";
  
// });

closeButton.addEventListener("click", () => {
  successfull.style.display = "none";
  
 
});

backButton.addEventListener("click", () => {
  successfull.style.display = "none";
  
 
});




function verify(){
  payment.style.display="none";
  successfull.style.display = "block";
}





// function myFunction() {
//   document.getElementById("demo").style.fontSize = "25px"; 
//   document.getElementById("demo").style.color = "red";
//   document.getElementById("demo").style.backgroundColor = "yellow";        
// }


// function myFunction() {
//   var demo = document.getElementById("demo");
//   if (demo.style.fontSize === "25px") {
//     demo.style.fontSize = "16px"; // reset to default font size
//     demo.style.color = "black"; // reset to default color
//     demo.style.backgroundColor = "transparent"; // reset to default background color
//   } else {
//     demo.style.fontSize = "25px";
//     demo.style.color = "red";
//     demo.style.backgroundColor = "yellow";
//   }
// }





function myFunction() {
  var nameInput = document.getElementById("name");
  var phoneInput = document.getElementById("phone");
  var emailInput = document.getElementById("email");
  var sizeInput = document.getElementById("size");
  var shoeNameInput = document.getElementById("shoeName");

  console.log("hello boss")

  if (nameInput && phoneInput && emailInput && sizeInput && shoeNameInput) {
    var name = nameInput.value;
    var phone = phoneInput.value;
    var email = emailInput.value;
    var size = sizeInput.value;
    var shoeName = shoeNameInput.value;

    if (name && phone && email && size && shoeName) {
      // All fields are filled, allow the button to be clicked
      // You can add your checkout logic here
      alert("Checkout successful!");

      //calling verify function
      verify();
    } else {
      // One or more fields are empty, prevent the button from being clicked
      alert("Please fill in all the required fields!");
      event.preventDefault();
    }
  } else {
    console.error("One or more input fields do not exist in the DOM.");
  }
}




