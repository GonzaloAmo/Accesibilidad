<template>
    <div class="container mx-auto mt-8">
      <div class="bg-gray-100 p-8 rounded-md shadow-md">
        <h1 class="text-3xl font-bold mb-4">Problemas Cognitivos</h1>
        <h2 class="text-2xl font-semibold mb-4">Varios puntos para hacer que una web o APP sea accesible para personas con discapacidad cognitiva</h2>
        <div class="flex items-center space-x-4">
          <svg class="w-10 h-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 6v6m0 6V6m0 6h6m-6 0H6"></path>
          </svg>
          <p class="text-lg">Utiliza patrones de diseños, símbolos, términos e íconos que sean conocidos por las personas, esto evitará la necesidad de que el usuario deba aprender otros que sean nuevos.</p>
        </div>
        <div class="flex items-center space-x-4 mt-4">
          <svg class="w-10 h-10 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 13l4 4L19 7"></path>
          </svg>
          <p class="text-lg">Si cuentas con un buen diseño, seguramente los errores serán menos probables. No te olvides de pedir al usuario únicamente lo que necesitas.</p>
        </div>
        <div class="flex items-center space-x-4 mt-4">
          <svg class="w-10 h-10 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12"></path>
          </svg>
          <p class="text-lg">Toma en cuenta que, el hecho de requerir de la memoria del usuario en la web, puede limitar la interacción con el contenido a las personas con discapacidades cognitivas.</p>
        </div>
      <button
        class="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
        Realizar Acción Importante
      </button>
      <div class="mt-6">
        <label class="block text-sm font-medium text-gray-700">Selecciona una opción:</label>
        <select
          class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
      <div class="mt-6">
        <input
          type="checkbox"
          class="form-checkbox h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label for="checkbox" class="ml-2 text-sm text-gray-700">Acepto los términos y condiciones</label>
      </div>
      <br>
      <p class="text-lg mb-4">
        Las personas, siempre deben contar con un fácil acceso al envío de comentarios, ya que, si esto no es fluido, no podremos saber el momento exacto en el que el usuario necesita de la solución de un problema.
      </p>
      <div class="mt-6">
        <label class="block text-sm font-medium text-gray-700">Necesitas ayuda:</label>
        <textarea
          class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          rows="4"
          placeholder="Escribe tu mensaje aquí..."></textarea>
      </div>
      <button
        class="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
        Enviar Comentario
      </button>
    </div>
  </div>
</template>
  
  <script>
  </script>
  
  <style scoped>
  </style>
  