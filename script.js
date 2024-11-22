function toggleMenu() {
    var menuContainer = document.querySelector('.submenu');
    menuContainer.style.display = (menuContainer.style.display === 'block') ? 'none' : 'block';
  }
function toggleMenu2() {
    var menuContainer = document.querySelector('#sublist');
    menuContainer.style.display = (menuContainer.style.display === 'block') ? 'none' : 'block';
  }
function toggleMenuBar() {
    var menuContainer = document.querySelector('#search_bar');
    var searchIcon = document.querySelector('#search');
    menuContainer.style.display = (menuContainer.style.display === 'block') ? 'none' : 'block';
    searchIcon.style.display = (searchIcon.style.display === 'block') ? 'none' : 'block';

  }