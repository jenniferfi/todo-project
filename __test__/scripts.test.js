const scripts = require('../public/javascripts/scripts');

//Mikään ei toimi (exportit puuttuu scriptsissä)
test('test finds addItem function', ()=>{
    expect(scripts.addItem()).toMatch('ok');
});

test('creates new item with constructor', ()=>{
    expect(new Item('Code')).toBeDefined();
});