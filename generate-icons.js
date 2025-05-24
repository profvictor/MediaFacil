const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const sourceImage = 'livro.png';

async function generateIcons() {
    try {
        for (const size of sizes) {
            await sharp(sourceImage)
                .resize(size, size)
                .toFile(path.join('icons', `icon-${size}x${size}.png`));
            console.log(`Ícone ${size}x${size} gerado com sucesso!`);
        }
    } catch (error) {
        console.error('Erro ao gerar ícones:', error);
    }
}

generateIcons(); 