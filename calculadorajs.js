//FUNÇÃO PARA LIMPAR TANTO A ÁREA DE CALCULO COMO A DO RESULTADO
function clean(){

 document.getElementById('res').innerHTML = "";
    document.getElementById('saida').innerHTML = "";
        
}
//FUNÇÃO PARA INSERIR OS NÚMEROS NO HTML
 function insert (numbers){

    //INSERÇÃO DOS NÚMEROS NO PARÁGRAFO 
  var numeros = document.getElementById('res').innerHTML;
    //CONCATENAÇÃO DOS NÚMEROS PARA QUE ASSIM QUE PRESSIONADO OUTRO BOTÃO, O VALOR ANTERIOR NÃO SEJA SUBSTITUIDO.
   document.getElementById('res').innerHTML = numeros + numbers;

}
//FUNÇÃO PARA APAGAR 1 NÚMERO 
  function back(){

    var result = document.getElementById('res').innerHTML;
    //UTILIZAÇÃO DOS MÉTODOS SUBSTRING E LENGTH PARA CONTAR OS NÚMEROS INSERIDOS E ASSIM REMOVER O ÚLTIMO NÚMERO INFORMADO
     document.getElementById('res').innerHTML = result.substring(0, result.length -1);

}
//FUNÇÃO 
   function calc(){

      var result2 = document.getElementById('res').innerHTML;
      //ESTRUTURA CONDICIONAL PARA TESTAR SE O USUÁRIO INSERIU OU NÃO OS VALORES A SEREM CALCULADOS.
       if(result2){
          //SAÍDA DE DADOS COM O RESULTADO DO CÁLCULO.
        document.getElementById('saida').innerHTML = eval(result2);

    }else{
        //CASO O USUÁRIO NÃO INSIRA NENHUM VALOR PARA EFETUAR O CÁLCULO, IRÁ APARECER UMA MENSAGEM DE ERRO/MEME INTERNO DA SALA.
        document.getElementById('saida').innerHTML = "Mas como isso afeta a globalização?"

    }
}