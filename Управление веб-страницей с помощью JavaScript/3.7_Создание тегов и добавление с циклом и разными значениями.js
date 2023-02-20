В HTML-документе задан тег <select>. В скрипте объявлена переменная countries, в которой указаны некоторые страны. 
Доработайте скрипт так, чтобы в тег <select> добавились теги <option> по одному на каждую страну из массива countries. 
В качестве значения тега option укажите название страны, а в качестве атрибута — value первые две буквы страны в нижнем регистре (маленькими буквами).

<html>
<head>
</head>
<body>
 <section class="card">
	<select>
	</select>
 </section>
</body>
</html>
//---------------------------------------------------------------------
const countries = ["Armenia", "Russia", "Germany", "France", "Georgia"];

const itemSelect = document.querySelector("select");

for (let i = 0; i < countries.length; i++) {
  let itemOption = document.createElement('option');
  itemOption.innerText = countries[i];
  itemOption.value = String(countries[i]).substr(0, 2).toLowerCase();
  itemSelect.appendChild(itemOption);
//   console.log(itemOption.value);
}
