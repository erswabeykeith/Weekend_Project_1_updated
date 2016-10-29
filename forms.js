$(document).ready(function() {
    var array = [];
    var totalEmployeeSalaries = 0
    $('#employeeinfo').on('submit', function(event) {
      event.preventDefault();

      // initialize a new variable as an empty object
      var values = {};

      // convert the form inputs into an array
      var fields = $('#employeeinfo').serializeArray();

      // iterate over the array and transfer each index into a new property on an object with the value of what was entered.
      fields.forEach(function(element, index, array) {
        // review index notation vs. dot notation on objects
        // here, dot notation wouldn't work
        values[element.name] = element.value;
      });

      console.log(values);

      // clear out inputs
      $('#employeeinfo').find('input[type=text]').val('');

      // append to DOM


       totalEmployeeSalaries += parseInt(values.employeeYearlySalary);

       appendDom(values, totalEmployeeSalaries);

       console.log(totalEmployeeSalaries);
    });

    function appendDom(empInfo, totalEmployeeSalaries) {
      $('#tableInfo').append('<tr><tr>');
      var $el = $('#tableInfo').children().last();

      $el.append('<td>' + empInfo.employeefirstname + '</td');
      $el.append('<td>' + empInfo.employeelastname + '</td>');
      $el.append('<td>' + empInfo.employeeID + '</td');
      $el.append('<td>' + empInfo.employeeJobTitle + '</td>');
      $el.append('<td>' + empInfo.employeeYearlySalary + '</td>');

      $('#monthlySalary').remove();
      $('#totalSalaries').append('<p id="monthlySalary">' + '$' + totalEmployeeSalaries/12 + '</p>');
    }
});
