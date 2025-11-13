// Входные данные

const positionLat = 10;
const positionLong = 20;
const addressLat = 14;
const addressLong = 25;

const latX = addressLat - positionLat;
const latY = addressLong - positionLong;

// Вычисление расстояния по теореме Пифагора
const distance = Math.sqrt(latX ** 2 + latY ** 2);

console.log(`Расстояние между точками: ${distance}`);