const questions = [
  {id:1, description: "Pregunta 1: Escribe el resultado que esperarías de:  console.log('Valor de a:', a)    var a = 1"},
  {id:2, description: "Pregunta 2: Escribe el resultado que esperarías de:  console.log('Valor de b:', b)    var b = 2"},
  {id:3, description: "Pregunta 3: Escribe el resultado que esperarías de:  console.log('Valor de c:', c)    var c = 3"},
  {id:4, description: "Pregunta 4: Escribe el resultado que esperarías de:  LLAMADO DE LA FUNCIÓN: console.log('Resultado de funcionDeclarada:', funcionDeclarada())        DECLARACIÓN DE LA FUNCIÓN: function funcionDeclarada() {return 'Función declarada ha sido llamada.';}"},
  {id:5, description: "Pregunta 5: Escribe el resultado que esperarías de:  LLAMADO DE LA FUNCIÓN: console.log('Resultado de funcionExpresada:', funcionExpresada())        DECLARACIÓN DE LA FUNCIÓN: const funcionExpresada = function() return 'Función expresada ha sido llamada.';}"}
]

const questionnaire = (questions) => {
  try{
    questions.forEach(question => {
      prompt(question.description);
    });
    let answers = "La respuesta a las preguntas uno, dos y tres es:\n\n";
    answers += "Valor de a , b ó c : undefined ; porque al hacer referencia a una variable que no está declarada aún, JavaScript crea esta variable antes de declararla y le asigna un valor de undefined.\n\n";
    answers += "La respuesta a las preguntas 4 y 5 es:\n\n";
    answers += "Pregunta 4: Resultado de funcionDeclarada: Función declarada ha sido llamada.\n\n"
    answers += "Pregunta 5: Resultado de funcionExpresada: Función expresada ha sido llamada. \n\n"
    answers += "Esto pasa porque al invocar una función que no está declarada, JavaScript la eleva y por eso podemos invocar una función antes de declararla."
    alert(answers);
  }
  catch (error){
    console.error('Se produjo un error', error);
  }
}

questionnaire(questions);




