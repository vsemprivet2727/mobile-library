document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    console.log('Типа поиск и тд', query);
  });
});
