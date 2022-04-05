function company()
 {
     imie=prompt("Jaką firmę reprezentujesz? ","podaj nazwę");
     if(imie!= "podaj nazwę firmy" && imie!= "")
         mail=prompt("Cześć " + imie +"! podaj adres mail, na który mam się kontaktować? ","podaj adres mailowy");
         if(imie!= "podaj adres mailowy" && mail!= "")
         alert("Dziękuję za zainteresowanie!");
 }