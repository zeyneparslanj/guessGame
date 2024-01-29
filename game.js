const rand = Math.floor(Math.random() * 100) + 1;

let trial = 5;

function begin() {
  while (trial > 0) {
    const kullaniciTahmini = parseInt(
      prompt(`Kalan deneme hakkınız: ${trial}\nSayıyı tahmin edin:`)
    );

    if (kullaniciTahmini === rand) {
      alert(`Tebrikler! Sayıyı doğru tahmin ettiniz: ${rand}`);
      break;
    } else {
      let mesaj = `Üzgünüm, yanlış tahmin. `;
      mesaj +=
        kullaniciTahmini < rand
          ? "Daha büyük bir sayı girin."
          : "Daha küçük bir sayı girin.";
      alert(mesaj);

      trial--;
    }
  }

  if (trial === 0) {
    alert(`Üzgünüm, kaybettiniz. Doğru sayı: ${rand}`);
  }

  // Oyundan çıkış
  const stop = confirm("Oyundan çıkmak istiyor musunuz?");
  if (stop) {
    window.close();
  } else { 
    trial = 5;
    begin();
  }
}

// Oyunu başlat
begin();
