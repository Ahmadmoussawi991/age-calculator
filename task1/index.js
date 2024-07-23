let click = document.getElementById("click");
click.onclick = () => {
  let birthdate = document.getElementById("birthdate").value;
  let birth = new Date(birthdate);
  let today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  let month = today.getMonth() - birth.getMonth();
  let day = today.getDate() - birth.getDate();

  if (month < 0 || (month === 0 && day < 0)) {
    age--;
  }

  if (day < 0) {
    month--;
    let daysInLastMonth = getDaysInMonth(today.getFullYear(), today.getMonth());
    day += daysInLastMonth;
  }

  if (month < 0) {
    month += 12;
  }

  let resultElement = document.getElementById("result");
  resultElement.innerHTML = `You are ${age} years, ${month} months, and ${day} days old.`;
};

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}