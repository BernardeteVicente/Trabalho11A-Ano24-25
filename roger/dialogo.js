function iniciarDialogo() {
    alert("👤: Hola, soy Alex, tu guía virtual.");
    
    const nombre = prompt("👤: ¿Cómo te llamas?");
    alert(`👤: Encantado de conocerte, ${nombre}.`);
  
    const respuesta = prompt("👤: ¿Quieres comenzar una aventura? (sí / no)").toLowerCase();
  
    if (respuesta === "sí") {
      alert("👤: ¡Excelente! La aventura comienza ahora...");
    } else {
      alert("👤: Está bien, tal vez en otro momento.");
    }
  }
  