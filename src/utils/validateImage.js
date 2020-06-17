export default function checkImgOnline(imageUrl) {
  const img = new Image();
  img.src = imageUrl;
  if (img.height > 0) {
    return true;
  }
  return false;
}
