const Oca = require('oca');

// by loading the module, it triggers the registration of the action
require('./HelloWorld');


// creating action
const action = Oca.createAction('helloWorld');

// executing action
action.execute().then((result) => {
  console.log(result);

}).catch((err) => {
  console.error(err.message);
});
