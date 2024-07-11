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
            Explicación: abcdf
            Pregunta 2: ${arrayAnswer[1]}
            Explicación: mmmmm
            Pregunta 3: ${arrayAnswer[2]}
            Explicación: ssssss
            Pregunta 4: ${arrayAnswer[3]}
            Explicación: mamama
            Pregunta 5: ${arrayAnswer[4]}
            Explicación: mamamama
            Pregunta 6: ${arrayAnswer[5]}
            Explicación: jfjfjfj
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
