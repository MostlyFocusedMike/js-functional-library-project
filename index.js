fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      for (const el in collection) {
        iteratee(collection[el]);
      }
      return collection;
    },

    map: function(collection, iteratee) {
      const newArr = [];
      for (const el in collection) {
        newArr.push(iteratee(collection[el]));
      }
      return newArr;
    },

    reduce: function(collection, iteratee, acc = 0) {
      for (const el in collection) {
        acc = iteratee(acc, collection[el], collection);
      }
      return acc;
    },

    find: function(collection, predicate) {
      for (const el in collection) {
        let match = predicate(collection[el])
        if (match) {
          return collection[el];
        }
      }
    },

    filter: function(collection, predicate) {
      const newCollection = [];
      for (const el in collection) {
        console.log("el:" + el);
        console.log("collection:" + collection);
        if (predicate(collection[el])) {
          newCollection.push(collection[el]);
        }
      }
      return newCollection;
    },

    size: function(collection) {
      return Object.keys(collection).length;
    },

    first: function(arr, n=1) {
      return (n === 1) ? arr[0] : arr.slice(0,n);
    },

    last: function(arr, n=1) {
      return (n === 1) ? arr[(arr.length-1)] : arr.slice(-1*n);
    },

    compact: function(arr) {
      return this.filter(arr, function(x) { if (x) { return x; } });
    },

    sortBy: function(arr, iteratee) {
      return [...arr].sort(function(a,b) {return iteratee(a) - iteratee(b)})
    },

    keys: function(obj) {
      return Object.keys(obj)
    },

    values: function(obj) {
      return Object.values(obj)
    },
    functions: function() {

    },

  }
})()

fi.libraryMethod()
