const scripts = require('../public/javascripts/scripts');

test('test finds addItem function', ()=>{
    expect(scripts.addItem()).toMatch('ok');
});