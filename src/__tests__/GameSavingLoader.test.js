import GameSavingLoader from '../GameSavingLoader';

test('testing GameSavingLoader.load()-1', async () => {
  const data = await GameSavingLoader.load();
  expect(data).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  });
});

test('testing GameSavingLoader.load()-2', (done) => {
  GameSavingLoader.load()
    .then((saving) => {
      const expectedData = {
        id: 9,
        created: 1546300800,
        userInfo: {
          id: 1, name: 'Hitman', level: 10, points: 2000,
        },
      };
      expect(saving).toEqual(expectedData);
      done();
    })
    .catch(console.error)
});