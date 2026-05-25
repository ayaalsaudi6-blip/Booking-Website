function showToast(message){

  const toast = document.getElementById('toast');

  toast.textContent = message;

  toast.classList.add('show');

  setTimeout(() => {

    toast.classList.remove('show');

  },2000);
}

const form = document.getElementById('reservation-form');

form.addEventListener('submit', (e) => {

  e.preventDefault();

  const reservation = {
    name:document.getElementById('name').value,
    date:document.getElementById('date').value,
    time:document.getElementById('time').value,
    guests:document.getElementById('guests').value
  };
  let reservations =
  JSON.parse(localStorage.getItem('reservations')) || [];

  reservations.push(reservation);

  localStorage.setItem(
    'reservations',
    JSON.stringify(reservations)
  );

  showToast('Reservation Saved Successfully');

  form.reset();
});

const favButtons =
document.querySelectorAll('.fav-btn');

favButtons.forEach(button => {

  button.addEventListener('click', () => {

    showToast('Added To Favorites ❤️');
  });
});
const darkBtn =
document.getElementById('dark-mode-btn');

darkBtn.addEventListener('click', () => {

  document.body.classList.toggle('dark-mode');
});

const menuToggle =
document.getElementById('menu-toggle');

const navLinks =
document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {

  navLinks.classList.toggle('active');
});