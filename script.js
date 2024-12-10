document.getElementById("translateBtn").addEventListener("click", translateText);

async function translateText() {
  const text = document.getElementById("textToTranslate").value;
  const sourceLang = document.getElementById("sourceLang").value;
  const targetLang = document.getElementById("targetLang").value;

  if (!text.trim()) {
    alert("Please enter text to translate!");
    return;
  }

  try {
    // Use the Google Translate API (replace with your API key if needed)
    const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`);
    const data = await response.json();

    // Extract the translated text
    const translatedText = data.responseData.translatedText;
    document.getElementById("translatedText").innerText = translatedText;
  } catch (error) {
    document.getElementById("translatedText").innerText = "Error: Unable to translate.";
    console.error("Translation API Error:", error);
  }
}
