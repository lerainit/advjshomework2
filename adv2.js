
"use strict";


const books = [
    { 
      author: "Люсі Фолі",
      name: "Список запрошених",
      price: 70 
    }, 
    {
     author: "Сюзанна Кларк",
     name: "Джонатан Стрейндж і м-р Норрелл",
    }, 
    { 
      name: "Дизайн. Книга для недизайнерів.",
      price: 70
    }, 
    { 
      author: "Алан Мур",
      name: "Неономікон",
      price: 70
    }, 
    {
     author: "Террі Пратчетт",
     name: "Рухомі картинки",
     price: 40
    },
    {
     author: "Анґус Гайленд",
     name: "Коти в мистецтві",
    }
  ];





class noListItemError extends Error{
constructor(errorKey){
  super();
  this.name = 'noListItemError';
  this.message = `There is no ${errorKey}`

}

}

class List{
  constructor(name,author,price){

if(!name ){
  throw new noListItemError('name')}
  else if(!author){
    throw new noListItemError('author')
  
}else if(!price){
  throw new noListItemError('price')
}


    this.name = name;
    this.author = author;
    this.price = price;


  this.ul = document.createElement('ul')  


  }
  
  
  render(){
  const root = document.querySelector('.root')
  root.append(this.ul)


this.ul.insertAdjacentHTML('beforeend',`<li>${this.name}</li><li>${this.author}</li><li>${this.price}</li>`)

  }
}

books.forEach(book =>{
try{
  new List(book.name,book.author,book.price).render()
}
catch(err){
  console.log(err)
 
}
}) 


