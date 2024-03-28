const form = document.getElementById('form');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');
const result = document.getElementById('result');
const animationContainer = document.getElementById('animation-container');

// Define animation data
const animationData = [
  {
    inputVal: 'number', // corrected the typo here
    marginTop: -500,
    addElDelay: 10,
    msg: 'Roberto Perez',
    showMsgDelay: 100,
    removeElDelay: 1000,
  },
  {
    inputVal: 'number', // corrected the typo here
    marginBottom: 200,
    addElDelay: 15,
    msg: 'Front End  & Back End ',
    showMsgDelay: 100,
    removeElDelay: 1000,
  },
  {
    inputVal: 'number', // corrected the typo here
    marginTop:200,
    addElDelay: 30,
    msg: 'Full Stack Development',
    showMsgDelay: 100,
    removeElDelay: 1000,
  }
];

// Function to convert a number to Roman numeral
const convertToRoman = num => {
  const ref = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  const res = [];

  ref.forEach(function (arr) {
    while (num >= arr[1]) {
      res.push(arr[0]);
      num -= arr[1];
    }
  });

  return res.join('');
};


// Function to validate input
const isValid = (str, int) => {
  let errText = '';

  if (!str || str.match(/[e.]/g)) {
    errText = 'Please enter a valid number.';
  } else if (int < 1) {
    errText = 'Please enter a number greater than or equal to 1.';
  } else if (int > 3999) {
    errText = 'Please enter a number less than or equal to 3999.';
  } else {
    // No errors detected
    return true;
  }

  // Handle error text and output styling
  output.innerText = errText;
  output.classList.add('alert');

  return false;
};


// Function to clear output
const clearOutput = () => {
  output.innerText = '';
  output.classList.remove('alert');
};


// Event listener for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();  
  updateUI();
});

// Event listener for convert button click
convertButton.addEventListener('click', () => {   
  updateUI();
  showAnimation();
});

// Function to update the UI
const updateUI = () => {
  const numStr = document.getElementById('number').value;
  const int = parseInt(numStr, 10);
  output.classList.remove('hidden');
  clearOutput();
  if (isValid(numStr, int)) {
    output.innerText = convertToRoman(int);
  }
};

//Animation

// Function to show animation
const showAnimation = () => {
  animationData.forEach((obj, index) => {
    setTimeout(() => {
      // Create a new element
      const newElement = document.createElement('div');
      newElement.classList.add('animation-frame');
      newElement.style.marginTop = `${obj.marginTop}px`;

      // Set the content of the element
      newElement.textContent = obj.msg;

      // Append the element to the animation container
      animationContainer.appendChild(newElement);

      // After a delay, remove the element
      setTimeout(() => {
        newElement.remove();
      }, obj.removeElDelay - obj.showMsgDelay);
    }, obj.addElDelay + (index * 10000)); // Adjust the delay based on index
  });
};

// Call the function to start the animation
showAnimation();