




function addQuote(item) {
  // Adds quote to carousel container
  $('.carousel-inner').append(`
    <div class="quote-container">
      <div class="img-container">
        <img  class='quote-img' src="${item.img}" id="">
      </div>
      <div class="item-name">${item.name}</div>
      <div class="item-quote">${item.quote}</div>
    </div>
    $('.carousel-indicators').append('<li data-target="#myCarousel" data-slide-to="'+ i + '"></li>');
  `);
}

function addHouse(item) {
  // Adds house to carousel container
  $('.store-container').append(`
    <div class="item-container">
      <div class="item-img-container">
        <img  class='item-img' src="${item.img}" id="">
        <span class="material-symbols-outlined">add_shopping_cart</span>
      </div>
      <div class="item-name">${item.name}</div>
      <div class="item-price">${item.price}</div>
      <div class="item-description">${item.description}</div>
      <div class="item-wiz-level">${item.level}</div>
    </div>
  `);
}
