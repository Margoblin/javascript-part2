class Cart {

  getCartSum(){
  
  }

  render(){

  }

  addGood(){

  }

  removeGood(){

  }
}

class GoodsList {
  constructor(goods) {
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 }
    ]
  }

  getGoodsPricesArr() {
    this.goodsPricesArr = this.goods.map(item => item.price)
    console.log(this.goodsPricesArr)
    return this.goodsPricesArr
  }

  getSum() {
    this.getGoodsPricesArr()
    let totalSum = this.goodsPricesArr.reduce(function (sum, price) {
      return sum + price;
    }, 0);
    console.log(totalSum)
  }

  render() {
    let goodsListItems = this.goods.forEach(item => {
      let goodsListItem = new Good(item.title, item.price)
    })
    console.log(goodsListItems)
  }
}

class Good {
  constructor(title, price) {
    this.title = title
    this.price = price
    this.render()
  }

  render() {
    let item = document.createElement('div')
    item.classList.add('goods-item')
    item.innerHTML = `<span class = "item-title">${this.title}</span>
              <span class = "item-price">${this.price}$</span>
              <button class = "buy-button">Buy</button>`

    let goodsListHtml = document.querySelector('.goods-list')
    goodsListHtml.appendChild(item)
  }

  addToCart(){

  }
}

let goodsList = new GoodsList
goodsList.getSum()
goodsList.render()