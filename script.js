const gallery = document.querySelector('.gallery');

// Array of products with image paths and prices
const products = [

  { imgSrc: 'images/images.jpeg', price: '₹700' },
  { imgSrc: 'images/top.jpeg', price: '₹800' },
  { imgSrc: 'images/tshirt.jpg', price: '₹300' },
  { imgSrc: 'images/ts  .jpg', price: '₹1200' },
  // Add more images as needed
];

// Loop through the products array and create a card for each item
products.forEach(product => {
  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = product.imgSrc;
  card.appendChild(img);

  const price = document.createElement('div');
  price.classList.add('price');
  price.textContent = product.price;
  card.appendChild(price);

  gallery.appendChild(card);
});

// Modal functionality
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const span = document.getElementsByClassName("close")[0];

gallery.addEventListener('click', function(e) {
  if (e.target.tagName === 'IMG') {
    modal.style.display = "block";
    modalImg.src = e.target.src;
  }
});

// Close the modal
span.onclick = function() {
  modal.style.display = "none";
}
