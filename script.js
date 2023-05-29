function Tabuada() {
    var num = document.getElementById("tab-num")
    var comeco = document.getElementById("tab-comeco")
    var termina = document.getElementById("tab-termina")
    document.getElementById("tab")
    if (num.value.length == 0 || comeco.value.length == 0 || termina.value.length == 0) {
        alert(" [ERRO] Todas as caixas de texto precisam estar preenchidas para que a sua tabuada seja gerada. Tente novamente.")
        num.value = ``
        comeco.value = ``
        termina.value = ``
    }
    else {
        num = Number(num.value)
        comeco = Number(comeco.value)
        termina = Number(termina.value)
        tab.innerHTML = ``
        while (comeco <= termina) {
            var opt = document.createElement('option')
            opt.text = `${num} x ${comeco} = ${num*comeco}`
            tab.appendChild(opt)
            comeco = comeco + 1 
        }  
    }
    }


