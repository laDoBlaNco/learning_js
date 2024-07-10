const data = {
  location: ''
}

// code that uses the data object
data.location = 'Santo Domingo';
console.log(data);
console.log(data.location);


console.log('=============================================================')
// with custom getters and setters we can create code taht overrides the basics above, so code is run when we set or get a value
// For example if we want to do some data munging or validation before we set or get our data
// We could do all of this with manually, but it would rely no the user to do these things with the object. With Getters and Setters we get it
// in the background so the user doesn't have to worry about it.

const data2 = {
  locations: [],
  get location() {
    return this._location;
  }, // note the ',' It must be used with getter and setters as they are not methods, they are property objects.
  set location(value) {
    // since location is already used for our getter and setter object, we just need to store it somewhere else. Since it's internal we can do _location
    this._location = value.trim();
    // with the custom setters we can also do more complicated things such as keep a history of everywhere we've been rather than just change the value
    this.locations.push(this._location);
  }
}
// note that the code below is the same, except for the whitespace added to the value (what the user will do) is the same, but the result is customized
data2.location = '     Santo Domingo    ';
data2.location = 'Santiago    ';
data2.location = '   Puerto Rico   ';
console.log(data2);
console.log(data2.location);
