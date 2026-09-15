let products = [
    { id: 1, name: "laptop", price: 1000, category: "electronics" },
    { id: 2, name: "phone", price: 500, category: "electronics" },
    { id: 3, name: "shirt", price: 50, category: "clothing" },
    { id: 4, name: "shoes", price: 80, category: "clothing" },
    { id: 5, name: "book", price: 20, category: "books" }
];

const searchInput = document.querySelector("#searchInput");
const resultsCount = document.querySelector("#resultsCount");
const resultsList = document.querySelector("#resultsList");
const noResults = document.querySelector("#noResults");

function render(itemsToRender) {
    resultsList.innerHTML = "";
    resultsCount.textContent = `Showing ${itemsToRender.length} product(s)`;
    noResults.style.display = itemsToRender.length === 0 ? 'block' : 'none';

    itemsToRender.forEach(product => {
        const li = document.createElement("li");
        li.classList.add("result-item");
        
        li.innerHTML = `
            <div>
                <p class="result-item__name">${product.name}</p>
                <span class="result-item__category">${product.category}</span>
            </div>
            <span class="result-item__price">$${product.price}</span>
        `;
        
        resultsList.appendChild(li);
    });
}

searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );

    render(filteredProducts);
});

render(products);