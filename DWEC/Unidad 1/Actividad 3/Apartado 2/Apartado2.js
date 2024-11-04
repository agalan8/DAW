function mensaje(idioma) {

        document.open();
      if (idioma == "rus") {
        document.write("<p style='color:red;'>Добро пожаловать</p>");
      } else if (idioma == "esp") {
        document.write("<p style='color:purple;'>Bienvenido</p>");
      } else {
        document.write("<p style='color:orange;'>Welcome</p>");
      }

  document.close();
}
