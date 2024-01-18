import Icons from './utils/Icons';

class Main {
  constructor() {}

  init() {
    console.log('Est-ce que mon init apparait dans la console');
    Icons.load();
  }
}
