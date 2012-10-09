queueablegettersetter.js
========================

### How to install it

in node.js
```
npm install queueablegettersetter.js
```

in browser (get it from the [repo](https://github.com/jeromeetienne/queueablegettersetter.js/))

```
<script src="queuablegettersetter.js"></script>
```

It will define 2 properties ```Object.__defineQGetter__``` 
and ```Object.__defineQSetter__```

### How to use it


Define an object ```foo``` with a property ```.bar```
```
	var foo	= {
		bar	: 32
	};
```

Define an property getter for ```foo.bar```

```
	foo.__defineQGetter__('bar', function(value){
		return value*2;
	});
```