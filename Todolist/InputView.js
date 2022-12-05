export default function InputView(callback) {
  const form = document.getElementById(`box`);
  form.addeventlistener("submit", callback);
}
