const side = document.querySelector('.sidebar');

side.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    const listItems = document.querySelectorAll('.sidebar li');
    listItems.forEach(item => item.classList.remove('side1_selected'));
    listItems.forEach(item => item.parentNode.classList.remove('side1_nav_selected'));
    event.target.classList.add('side1_selected');
    event.target.parentNode.classList.add('side1_nav_selected');
  }
});




