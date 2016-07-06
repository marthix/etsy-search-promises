//Fetch the API data
fetch('http://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=board%20games&includes=Images,Shop'))

  //Parse the returned JSON response
  .then(function(response) {
    return response.json()
  })

  //Take the JSON object, and begin creating HTML elements
  .then(function(json) {
    console.log(json)
    //For each of the results, create a new image from the result object's Image property
    json.results.forEach(function(result){
      console.log(result)
      var img = document.createElement('img')
      img.setAttribute('src', result.Images[0].url_170x135)
      img.classList.add('tile-img')

      var title = document.createElement('p')
      title.innerHTML = result.title
      title.classList.add('tile-title')

      var seller = document.createElement('p')
      seller.innerHTML = result.Shop.shop_name
      seller.classList.add('tile-seller')

      var price = document.createElement('p')
      price.innerHTML = '$' + result.price
      price.classList.add('tile-price')

      var div = document.createElement('div')
      div.classList.add('tile')

      div.appendChild(img)
      div.appendChild(title)
      div.appendChild(seller)
      div.appendChild(price)

      document.querySelector('.tile-grid').appendChild(div)
    })
  })
