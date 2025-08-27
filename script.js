// Видаліть дублікат з HTML і залиште тільки цей код
let qrScanner;

function startScanner() {
  document.getElementById("scannerWrapper").style.display = "block";
  
  if (!qrScanner) {
    qrScanner = new Html5Qrcode("qr-reader");
    qrScanner.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: 250 },
      qrCodeMessage => {
        document.getElementById("qr-result").innerText = `Зчитано: ${qrCodeMessage}`;
        qrScanner.stop();
      }
    ).catch(err => {
      console.error("Помилка сканера:", err);
    });
  }
}

function openBottomMenu(event) {
  if (event) event.stopPropagation();
  document.getElementById("bottomMenu").classList.add("active");
}

function closeBottomMenu(event) {
  if (event) event.stopPropagation();
  document.getElementById("bottomMenu").classList.remove("active");
}

function openDocumentModal() {
  document.getElementById("documentModal").classList.add("visible");
  closeBottomMenu(); // закрити меню при відкритті модального вікна
}

function closeDocumentModal() {
  document.getElementById("documentModal").classList.remove("visible");
}

// Додайте заглушки для інших функцій
function downloadPDF() { alert("Завантаження PDF"); }
function refreshDocument() { alert("Оновлення документу"); }
function showRegistryData() { alert("Розширені дані"); }
function submitDelayRequest() { alert("Запит на відстрочку"); }
function openMedicalReferral() { alert("Направлення на ВЛК"); }
function updateContactInfo() { alert("Оновлення контактів"); }

// У функції startScanner додайте catch блок
// qrScanner.start(/* параметри */)
//   .catch(err => {
//     console.error("Помилка доступу до камери:", err);
//     alert("Не вдалося отримати доступ до камери");
//   });