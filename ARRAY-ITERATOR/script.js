// const mastermind = games.find(toy => toy.name === 'Mastermind');


const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  
  // Array.prototype.filter()
  // 1. Filter the array of inventors into a new array containing only the inventors born in the 1500's
  const born1500 = inventors.filter(birthFilter);
  
  function birthFilter(inventor){
    return (inventor.year >= 1500 && inventor.year < 1600 )
  };
  console.log(born1500);

  // Array.prototype.map()
  // 2. Map the array of the inventors into a new array containing objects with just the first and last names as properties
  // Hint:  Return a new object literal from the callback (don't mutate the object being passed in to map)
  const inventorNames = inventors.map(function(inventor) {
    return {
        first: inventor.first,
        last: inventor.last
    };
  });
  console.log(inventorNames)
  
  // Array.prototype.sort()
  // 3. Sort the inventors by birth date (year property), in ascending order
  const birthYearSort = inventors.sort((a, b) => a.year - b.year);
  console.log(birthYearSort);
  
  // Array.prototype.find()
  // 4. Find the inventor object with the first name of 'Ada'
  const inventorAda = inventors.find(inventor => inventor.first === "Ada" );
  console.log(inventorAda)
  
  // Array.prototype.reduce()
  // 5. How many years did all the inventors live?
  const sumLivedyears = inventors.reduce((acc, inventor) => {
    const yearsLived = inventor.passed - inventor.year;
    return yearsLived + acc;
  }, 0);
  console.log(sumLivedyears);
  
  
  const people = [
    'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
    'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
    'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
    'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
    'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
    'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
    'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
    'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
    'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
    'Blake, William'
  ];
//   console.log(people);
  // Array.prototype.map()
  // 6. Map the people array such that the new array consists of strings with the names formatted as "First Last", e.g., "Becker, Carl" should be mapped to "Carl Becker".
  // Hint: As a start, consider using the String.prototype.split method to "split" the string using ', ' as the separator
  const fullName = people.map((name) =>{
    const [lastName, firstName] = name.split(", ");
    return `${firstName} ${lastName}`;
  });
  console.log(fullName);
  
  
  const data = [
    'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
    'bike', 'walk', 'car', 'van', 'car', 'truck'
  ];
  
  // Array.prototype.reduce()
  // 7. Count the number of instances for each of the data items. The reduce should return an object where the keys are 'car', 'truck', etc. and the values are the count.
  // Hint: Since you want to return an object, be sure to pass an empty {} for the initial value of the "accumulator".
  const instancelist = data.reduce((acc, type) =>{
    acc[type] = acc[type] ? acc[type] + 1 : 1;
    return acc
  }, {});
  console.log(instancelist);
  
  const devs = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
  
  // Array.prototype.some()
  // 8. Check if at least one person is 19 or older?
  // Hint: To get today's year, use the getFullYear method of new Date(), i.e., new Date().getFullYear()
  const currentYear = new Date().getFullYear();
  
  const is19Plus = devs.some(dev => currentYear - dev.year >= 19);
  console.log(is19Plus);
  
  // Array.prototype.every()
  // 9. Check if everyone is 19 or older?

  const all19Plus = devs.every(dev => currentYear - dev.year >= 19);
  console.log(all19Plus);
  
  
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
  
  // Array.prototype.find()
  // 10. Find the comment with the id of 823423
  const foundId = 823423
  const commentGrab = comments.find(comment => comment.id === foundId);
  console.log(commentGrab);
  
  // Array.prototype.findIndex()
  // 11. Find the index of the comment with an id of 123523
  const foundIdx = 123523
  const commentGrabIdx = comments.findIndex(comment => comment.id === foundIdx);
  console.log(commentGrabIdx);
  
  