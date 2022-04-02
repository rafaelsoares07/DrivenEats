let principal =null
let valorPrincipal=null
let bebida=null
let  valorBebida=null
let  sobremesa=null
let  valorSobremesa=null
let rua;
let pessoa;


function pratoEscolhido(el){
    
if (document.querySelector('.borda-verde')!== null && el !== document.querySelector('.borda-verde')){
    let prev = document.querySelector('.borda-verde')
    prev.classList.remove('borda-verde')
}
let estado =el.classList.toggle('borda-verde')


if(estado){
    //alert('true')
    principal = el.getAttribute("nome");
    valorPrincipal = el.getAttribute("valor");
}
else{
    //alert('false')
    principal = null
    valorPrincipal = null
}

analisarEstadoButtom();

  
}

function bebidaEscolhida(el){
    
    if (document.querySelector('.borda-verde-bebida')!== null && el !== document.querySelector('.borda-verde-bebida')){
        let prev = document.querySelector('.borda-verde-bebida')
        prev.classList.remove('borda-verde-bebida')
    }
    let estado =el.classList.toggle('borda-verde-bebida')
    
    
    
    if(estado){
       // alert('true')
        bebida = el.getAttribute("nome");
        valorBebida = el.getAttribute("valor");
    }
    else{
        //alert('false')
        bebida = null
        valorBebida = null
    }
    
    analisarEstadoButtom();
    
      
}

function sobremesaEscolhida(el){
    
        if (document.querySelector('.borda-verde-sobremesa')!== null && el !== document.querySelector('.borda-verde-sobremesa')){
            let prev = document.querySelector('.borda-verde-sobremesa')
            prev.classList.remove('borda-verde-sobremesa')
        }
        let estado =el.classList.toggle('borda-verde-sobremesa')
        
        
        
        if(estado){
            //alert('true')
            sobremesa = el.getAttribute("nome");
            valorSobremesa = el.getAttribute("valor");
        }
        else{
            //alert('false')
            sobremesa = null
            valorSobremesa = null
        }
        
        analisarEstadoButtom();
        
          
}
    

function analisarEstadoButtom(){
    let btn = document.querySelector('.btn')
    if(principal!==null && bebida!==null && sobremesa!==null){
        //alert('tem conteudo')
        btn.classList.add('active')
        btn.innerHTML = "Finalizar pedido"
    }
    else{
        
        //alert('nao escolheu nada')
        btn.classList.remove('active')
        btn.innerHTML = "Selecione os 3 itens para fechar o pedido"
       
    }
}

function fecharPedido(){
    if(principal==null || bebida==null || sobremesa==null ){
        alert('Escolha um item de cada categoria')
    }
    else{
     rua = prompt('Qual sua rua?')
     pessoa = prompt('Qual o seu nome?')
    let valorTotal = Number(valorPrincipal)+ Number(valorBebida)+Number(valorSobremesa)

    document.querySelector('.tela-confirmacao').style.display = 'block'

    document.querySelector('.pratoEscolhido').innerHTML = principal;
    document.querySelector('.valor-prato').innerHTML = valorPrincipal;

    document.querySelector('.bebidaEscolhida').innerHTML = bebida;
    document.querySelector('.valor-bebida').innerHTML = valorBebida;

    document.querySelector('.sobremesaEscolhida').innerHTML = sobremesa;
    document.querySelector('.valor-sobremesa').innerHTML = valorSobremesa;

    document.querySelector('.valor-total').innerHTML = valorTotal+' R$'


    // como fazer pra acrescentar texto sem tirar o anterior
    let total = document.querySelector('total').innerHTML

    total.innerHTML += 'oi'

    console.log(total)
    

    }
    
}

function fecharTelaConfirmacao(){
    document.querySelector('.tela-confirmacao').style.display = 'none';
}