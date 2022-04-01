let principal =null
let valorPrincipal=null
let bebida=null
let  valorBebida=null
let  sobremesa=null
let  valorSobremesa=null


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
    }
    else{
        
        //alert('nao escolheu nada')
        btn.classList.remove('active')
       
    }
}

function fecharPedido(){
    if(principal==null || bebida==null || sobremesa==null ){
        alert('Escolha um item de cada categoria')
    }
    else{
    let rua = prompt('Qual sua rua?')
    let pessoa = prompt('Qual o seu nome?')

    alert(principal + bebida+ sobremesa+ rua+pessoa)
    }
    
}

