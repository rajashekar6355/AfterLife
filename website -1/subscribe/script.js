// Firebase initialization (replace with your config)
const firebaseConfig = {
  // Your Firebase project configuration
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

const form = document.getElementById('subscribe-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;

  // Add email to Firestore (replace with your collection name)
  firestore.collection('subscribers').add({
    email: email
  })
    .then(() => {
      // Success message (optional)
      console.log('Email subscribed successfully!');
      alert('Thank you for subscribing!');
    })
    .catch((error) => {
      console.error('Error adding email:', error);
    });
});


//FAQ



