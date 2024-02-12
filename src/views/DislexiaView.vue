<template>
    <div class="bg-gray-100 p-8">
        <div class="max-w-2xl mx-auto">
            <img src="@/assets/dislexia.jpg" alt="Dislexia" class="rounded-lg shadow-lg mb-8">

            <div class="grid grid-cols-2 gap-8">
                <!-- Div a la izquierda -->
                <div>
                    <h2 class="text-2xl font-bold mb-4">Texto Original</h2>
                    <p>
                        La dislexia es un trastorno del aprendizaje que consiste en la dificultad en la lectura debido a
                        inconvenientes para identificar los sonidos del habla y aprender a relacionarlos con las letras y
                        las palabras (decodificación). La dislexia, también llamada "discapacidad para la lectura", es una
                        consecuencia de diferencias individuales en las áreas del cerebro que procesan el lenguaje.

                        La dislexia no se debe a problemas intelectuales, de la audición o de la vista. La mayoría de los
                        niños con dislexia pueden tener un buen resultado en la escuela con un programa de tutorías o de
                        educación especializada. El apoyo emocional también juega un papel importante.
                        Si bien la dislexia no tiene cura, la evaluación y la intervención tempranas dan excelentes
                        resultados. Hay casos en los que, por años, la dislexia no se diagnostica y no se identifica hasta
                        la adultez, pero nunca es tarde para buscar ayuda.
                    </p>
                </div>

                <!-- Div a la derecha -->
                <div>
                    <h2 class="text-2xl font-bold mb-4">Texto Modificado</h2>
                    <div class="mb-4">
                        <label for="fontSelector" class="block text-sm font-medium text-gray-700 mb-2">Seleccionar
                            Fuente:</label>
                        <select id="fontSelector" v-model="selectedFont"
                            class="border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300">
                            <option value="Arial">Arial</option>
                            <option value="Calibri">Calibri</option>
                            <option value="Comic Sans MS">Comic Sans MS</option>
                            <option value="Impact">Impact</option>
                            <option value="Times News Roman">Times News Roman</option>
                            <option value="Verdana">Verdana</option>
                            <option value="Open Dyslexic">Open Dyslexic</option>
                        </select>
                    </div>
                    <p :style="{ fontFamily: selectedFont }" class="word-spacing-line-height text-lg">
                        La dislexia es un trastorno del aprendizaje que consiste en la dificultad en la lectura debido a
                        inconvenientes para identificar los sonidos del habla y aprender a relacionarlos con las letras y
                        las palabras (decodificación). La dislexia, también llamada "discapacidad para la lectura", es una
                        consecuencia de diferencias individuales en las áreas del cerebro que procesan el lenguaje.

                        La dislexia no se debe a problemas intelectuales, de la audición o de la vista. La mayoría de los
                        niños con dislexia pueden tener un buen resultado en la escuela con un programa de tutorías o de
                        educación especializada. El apoyo emocional también juega un papel importante.
                        Si bien la dislexia no tiene cura, la evaluación y la intervención tempranas dan excelentes
                        resultados. Hay casos en los que, por años, la dislexia no se diagnostica y no se identifica hasta
                        la adultez, pero nunca es tarde para buscar ayuda.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const selectedFont = ref('Arial');
</script>

<style lang="css" scoped>
.word-spacing-line-height {
    background-color: rgb(245, 242, 186);
    text-align: justify;
    word-spacing: 0.3em;
    line-height: 2.2em

}
</style>