export function getRandomPicsumUrl(size = 100): string {
  // Picsum поддерживает /id/{id}/size/size.jpg или /600/600?random
  const randomId = Math.floor(Math.random() * 1000); // id от 0 до 999
  return `https://picsum.photos/id/${randomId}/${size}/${size}.jpg`;
}
