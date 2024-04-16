const preview = document.getElementById('preview');
const detect = document.getElementById('detect');
preview.style.display = 'none';
detect.style.display = 'none';

async function showPreview() {
    const imageInput = document.getElementById('imageInput');
    const file = imageInput.files[0];

    if (file) {
        // Відображення зображення в попередньому перегляді
        preview.src = URL.createObjectURL(file);
        preview.style.display = 'block';
        detect.style.display = 'block';
    }
}

// Функція для розпізнавання тексту на зображенні
async function recognizeText() {
    const imageInput = document.getElementById('imageInput');
    const output = document.getElementById('output');

    const file = imageInput.files[0];
    if (file) {
        // Розпізнання тексту
        Tesseract.recognize(
            file,
            'eng', // Мова тексту для розпізнавання (тут англійська)
            { logger: m => console.log(m) } // Опції та логування
        ).then(({ data: { text } }) => {
            // Виведення розпізнаного тексту
            output.textContent = text;
        });
    }
}
