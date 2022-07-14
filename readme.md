

## Примеры использование блока "try...catch"

</hr>

 Блок "Try ... catch " используется для того, чтобы при выявлении ошибок они перебрасывались в блок catch, выводилось сообщение об ошибке ,но при этом не блокировалось дальнейшее выполнение кода

</hr> 

- Для выявления ошибок при парсинге JSON -cтрок приходящих с сервера:


```js
const text = '{name:"Александр"}';
try {
  const person = JSON.parse(text); // Uncaught SyntaxError: Unexpected token n in JSON at position 1
} catch(error) {
  console.error(error);
  console.log(error.message);
}
console.log('Это сообщение мы увидим!');



```

- При валидации данных введеных в форму:



```js

<form novalidate>
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <button type="submit">Отправить</button>
</form>

<script>
  class FormError extends Error {
    constructor(message) {
      super(message);
      this.name = 'FormError';
    }
  }
  const elForm = document.querySelector('form');
  elForm.onsubmit = (e) => {
    e.preventDefault();
    elForm.querySelectorAll('input').forEach((el) => {
      if (!el.checkValidity()) {
        try {
          throw new FormError(`[name="${el.name}"] ${el.validationMessage}`);
        } catch(error) {
          console.error(`${error.name} ${error.message}`);
        }
      }
    });
  }
</script>

```