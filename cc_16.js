// Task 2: Fetch Products using .then()
function fetchProductsThen() {
    fetch("https://www.course-api.com/javascript-store-products")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((products) => {
        console.log("Products (then):", products.map(p => p.fields.name));
      })
      .catch(handleError);
  }
  
  // Task 3: Fetch Products using async/await
async function fetchProductsAsync() {
    try {
      let response = await fetch("https://www.course-api.com/javascript-store-products");
      if (!response.ok) throw new Error("Network response was not ok");
      let products = await response.json();
      displayProducts(products);
    } catch (error) {
      handleError(error);
    }
  }
  
  // Task 4: Display Products
function displayProducts(products) {
    const container = document.getElementById("product-container");
    container.innerHTML = ""; // Clear previous data
    products.slice(0, 5).forEach(product => {
      const { name, price, image } = product.fields;
      const productElement = document.createElement("div");
      productElement.classList.add("product");
      productElement.innerHTML = `
        <img src="${image[0].url}" alt="${name}" />
        <h3>${name}</h3>
        <p>$${(price / 100).toFixed(2)}</p>
      `;
      container.appendChild(productElement);
    });
  }

  // Task 5: Handle Errors
function handleError(error) {
    console.error("An error occurred:", error.message);
  }
  
  // Task 6: Call Fetch Functions
fetchProductsThen();
fetchProductsAsync();