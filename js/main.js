
$.getJSON('products.json', function (data) {

  for (let i = 0; i < data.products.length; i++) {

    $("<div class='casa" + i + " products'></div>").appendTo(".slide_product");

    $("<div class='products-img'><img src ='images/product/" + data.products[i].img + "'></div>").appendTo(".casa" + i);

    $("<div class='list" + i + " product-list'></div>").appendTo(".casa" + i);

    $("<div class='product-h3'><h3>" + data.products[i].title + "</h3></div>").appendTo(".list" + i);

    $("<div class='star-img'><div class='rateYo"+ i +"'></div></div>").appendTo(".list" + i);
    $(function () {
      $(".rateYo"+ i +"").rateYo({
        rating: ""+ data.products[i].rating +"%",
        ratedFill: "#050404",
        starWidth: "17px",
        readOnly: true,
        "starSvg": "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>"+
                 "<path d='M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379"+
                           " 4.246-3.611-2.625-3.612 2.625"+
                           " 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833"+
                           " 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388"+
                           " 7.416 5.388-2.833-8.718"+
                           " 7.417-5.389h-9.167l-2.833-8.718z'></path>"+
                "</svg>"
      });
    
    });

 


    if (data.products[i].price.oldPrice == data.products[i].price.finalPrice) {

      $("<div class ='price-product'><span class='fin-price'>" + data.products[i].price.finalPrice + " usd.</span></div>").appendTo(".list" + i);

    }

    else if (data.products[i].price.oldPrice > data.products[i].price.finalPrice) {

      let parcent = 100 - Math.round((data.products[i].price.finalPrice / data.products[i].price.oldPrice) * 100);

      $("<div class ='price-product'><span class='interest-price'>" +
        data.saleText + " " + parcent + "%</span><span class='old-price'>" +
        data.products[i].price.oldPrice +
        " usd.</span><span class='fin-price'>" + data.products[i].price.finalPrice +
        " usd.</span></div>").appendTo(".list" + i);
    }

    if (data.products[i].actions.bestsellers) {

      $("<img src = 'images/action/bestsellers.png' class='action-img'>").appendTo(".casa" + i);

    }
    else if (data.products[i].actions.eco) {

      $("<img src = 'images/action/eco.png' class='action-img'>").appendTo(".casa" + i);

    }
    else if (data.products[i].actions.new) {

      $("<img src = 'images/action/new.png' class='action-img'>").appendTo(".casa" + i);

    }


    $('<a href="#" class="product-bootom">' + data.buttonText + '</a>').appendTo(".casa" + i);


  }
 

});



