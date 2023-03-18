# Calculator Assignment

## Table of contents
- [Instructions](#instructions)
- [Page](#page)
- [Logic](#logic)
- [Group](#group)

## Instructions 
1. The calculator is going to contain functions for all of the basic math operators:
    1. add
    2. subtract
    3. multiply
    4. divide
2. Create a function `operate` that takes an operator and 2 numbers and then calls one of the above functions on the numbers. 
3. Create a basic HTML calculator with buttons for each digit, each of the above functions and an `Equals` key.
    1. There should also be a display for the calculator
    2. Add a `clear` butt
4. Create the functions that populate the display when you click the number buttons... you should be storing the 'display value' in a variable somewhere for use in the next step.
5. Make the calculator work! You'll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then `operate()` on them when the user presses the `=` key.
    1. You should already have the code that can populate the display, so once `operate()` has been called, update the display with the ‘solution’ to the operation. 
    2. Figure out how to store all the values and call the operate function with them. 
6. __Watch out for and fix these bugs__
    1. Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, ``12 + 7 - 5 * 3`` = should yield 42
    2. Your calculator should not evaluate more than a single pair of numbers at a time.
    3. You should round answers with long decimals so that they don’t overflow the screen.
    4. Pressing ``=`` before entering all of the numbers or an operator could cause problems!
    5. Pressing `clear` should wipe out any existing data.. make sure the user is really starting fresh after pressing `clear` 
    6. Display a snarky error message if the user tries to divide by 0... don't let it crash your calculator!

__Important__
* Users can get floating point numbers if they do the math required to get one, but they can't type them in yet. Add a `.` button and let users input decimals! Make sure you don't let them type more than one though: ``12.3.56.5.`` It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display) 
* Add a ``backspace`` button, so the user can undo if they click the wrong number.
* Add keyboard support

## Page
Check the calculator [here](https://noliv197.github.io/calculator-assignment/)

### Template 

<img src="https://i.imgur.com/YO5nrFF.png" alt="template">

## Logic
* ``operations.js``
    * class with all the operation logic;
    * the ``result`` function receives two numbers and an operator, it checks which operation to call base on the operator and returns the operation value; 
    * if the operation result is a float, the value returned is rounded to 2 decimals;
* ``script.js``
    * has all the DOM manipulation logic;
    * declares the calculator object that has initial values 
    * adds ``eventListener`` to all the buttons for clicks and keypress event;
    * every time the event is triggered it gets the keycode by either ``event.key`` function or by the ``dataset attribute`` value;
    * each code has a logic associated with
        * ``numbers``: display the number on the screen;
            * if the visor has 0 on the display, it erases the zero and display the number;
        * ``+ - / *``: checks what was the last action called, if the first value or operator have not being assigned yet, then the current number displayed is set as ``firstNumber`` and the operator value is stored;
            * if all the values for operation are setted, it calls the ``getResult()`` function;
        * ``=``: calls ``getResult()`` function that:
            * sets current number displayed to ``secondNumber`` variable, 
            * calculates the operation result, 
            * displayed the result on screen, 
            * ``firstNumber`` value receives the result value. 
            * If the operator, first or sencond value have not being defined, nothing happens;  
        * ``erase``: calls ``deleteChar()`` function that erases the last char on the display; 
            * If the value has only one algorithm it will display ``0``; 
        * ``clear``: calls ``clearAll()`` function that set all the variables to their initial values;
        * ``.``: display a dot on the display;
            * if the current number is 0, it returns ``0.``;
            * if the last action was a operator click, then ``0.`` is also displayed;



## Group
|David Ghizzi|Natalia Oliveira|Sharon Ettinger|
|------------|----------------|---------------|
|<img src="https://github.com/daveiho.png" alt="David github profile" width="100">|<img src="https://github.com/noliv197.png" alt="Natalia github profile" width="100">|<img src="https://github.com/SharonEttinger.png" alt="Sharon github profile" width="100">|
|[@daveiho](https://github.com/daveiho)|[@noliv197](https://github.com/noliv197)|[@SharonEttinger](https://github.com/SharonEttinger)|
