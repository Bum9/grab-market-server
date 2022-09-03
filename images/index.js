axios
  .get("https://de81afe5-a239-4c3c-84cf-8807f4e4139b.mock.pstmn.io/products")
  .then(function (result) {
    console.log("통신 결과 : ", result);
    const products = result.data.products;

    productsHtml = "";
    for (i = 0; i < products.length; i++) {
      let product = products[i];

      productsHtml =
        productsHtml +
        '<div class="product-card">' +
        "<div>" +
        ' <img class="product-img" src="' +
        product.imageUrl +
        '"/>' +
        "</div>" +
        '<div class="product-contents">' +
        '  <span class="product-name">' +
        product.name +
        "</span>" +
        '  <span class="product-price">' +
        product.price +
        "</span>" +
        '  <div class="product-seller">' +
        '    <img class="product-avatar" src="./icons/avatar.png" /><span>' +
        product.seller +
        "</span>" +
        "</div>" +
        "</div>" +
        "</div>";
    }
    document.querySelector("#product-list").innerHTML = productsHtml;
  })
  .catch(function (error) {
    console.error("error 발생 :", error);
  });
