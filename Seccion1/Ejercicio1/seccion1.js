const questions = [
    {id: 1, description: 'Pregunta 1: ¿Puedo acceder a la variable global(globalVariable) desde un scope local?  1) Si    2)No' , answer: '1'},
    {id: 2, description: 'Pregunta 2: ¿Puedo acceder a la variable global(globalVariable) desde un scope de bloque?  1)Si   2)No' , answer: '1'},
    {id: 3, description: 'Pregunta 3: ¿Puedo acceder a la variable local (functionVariable) desde un scope global?  1)Si 2)No' , answer: '2'},
    {id: 4, description: 'Pregunta 4: ¿Puedo acceder a una variable local(functionVariable) desde un scope de bloque? 1)Si  2)No' , answer: '1'},
    {id: 5, description: 'Pregunta 5: ¿Puedo acceder a una variable de bloque(blockVariable) desde un scope global? 1)Si 2)No' , answer: '2'},
    {id: 6, description: 'Pregunta 6: ¿Puedo acceder a una variable de bloque(blockVariable) desde un scope local? 1)Si 2)No' , answer: '1'},
];


const questionnaire = (questions) => {
    try{
        let arrayAnswer = [];
        let score = 0;
        questions.forEach(question => {
          let answer = prompt(question.description); 
          let justification = prompt("Justifica tu respuesta:");
          if(answer == question.answer){
            arrayAnswer.push("Correcto");
            console.log("Tu respuesta es correcta");
            score += 1;
          }else{
            arrayAnswer.push("Incorrecto");
          }
        });
        alert(`Las respuestas correctas son:
            Pregunta 1: ${arrayAnswer[0]}
            Explicación: Si, en JavaScript puedes acceder a una variable global desde un scope local. Las variables globales son accesibles en cualquier parte del código, incluyendo dentro de funciones, bloques y otros scopes locales.
            Pregunta 2: ${arrayAnswer[1]}
            Explicación: Si, en JavaScript puedes acceder a una variable global desde un scope de bloque. Las Variables globales son accesibles en cualquier parte del código, incluyendo dentro de bloques definidos por llaves {} como ciclos for y condicionales if, entre otros.
            Pregunta 3: ${arrayAnswer[2]}
            Explicación: No, en JavaScript no puedes acceder a una variable local desde un scope global. Las variables locales, que se definen dentro de una función o bloque, están limitadas a ese scope específico y no son accesibles fuera de él.
            Pregunta 4: ${arrayAnswer[3]}
            Explicación: Si, en JavaScript puedes acceder a una variable local desde un scope de bloque si la variable está definida en un scope que engloba al bloque. Sin embargo, las variables definidas dentro de un bloque solo son accesibles dentro de ese mismo bloque si se usan let o const.
            Pregunta 5: ${arrayAnswer[4]}
            Explicación: No, en JavaScript no puedes acceder a una variable de bloque desde un scope global. Las variables definidas dentro de un bloque con let o const tienen un alcance de bloque, lo que significa que solo son accesibles dentro del bloque donde fueran definidas. Fuera de ese bloque, dichas variables no existen.
            Pregunta 6: ${arrayAnswer[5]}
            Explicación: Si, puedes acceder a una variable de bloque desde un scope local en JavaScript siempre que la variable de bloque esté dentro del mismo scope local o un scope que englobe al scope local. Las variables de bloque, definidas con let o const, son accesibles dentro del bloque donde se declaran y en cualquier bloque anidado dentro de ese scope. 
            Tu puntaje total es:  ${score} puntos`);
    }
    catch (error){
        console.error('Se produjo un error', error);
    }
}

questionnaire(questions);





// let score = 0;
// if(prompt("Pregunta 1: ¿Puedo acceder a la variable global(globalVariable) desde un scope local?  1/Si    2/No") == "1"){
//     let answerQuestion1 = prompt("Justifica tu respuesta:")
//     score += 1;
//     alert("Tu respuesta es correcta");
// }else{
//     alert("Tu respuesta no es correcta. La respuesta correcta es....")
// }
// if(prompt("Pregunta 2: ¿Puedo acceder a la variable global(globalVariable) desde un scope de bloque?  1/Si   2/No") == "1"){
//     score += 1;
// }
// if(prompt("Pregunta 3: ¿Puedo acceder a la variable local (functionVariable) desde un scope global?  1/Si 2/No") == "2"){
//     score += 1;
// }
// if(prompt("Pregunta 4: ¿Puedo acceder a una variable local(functionVariable) desde un scope de bloque? 1/Si  2/No") == "1"){
//     score += 1; 
// }
// if(prompt("Pregunta 5: ¿Puedo acceder a una variable de bloque(blockVariable) desde un scope global? 1/Si 2/No") == "2"){
//     score += 1; 
// }
// if(prompt(" Pregunta 6: ¿Puedo acceder a una variable de bloque(blockVariable) desde un scope local? 1/Si 2/No ") == "1"){
//     score += 1;
// }







// // Global Scope
// var globalVariable = "Soy una variable global.";

// function testScope() {
//   // Function Scope
//   var functionVariable = "Soy una variable local.";

//   if (true) {
//     // Block Scope
//     let blockVariable = "Soy una variable de bloque.";
//     console.log("Dentro del bloque:", blockVariable);
//     //Para comprobar si puedo acceder a una variable local desde un scope de bloque. 
//     console.log("Puedo acceder desde scope de bloque", functionVariable);
//   }

//   console.log("Dentro de la función:", functionVariable);
// }

// console.log("Fuera de la función:", globalVariable);
// testScope();
