pratoNome = 0;
pratoPreco = 0;

bebidaNome = 0;
bebidaPreco = 0;

sobremesaNome = 0;
sobremesaPreco= 0;


function finalizar(){

    const total = "R$ " + (pratoPreco + bebidaPreco + sobremesaPreco).toFixed(2);

    let textoZap = `Olá, gostaria de fazer o pedido:\n
        - Prato: ${pratoNome}\n
        - Bebida: ${bebidaNome}\n
        - Sobremesa: ${sobremesaNome}\n
        Total: ${total}`;

    textoZap ="https://wa.me/5535999351124?text=" + encodeURIComponent(textoZap);

    window.location.href = textoZap;
}

function tudoCerto(){

    if (Number(pratoPreco) * Number(bebidaPreco) * Number(sobremesaPreco) !== 0){

        document.querySelector(".botao-inferior").innerHTML = "Fechar Pedido";
        document.querySelector(".botao-inferior").classList.add("botao-verde")

    }
}

function converterPreco(preco){
    let precoConvertido = "";
    for (let i = 0; i < preco.length; i++){
       
        if (Number(preco[i]) === 0 || Number(preco[i]) === 1 || Number(preco[i]) === 2 || Number(preco[i]) === 3 || Number(preco[i]) === 4 || Number(preco[i]) === 5 || Number(preco[i]) === 6 || Number(preco[i]) === 7|| Number(preco[i]) === 8|| Number(preco[i]) === 9){

            precoConvertido = precoConvertido + Number(preco[i])

        }

    }
    return Number(precoConvertido/100);
}
function selecionarPrato(elemento) {

    const outroSelecionado = document.querySelector(".selecionado-prato")
    if (outroSelecionado !== null) {

    outroSelecionado.classList.remove("selecionado-prato");
    document.querySelector(".toVendoTudo").classList.remove("toVendoTudo")
    }

    elemento.classList.toggle("selecionado-prato"); //borda
    elemento.querySelector(".check").classList.toggle("toVendoTudo") //check

    pratoNome = elemento.childNodes[3].childNodes[1].innerHTML;
    pratoPreco = elemento.childNodes[3].childNodes[7].childNodes[1].innerHTML;

    pratoPreco = converterPreco(pratoPreco);

    tudoCerto() 
      
}

function selecionarBebida(elemento) {

    const outroSelecionado = document.querySelector(".selecionado-bebida")
    if (outroSelecionado !== null) {

    outroSelecionado.classList.remove("selecionado-bebida");
    document.querySelector(".toVendoTudo2").classList.remove("toVendoTudo2")
    }

    elemento.classList.toggle("selecionado-bebida"); //borda
    elemento.querySelector(".check").classList.toggle("toVendoTudo2") //check

    bebidaNome = elemento.childNodes[3].childNodes[1].innerHTML;
    bebidaPreco = elemento.childNodes[3].childNodes[7].childNodes[1].innerHTML;

    bebidaPreco = converterPreco(bebidaPreco);

    tudoCerto() 
 
}

function selecionarSobremesa(elemento) {

    const outroSelecionado = document.querySelector(".selecionado-sobremesa")
    if (outroSelecionado !== null) {

    outroSelecionado.classList.remove("selecionado-sobremesa");
    document.querySelector(".toVendoTudo3").classList.remove("toVendoTudo3")
    }

    elemento.classList.toggle("selecionado-sobremesa"); //borda
    elemento.querySelector(".check").classList.toggle("toVendoTudo3") //check

    sobremesaNome = elemento.childNodes[3].childNodes[1].innerHTML;
    sobremesaPreco = elemento.childNodes[3].childNodes[7].childNodes[1].innerHTML;

    sobremesaPreco = converterPreco(sobremesaPreco);

    tudoCerto() 
 
}