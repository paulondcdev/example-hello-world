const Oca = require('oca');

class MyAction extends Oca.Action{
  constructor(){
    super();
    this.createInput('message: text');
    this.createInput('repeat: numeric', {defaultValue: 10});
  }

  _perform(data){
    const result = data.message.repeat(data.repeat);
    return Promise.resolve(result);
  }
}

// registering action
Oca.registerAction(MyAction);
