const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
  ]

  const renderGoodsItem = (item) => {
    return `<div class="goods-item">
                <span class = 'item-title'>${item.title}</span>
                <span class = 'item-price'>${item.price}$</span>
                <button class = "buy-button">Buy</button>
            </div>`
  }
  
  const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item))
    console.log(goodsList.join(''))
    document.querySelector('.goods-list').innerHTML = goodsList.join('')
  }

  //убрала запятые с помощью метода .join
  
  renderGoodsList(goods)
  