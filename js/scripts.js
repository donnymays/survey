$(document).ready(function() {
  $("#formOne").submit(function() {
    const name = $("input#name").val();
    const dob = $("#born").val();
    const beverage = $("#beverage").val();
    const flavor = $("input:radio[name=flavor]:checked").val();
    const favoriteColor = $("#color").val();
  });
});