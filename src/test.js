
/**
 * slot
 * 
 * @class super class
 */
var Slota	= function(){
	
}

/**
 * [__defineQGetter__ description]
 * @param  {[type]} property [description]
 * @param  {[type]} getterFn [description]
 * @return {[type]}          [description]
 */
Slota.prototype.defineQGetter	= function(property, getterFn){
	var name	= "__dbgGetSet_" + property;
	// init _QueueableGetterSetter for this property if needed
	this[name]	= this[name] || new _QueueableGetterSetter(this, property);
	// setup the new getter
	this[name]._getters.push(getterFn)
};

/**
 * [__defineQSetter__ description]
 * @param  {[type]} property [description]
 * @param  {[type]} setterFn [description]
 * @return {[type]}          [description]
 */
Slota.prototype.defineQSetter	= function(property, setterFn){
	var name	= "__dbgGetSet_" + property;
	// init _QueueableGetterSetter for this property if needed
	this[name]	= this[name] || new _QueueableGetterSetter(this, property);
	// setup the new setter
	this[name]._setters.push(setterFn)
};
