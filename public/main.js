//Author
const topMenu = document.getElementById('tqd-top-menu')
const toggleTopMenuIcon = document.getElementById('tqd-toggle-top-menu-icon')

document.addEventListener('DOMContentLoaded', function() {
  const topMenu = document.getElementById('tqd-top-menu');
  const toggleTopMenuIcon = document.getElementById('tqd-toggle-top-menu-icon');

  document.addEventListener('click', function(e) {
    if (toggleTopMenuIcon && toggleTopMenuIcon.contains(e.target)) {
      // Click to Toggle top menu icon
      topMenu.classList.toggle('tqd-topmenu-expanded');
      topMenu.classList.toggle('hidden');
    } else {
      // Click Outside from Toggle top menu icon
      if (topMenu && topMenu.classList.contains('tqd-topmenu-expanded')) {
        topMenu.classList.remove('tqd-topmenu-expanded');
        topMenu.classList.add('hidden');
      }
    }
  });
});

