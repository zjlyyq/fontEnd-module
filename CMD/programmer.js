define(function(require,exports,module){
    // 依赖于people模块
    var p = require('./people');
    var car = require('./car');
    exports.sayHello = function(lang) {
        p.setName('Zhang','Jialu');
        p.setName('Zhang','Jialu');
        p.sayName();
        console.log('Hello,I am a ' + lang + 'programmer')
    }
})