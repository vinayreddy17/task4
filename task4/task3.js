// Task 3: Simple Programs for Condition, Looping, and Arrays
  
  // Write a loop that makes seven calls to console.log to output the following triangle:
  // #
  // ##
  // ###
  // ####
  // #####
  // ######
  // #######
  for (let i = 1; i <= 7; i++) {
    console.log("#".repeat(i));
  }
  
  // Iterate through the string array and print its contents
  let strArray = [
    "<option>Jazz</option>",
    "<option>Blues</option>",
    "<option>New Age</option>",
    "<option>Classical</option>",
    "<option>Opera</option>"
  ];
  
  for (let str of strArray) {
    console.log(str);
  }
  
  // Arrays
  let myarray = [11, 22, 33, 44, 55];
  
  // Count the elements in the array (without using the length property)
  let count = 0;
  for (let index in myarray) {
    count++;
  }
  
  console.log(count); 
  
  // Declare an empty array
  let emptyArray = [];
  
  // Create an array called foods that holds the names of your top 20 favorite foods, starting with the best food
  let foods = [
    "Pizza",
    "Burger",
    "Pasta",
    "Ice Cream",
    "Sushi",
    "Steak",
    "Chocolate",
    "Cheesecake",
    "Fried Chicken",
    "Tacos",
    "Dumplings",
    "Ramen",
    "Curry",
    "Pancakes",
    "Biryani",
    "Cupcakes",
    "Donuts",
    "Nachos",
    "Chips",
    "Brownies"
  ];
  
  // Get the fifth favorite food
  console.log(foods[4]); 
  
  // Find the length of the foods array
  console.log(foods.length); 
  
  // Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”
  let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
  ];
  // not using datahandling name because need more functions below
  function changeName(arr, oldName, newName) {
    let index = arr.indexOf(oldName);
    if (index !== -1) {
      arr[index] = newName;
    }
  }
  
  changeName(friends, "Mari", "Munnabai");
  console.log(friends);
  
  // Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica
  const friends2 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
  ];
  
  for (let friend of friends2) {
    console.log(friend);
    if (friend === "CaptianAmerica") {
      break;
    }
  }
  
  // Find if a person is your friend or not
  function isFriend(friendsArray, name) {
    return friendsArray.includes(name);
  }
  
  let foundFriend = isFriend(friends2, "Jeff");
  console.log(foundFriend); // Output: true
  
  // We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list
  let friendsList1 = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];
  let friendsList2 = ["Gabbar", "Rajinikanth", "Mass", "Spiderman", "Jeff", "ET"];
  
  let combinedFriendsList = friendsList1.concat(friendsList2).sort();
  console.log(combinedFriendsList);
  
  

  // Task 2 - Array Operations

// Declare an array 'friends'

  
  // Get the first item, the middle item, and the last item of the array
  let firstItem = friends[0];
  let middleItem = friends[Math.floor(friends.length / 2)];
  let lastItem = friends[friends.length - 1];
  
  console.log(firstItem); 
  console.log(middleItem); 
  console.log(lastItem); 
  
  // Add your name to the end of the friends array and add another name to the beginning
  friends.push("Your Name");
  friends.unshift("Another Name");
  
  console.log(friends);
  
  // Add Mr or Ms to the names in the friends array
  friends = friends.map(name => {
    return `Mr/Ms ${name}`;
  });
  
  console.log(friends);
  
  // Concat all the names in the friends array and return as comma-separated string
  let allNames = friends.join(",");
  console.log(allNames);
  
  // Find the friends names who have the letter ‘a’ and return the list
  let namesWithA = friends.filter(name => name.includes("a"));
  console.log(namesWithA);
  
  // Find the average length of all the friends names
  let totalLength = friends.reduce((total, name) => total + name.length, 0);
  let averageLength = totalLength / friends.length;
  console.log(averageLength);
  
  // Find the names and return the list starting with the letter M
  let namesStartingWithM = friends.filter(name => name.startsWith("Mr/Ms M"));
  console.log(namesStartingWithM);
  
  // Find the name with the max characters and return the name
  let maxLengthName = friends.reduce((maxName, name) =>
    name.length > maxName.length ? name : maxName
  );
  console.log(maxLengthName);
  
  // Find the name with the min characters and return the name
  let minLengthName = friends.reduce((minName, name) =>
    name.length < minName.length ? name : minName
  );
  console.log(minLengthName);
  

  
  // Find the average in the array below (numbers only)
  const friendsInfo = [6, 12, "Mari", 1, true, "Munnabai", "200", "CaptianAmerica", 8, 10];
  
  let numbersOnly = friendsInfo.filter(item => typeof item === "number");
  let sum = numbersOnly.reduce((total, number) => total + number, 0);
  let average = sum / numbersOnly.length;
  console.log(average);
  
  
  
  // Print the contents of the input variable
  var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
  ];
  
  function dataHandling(input) {
    for (var i = 0; i < input.length; i++) {
      console.log(`ID: ${input[i][0]}`);
      console.log(`Name: ${input[i][1]}`);
      console.log(`City: ${input[i][2]}`);
      console.log(`Date of Birth: ${input[i][3]}`);
      console.log(`Hobby: ${input[i][4]}`);
      console.log("---");
    }
  }
  
  dataHandling(input);
  