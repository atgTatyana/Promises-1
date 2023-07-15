import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    read().then((data) => json(data)) // data = ArrayBuffer(180)
      .then((value) => {
        this.value = JSON.parse(value);
        // this.value = {id: 9, created: 1546300800, userInfo: {…}}
      });

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.value);
      }, 2000);
    });
  }
}
