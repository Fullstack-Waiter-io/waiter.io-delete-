const { Translate } = require('@google-cloud/translate').v2;

const keyFilename = 'key.json';
const translate = new Translate({ keyFilename });

const text = 'handburger こんにちは元気ですか';
const target = 'en';

async function translateText() {
  try {
    const [translations] = await translate.translate(text, target);
    const translatedText = Array.isArray(translations)
      ? translations[0]
      : translations;
    console.log(`Original: ${text}`);
    console.log(`Translation (${target}): ${translatedText}`);
  } catch (err) {
    console.error('Error occurred:', err);
  }
}

translateText();
