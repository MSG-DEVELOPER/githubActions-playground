const core = require('@actions/core');

try {
  // Obtener el input 'nombre', si no se pasa se usará el valor por defecto
  const nombre = core.getInput('nombre');
  
  // Generar el mensaje de saludo
  const mensaje = `¡Hola, ${nombre}! 👋`;

  // Imprimir en logs
  console.log(mensaje);

  // Definir output 'mensaje' para que pueda usarse en el workflow
  core.setOutput('mensaje', mensaje);

} catch (error) {
  core.setFailed(`La acción falló con el error: ${error.message}`);
}
