let sites = {
    data: [
      {
        catName: "Taj Mahal",
        category: "North",
        price: "45-535",
        image: "images/site1.png",        
        btn:"",
      },
      {
        catName: "Great Living Chola Temples",
        category: "South",
        price: "0",
        image: "images/site2.png",
      },
      {
        catName: "Rani Ki Vav",
        category: "West",
        price: "20",
        image: "images/site3.png",
      },
      {
        catName: "Jageshwar group of temples",
        category: "North",
        price: "0",
        image: "images/site4.png",
      },
      {
        catName: "Pattadakal monuments",
        category: "South",
        price: "35",
        image: "images/site5.png",
      },
      {
        catName: "Jagannath Temple, Puri",
        category: "East",
        price: "89",
        image: "images/site6.png",
      },
      {
        catName: "Ashokan Rock Edicts",
        category: "East",
        price: "0",
        image: "images/site7.png",
      },
      {
        catName: "Nagarjunakonda",
        category: "South",
        price: "49",
        image: "images/site8.png",
      },
      {
        catName: "Champaner-Pavagadh Park",
        category: "West",
        price: "49",
        image: "images/site9.png",
      },
      {
        catName: "NAME",
        category: "UTTARAKHAND",
        price: "0",
        image: "images/searchFilter/img-1.png",
      },
      {
        catName: "NAME",
        category: "UTTARAKHAND",
        price: "0",
        image: "images/searchFilter/img-2.png",
      },
      {
        catName: "NAME",
        category: "UTTARAKHAND",
        price: "0",
        image: "images/searchFilter/img-3.png",
      },
      {
        catName: "NAME",
        category: "UTTARAKHAND",
        price: "0",
        image: "images/searchFilter/img-4.png",
      },
      {
        catName: "NAME",
        category: "UTTARAKHAND",
        price: "0",
        image: "images/searchFilter/img-5.png",
      },
      {
        catName: "NAME",
        category: "UTTARAKHAND",
        price: "0",
        image: "images/searchFilter/img-6.png",
      },
      {
        catName: "NAME",
        category: "UTTARAKHAND",
        price: "0",
        image: "images/searchFilter/img-7.png",
      },
      {
        catName: "NAME",
        category: "UTTARAKHAND",
        price: "0",
        image: "images/searchFilter/img-8.png",
      },
      {
        catName: "NAME",
        category: "UTTARAKHAND",
        price: "0",
        image: "images/searchFilter/img-9.png",
      },
     



    ],
  };
  
  for (let i of sites.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    // window.location("#");
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h2");
    name.classList.add("site-name");
    name.innerText = i.catName.toUpperCase();
    container.appendChild(name);
    //btn
    // function createButton() {
    //   var element = document.createElement("button");
    //   element.appendChild(document.createTextNode("Click Me!"));
    //   var page = document.getElementById("btn");
    //   page.appendChild(element);
    
      
    // }
  

    
    //price
    let price = document.createElement("h3");
    price.innerText = "Entry Fee: ₹ " + i.price;
    container.appendChild(price);
    let btn=document.createElement("button");
      btn.innerHTML = "Book Ticket";
      container.appendChild(btn);
      // let price2 = document.createElement("h3"); 
      // price2.innerText = "      ";
      // container.appendChild(price2);
    // let btn2=document.createElement("button");
    
    //   btn2.innerHTML = "Details";
    //   container.appendChild(btn2);
  
    card.appendChild(container);
    document.getElementById("sites").appendChild(card);

    
  }
  
  //parameter passed from button (Parameter same as category)
  function filtersites(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".site-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all sites
  window.onload = () => {
    filtersites("all");
  };