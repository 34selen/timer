function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0'); // 시간을 2자리 숫자로 변환
    const minutes = String(now.getMinutes()).padStart(2, '0'); // 분을 2자리 숫자로 변환
    const seconds = String(now.getSeconds()).padStart(2, '0'); // 초를 2자리 숫자로 변환

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
  }

  setInterval(updateClock, 1000);
  updateClock();