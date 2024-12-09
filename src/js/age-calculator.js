import datepicker from "js-datepicker";
import { DateTime } from "luxon";

export const AgeCalculator = (() => {
  console.log("Age Calculator");

  const $calendar = document.getElementById("calendar");
  const $submitBtn = document.querySelector(".submit");
  const $showAge = document.querySelector(".show-age");

  const datePickerInstance = datepicker($calendar, {
    formatter: (input, date, instance) => {
      const value = date.toLocaleDateString()
      input.value = value // => '1/1/2000'
    }
  });

  const init = () => {
    console.log("Init Age Calculator");
    eventHandlers();
  };

  const eventHandlers = () => {
    $submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const birthdate = datePickerInstance.dateSelected;

      if (!birthdate) {
        $showAge.textContent = "Please select your birthdate.";
        return;
      }

      // Validación de fecha
      const dob = DateTime.fromJSDate(birthdate);
      if (!dob.isValid) {
        $showAge.textContent = "Invalid date format. Please use a valid date.";
        return;
      }

      const now = DateTime.now();
      const diff = now.diff(dob, ['years', 'months', 'days']);

      const years = Math.floor(diff.years);
      const months = Math.floor(diff.months);
      const days = Math.floor(diff.days);

      $showAge.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
    });
  };

  return {
    init,
  };
})();