const Oca = require('oca');

class HelloWorld extends Oca.Action{
  _perform(){
    return Promise.resolve('Hello World');
  }
}

// registering action
Oca.registerAction(HelloWorld);
