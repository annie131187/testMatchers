export default function byHealth(array, field) {
  return array.sort((a, b) => b[field] - a[field]);
}
