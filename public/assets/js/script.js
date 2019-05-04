console.log('its attatched');

function sendBurger() {
  let newBurger = $('#newBurger').val();

  $('#submit').click(function () {

    $.ajax({
      url: "/insertOne",
      global: false,
      type: "POST",
      data: ({ "burger_name": + "'" + newBurger + "'" }),
      datatype: "application/json"
    });



  });


  console.log(newBurger);
}