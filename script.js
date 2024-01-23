function gerar() {
    let campo = document.getElementById("text")
    let res = document.getElementById("res")
    let numero = String(getRandomIntInclusive(10000000000, 99999999999))
    let nove_numeros_cpf = numero.substring(0, 9)
    let dez_numeros_cpf = "0"
    let onze_numeros_cpf = "0"
    
    
    //=====================================
    let cont = 0
    let extraido = []
    for (let x = 10; x >= 2; x--){
        let multiplicacao = x * nove_numeros_cpf[cont]
        cont++
        extraido.push(multiplicacao)
        // insere em um array a multiplicação dos nove numeros de cpf com iteradores.
    } 

    //=====================================
    let soma = 0
    for (let i = 0; i < extraido.length; i++){
        soma += extraido[i]
        // soma todos os valores dentro do array
    } 

    //=====================================
    let resultado = (soma * 10) % 11

    //=====================================
    if (resultado > 9) {
        dez_numeros_cpf = nove_numeros_cpf + `0`
    } else {
        dez_numeros_cpf = nove_numeros_cpf + resultado
    // Insere o decimo número do CPF
    }
    
    //=====================================    
    let extraido2 = []
    let cont2 = 0
    for (let x = 11; x >= 2; x--){
        let multiplicacao2 = x * dez_numeros_cpf[cont2]
        cont2++
        extraido2.push(multiplicacao2)
        // insere em um array a multiplicação dos dez numeros de cpf com iteradores.
    } 
    
    //===================================== 
    let soma2 = 0
    for (let i = 0; i < extraido2.length; i++){
        soma2 += extraido2[i]
        // soma todos os valores dentro do array
    }
    
    //=====================================
    let resultado2 = (soma2 * 10) % 11
    
    //=====================================
    if (resultado2 > 9) {
        onze_numeros_cpf = dez_numeros_cpf + `0`
    } else {
        onze_numeros_cpf = dez_numeros_cpf + resultado2
        // insere o decimo primeiro número do CPF.
    }

    campo.innerHTML = `${onze_numeros_cpf.substring(0, 3)}.${onze_numeros_cpf.substring(3, 6)}.${onze_numeros_cpf.substring(6, 9)}-${onze_numeros_cpf.substring(9, 11)}`
    
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // Randomiza um intervalo de numero inteiro não excluindo o minimo e máximo.
}