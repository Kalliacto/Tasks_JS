Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными всеми гласными.

Например: "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!"

function disemvowel(str) {
  return str.replace(/[aeiouAEIOU]/gi, '');
}

disemvowel(str);
