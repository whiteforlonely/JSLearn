/**
 * here, I don't know, maybe, just define a empty object
 * and the really happen in the memory is? maybe, just also
 * create one cache for the object.
 * @type {{}}
 */
var obj = {}

/**
 * and here just want to talk about how to set enumerable
 * to the properties
 */
Object.defineProperties(obj, {
    name:{
        value:"QingyuanKe",
        enumerable:true,
        writable:false,
        configurable:false
    }
});

/**
 * here just set configurable as true,
 * then you can modify the property of the
 * properties of object.
 */
delete obj.name;

for(var attr in obj){
    console.log(attr);
    console.log(obj[attr]);
}
