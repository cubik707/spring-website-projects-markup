function clearSearch(inputElement) {
  inputElement.value = '';
  inputElement.dispatchEvent(new Event('input'));
}

export default clearSearch;
