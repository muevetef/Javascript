function indexOfIgnoreCase(texto1, texto2) {
  //Pasamos los parámetros a minusculas antes de buscar
  let texto1Minus = texto1.toLowerCase();
  let texto2Minus = texto2.toLowerCase();
  let index = texto1Minus.indexOf(texto2Minus);
  return index;
  //Si texto1 contienen texto2 devolcerá la posición
  //de la primera coincidéncia que encuentre, si no lo encuentra
  //devolverá -1
}

indexOfIgnoreCase("Alejandro", "jan");
