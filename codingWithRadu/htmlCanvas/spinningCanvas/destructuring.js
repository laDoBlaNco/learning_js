// DESCRIPTION: (FYI i'M USING VAR BECAUSE WE ARE REPEATING VAR NAMES AND LET AND CONST DON'T WORK 
// WILL WITH THAT)
// The destructuring assignment syntax is a JS expression that makes it possible to unpack values
// from arrays, or properties from objects, into distinct variables. 

// Examples: The object and array literal expressions provide an easy way to create ad hoc packages
// of data.

var x = [1,2,3,4,5];
console.log(x);

// The destructuring assignment with a var uses similar syntax as regular assignment, but uses it on 
// the left-hand side of the assignmetn instead. 
var [y,z] = x;
console.log(y,z); 

// we can do the same with objets on the left side:
var obj = {a:1,b:2,c:3,d:4,e:5};
console.log(obj);
var {a,b} = obj;
console.log(a,b);
// NOTE: the distinct vars used on objs, need to correspond to the obj's keys, so this also works
var {d,c} = obj; // also this doesn't work without a 'let or const'
console.log(c,d);

// this capability is similar to perl and python. Let's look at some more examples individually with 
// []s and {}s

// BINDING AND ASSIGNMENT:
// For both obj and arr destructuring, there are two kinds of patterns: binding and assignment patterns.
// and they have slightly different syntaxes.
// In binding we start with a declaration (var, let, or const). Then, each individual property must
// either be bound to a variable or further destructured. 
var obj = {a:1,b:{c:2}};
var {a,b:{c:d},} = obj;
console.log(a,d);

// In many other syntaxes where the language binds a variable for you, you can also use a binding 
// destructuring pattern. This works for looping (for...in, for...of, and for await...of), Function
// parameters, and the Catch binding variable. 

// In assignment patterns, the pattern does not start with a keyword. Each destructured property is
// assigned to a target of assignment -- which may either be declared beforehand with var or let 
// or is a property of another object -- in general, anything that can appear on the left-hand 
// side of an assignment expression. 
var numbers = [];
var obj = {a:1,b:2};
({a:numbers[0],b:numbers[1]} = obj); 

// NOTE: The (...) is obligado if we are using {} assignment without a declaration. Meaning that 
// {a,b} = {a:1,b:2} isn't valid. The reason being that {} on the left of a = is considered a block
// and not an object literal. But I can do ({a,b} = {a:1,b:2}) as well as const {a,b} = {a:1,b:2} 
// so again that (...) is around the entire expression, not just the part on the left-hand side. 

// DEFAULT VALUES 
// We can use default values with destructured properites as well. It'll be used when theh property 
// isn't present or is 'undefined', but will not be used if the prop as a value of 'null'
var [a=1] = []
console.log(a);
var {b=2}={b:undefined};
console.log(b);
var {c=2}={c:null};
console.log(c);

// the default can be any expression and will be eval'd when necessary
var {b = console.log('hey, what, what happened to "b"?')} = {b:2};
console.log(b);

// REST properties are pretty intuitive and work as expected. ...var, teh rest collection will 
// conincide with the original object:
var {a,...others} = {a:1,b:2,c:3,d:4,e:5};
console.log(a);
console.log(others);

// or array:
var [first,...others2] = [1,2,3,4,5];
console.log(others2);
// NOTE: the rest propert MUST be the last in the pattern and can't have a training comma.


// SOME MORE EXAMPLES:
// ARRAY DESTRUCTURING:

// BASIC VAR ASSIGNMENT 
var foo = ['one','two','three'];
var [red,yellow,green] = foo;
console.log(red);
console.log(yellow);
console.log(green);

// MORE ELEMENTS THAN SOURCE
// what if we have more variables than our source has values?
var foo = ['one','two','three'];
var [red,yellow,greeen,blue] = foo;
console.log(red);
console.log(yellow);
console.log(green);
console.log(blue);

// SWAPPING variables
// With distructuring we can swap vars as we do in some other languages
var a = 1,b = 3;
[a,b]=[b,a];
console.log(a);
console.log(b);

var arr = [1,2,3];
[arr[2],arr[1]] = [arr[1],arr[2]];
console.log(arr);


// PARSING AN ARRAY RETURNED FROM A FUNCTION
// making working with an array more concise 
var f = ()=>[1,2];
var [a,b] = f();
console.log(a);
console.log(b);

// IGNORING SOME RETURNED 
var f = ()=>[1,2,3];
var [a,,b] = f();
console.log(a);
console.log(b);
// or ignore them all. 
[,,]=f();

// USING BINDING PATTERN AS THE REST PROPERTY 
// we normally use a var for our rest property (...rest), but we can also use another array or obj 
// binding pattern. The inner destructuring destructures from the array created after collecting
// the rest elements, so you can't access any properties present on the original iterable in this 
// way.
var [a,b,...{length}] = [1,2,3]; // NOTE: object distructuring can only have an identifier
console.log(a,b,length);

var [a,b,...[,,c,d]] = [1,2,3,4,5,6] 
console.log(a,b,c,d);

// and we can even nest these patterns:
var [a,b,...[,c,d,...[,,,e,f]]] = [1,2,3,4,5,6,7,8,9,10]
console.log(a,b,c,d,e,f);

// UNPACKING VALUES FROM REGEXP MATCHES 
// When we get a match in regexp we get returned an array. This means we can distructure that 
// bad boy with all the tricks we learned above, allowing us to skip what we don't need, such as 
// the full match at the beginning of the returned array.
const parseProtocol = (url)=>{
  const parsedURL = /^(\w+):\/\/([^/]+)\/(.*)$/.exec(url);
  if(!parsedURL)return false;
  console.log(parsedURL);

  // ["https://developer.mozilla.org/en-US/docs/Web/JavaScript","https","developer.mozilla.org"
  // "en-US/docs/Web/JavaScript"]

  const[,protocol,fullhost,fullpath] = parsedURL;
  return protocol;
}

console.log(parseProtocol('https://developer.mozilla.org/en-US/docs/Web/JavaScript'));

// USING ARRAY DESTRUCTURING ON ANY ITERABLE:
// since array distructuring calls the iterable protocol on the right-hand side, any iterable can 
// be destructured, not just arrays. 
var [a,b] = new Map([[1,2],[3,4]]);
console.log(a,b);

// Iterables are only iterated until all bindings are assigned:
var obj = {
  *[Symbol.iterator](){
    for(const v of [0,1,2,3]){
      console.log(v);
      yield v;
    }
  },
};

var [a,b] = obj;
console.log(a,b);

// The rest binding will eagerly evaluate though as it'll dump things into a new array instead of using
// the old iterable.
var [a,b,...rest] = obj;
console.log(a,b,rest);


// OBJECT DESTRUCTURING:
// BASIC
var user = {id:42,isVerified:true};
var {isVerified,id} = user;
console.log(id);
console.log(isVerified);

// ASSIGNING NEW VAR NAMES
var o = {p:42,q:true};
var {p:foo,q:bar} = o;
console.log(foo);
console.log(bar);

// DEFAULT VALUES IN OBJECTS 
var {a:aa=10,b:bb=5} = {a:3};
console.log(aa);
console.log(bb);

// UNPACKING PROPERTIES FROM OBJS PASSED AS FUNCTION PARAMS. This is what Radu was doing that got
// me interested in destructuring. 
// Objects passed into function parameters can also be unpacked into variables, which may then 
// be accessed within function body. As for object assignment, the destructuring syntax allows 
// for the new variable to have the same name or a different name than the original property, 
// and to assign default values for the case when the original object does not define the property.
var user = {
  id:42,
  displayName:'jdoe',
  fullName:{
    firstName:'Jane',
    lastName:'Doe',
  },
};
// notice the trailing commas for good practice

// Here we unpack a specific property into a var of the same name
const userID = ({id})=>id;
console.log(userID(user));

// Here we unpack a property and rename it to use in the function body
const userDisplayName = ({displayName:dname})=>dname;
console.log(userDisplayName(user));

// Here we unpack nested objects into other variable names 
const whois = ({displayName,fullName:{firstName:name}})=>`${displayName} is ${name}`;

console.log(whois(user));


// SETTING A FUNCTION PARAMS'S DEFAULT VALUE 
// as before we specify default values with '=' and will be used as variable values if a 
// specified property doesn't exist in the passed object. 
const drawChart = ({
  size='big',
  coords = {x:0,y:0},
  radius=25,
} = {}) =>{ // we even put a default for the entire object if nothing is given. 🤯🤯
  console.log(size,coords,radius);
}

drawChart({coords:{x:18,y:30},radius:30,});
drawChart();
// That was impressive 🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯


// NESTED OBJECTS AND ARRAY DESTRUCTURING 
const metadata = {
  title:'Scratchpad',
  translations:[
    {
      locale:'de',
      localizationTags:[],
      lastEdit:'2014-04-14T08:43:37',
      url:'/de/docs/Toos/Scratchpad',
      title:'JavaScript-Umgebung',
    },
  ],
  url:'/en-US/docs/Tools/Scratchpad',
};

var {title:englishTitle,translations:[{title:localeTitle},],} = metadata;
// note how we dug deep into the metadata and renamed things
console.log(englishTitle);
console.log(localeTitle);

// FOR OF ITERATION AND DESTRUCTURING 
const people = [
  {
    name:'Kevin Whiteside',
    family:{
      mother:'Delight Whiteside',
      father:'Raymond Whiteside',
      brother:'Keith Whiteside',
      sister:'Brooke Whiteside',
    },
    age:47,
  },
  {
    name:'Melany Made',
    family:{
      mother:'Melania Made',
      father:'who knows',
      brother:'Daniel Made',
    },
    age:25,
  },
  {
    name:'Odalis Whiteside',
    family:{
      mother:'Fransisca Lorenzo',
      father:'Oscar Lorenzo',
      brother:'Juan Carlos Lorenzo',
      sister:'Dolores Lorenzo',
    },
    age:49,
  },
];
for (const{name:n,family:{father:f}} of people){
  console.log(`Name: ${n}, Father: ${f}`);
}

// COMPUTED OBJECT PROPERTY NAMES AND DESTRUCTURING
// just like object literals we can destructure computed property names as well 
const key = 'z';
var {[key]:foo} = {z:'bar'};
console.log(foo);

// INVALID JAVASCRIPT IDENTIFIER AS A PROPERTY NAMES
// WE can also use destructuring for property names that aren't legal js identifiers, by giving 
// a legal identifier instead. This is handy.
var foo = {'fizz-buzz':true};
var {'fizz-buzz':fizzBuzz} = foo;
console.log(fizzBuzz);

// DESTRUCTURING PRIMITIVE VALUES 
// Obj destructuring is almost equivalent to property accessing. This means if you try to 
// destruct a primitive value, the value will get wrapped into the corresponding wrapper object 
// and the prop is accessed on the wrapper object.  So this is where I was noting yesterday the use 
// of methods and props like 'pop', 'push', 'length', etc in destructuring. 
var {a,toFixed} = 1;
console.log(a,toFixed);

// trying to destructure null or undefined will throw an TypeError. Even if we use an empty pattern. 

// COMBINED ARRAY AND OBJECT DESTRUCTURING 
// We can also combine both array and object destructuring. For example if we specifically want 
// the 3rd item below.
const props = [
  {id:1,name:'Fizz'},
  {id:2,name:'Buzz'},
  {id:3,name:'FizzBuzz'},
];
var [,,{name}] = props;
console.log(name);

// THE PROTOTYPE CHAIN IS LOOKED UP WHN THE OBJ IS DESCONSTRUCTED
var obj = {
  self:'123',
  __proto__:{
    prot:"456",
  },
};
console.log(obj);

var {self,prot} = obj;
console.log(self,prot);







