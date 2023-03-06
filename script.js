function typeWriter(text, elementId, delay) {
    let i = 0;
    const targetElement = document.getElementById(elementId);
    targetElement.innerHTML = "";
  
    function type() {
      if (i < text.length) {
        targetElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, delay);
      }
    }
  
    type();
  }
  typeWriter("Ahora mismo, la web está en mantenimiento. Volveremos pronto. Si quieres puedes ponerte en contacto con nosotros a través del correo: info@aducion.com", "autoText", 20);
