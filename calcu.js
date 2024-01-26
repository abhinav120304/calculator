document.addEventListener("DOMContentLoaded", function () {
    const calculatorForm = document.forms.CALCULATOR;
    const display = calculatorForm.display;
  
    // Attach click event listeners to all buttons
    const buttons = document.querySelectorAll(".button");
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        handleButtonClick(button.value);
      });
    });
  
    // Function to handle button clicks
    function handleButtonClick(value) {
      switch (value) {
        case "=":
          // Evaluate the expression using eval and update the display
          try {
            display.value = eval(display.value);
          } catch (error) {
            display.value = "Error";
          }
          break;
        case "C":
          // Clear the display
          display.value = "";
          break;
        default:
          // Append the button value to the display
          display.value += value;
      }
    }
  });
  