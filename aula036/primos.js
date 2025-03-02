function éprimo(limite) {

    for(let numero = 2;numero < limite;numero++) {
        let ehprimo = true
        for(let divisor = 2; divisor < numero;divisor++) {
            if (numero % divisor == 0) {
                break;
            }
            
            if (ehprimo = true) {
                console.log(divisor)
            }
            }
            
    }

}

éprimo(10)