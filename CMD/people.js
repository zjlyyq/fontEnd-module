define(function(require,exports,module){
    module.exports = {
        _firstName:'',
        _lastName:'',
        setName:function(firstName,lastName){
            this._firstName = firstName;
            this._lastName = lastName;
        },
        sayName:function(){
            console.log('Hello,My name is '+this._firstName+' '+this._lastName)
        }
    }
})