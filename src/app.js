import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((saving) => {
  // saving объект класса GameSaving
  console.log(saving); // {id: 9, created: 1546300800, userInfo: {…}}
}, (error) => {
  console.log('error = ', error);
});
