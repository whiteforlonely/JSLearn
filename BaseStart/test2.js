
var obj = Object.create(null);
Object.defineProperties(obj, {
    name:{
        value:"keqingyuan",
        writable: false,
        enumerable:false,
        configurable: true
    }
});


Object.defineProperties(obj, {
    name:{
        value:"keqing",
        configurable:false
    }
});

/**
 * so, here is the configurable character
 * as you set configurable as true, then you can
 * redefine the property. opposite, you
 * can not redefine the property.
 */
console.log(obj.name);