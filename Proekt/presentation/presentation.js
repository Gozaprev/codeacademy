function Presentation() {
  this.business = new BusinessLayer();
  this.data = {}

  // console.log(data);
  this.displayApi = async () => {

    this.data = await this.business.resolveApiData();
    var data = this.data;
    // var posts = await this.business.populateApiData();
    console.log(data);
    for (var index = 0; index < data.length; index++) {

      var body = $("body");
      var root = $("<div>").attr('class', 'container');
      body.append(root);
      //   var title1 = $("<h1>")
      //   .text(data.title)
      //   body.append(title1);
      var mag = $("<div>").attr('class', 'divwrap').text("The Magnidue is: " + data[index].Mag);
      console.log(mag);
      //   .text(id.title)
      //   body.append(id);
      root.append(mag);
      var dept = $("<div>").attr('class', 'divwrap').text("The Depth is: " + data[index].Depth);
      root.append(dept);
      var tajm = $("<div>").attr('class', 'divwrap').text("The Time is: " + data[index].Time);
      root.append(tajm);
      var lokal = $("<div>").attr('class', 'divwrap').text("The Locality is: " + data[index].Locality);
      root.append(lokal);

    }

  }
    //   console.log(data);


  this.displayHeader = async () => {
    var data = await this.business.resolveApiData();

    console.log(data);
    var header = $('<header>').attr('class', 'header');
    $('body').append(header);
    var divhead = $('<div>').attr('class', 'divhead');
    $('header').append(divhead);
    divhead.text('EARTHQUAKES');

    var searchValue;
    var input = $('<input>').attr('class', 'hedinput');


    $('header').append(input);


    var baton = $('<button>').attr('class', 'baton').html('Search').on("click", (event) => {

      const searchTerm = $('input').val();
      console.log(data)
      var body = $("body");

      $(".container").empty();

      for (let index = 0; index < data.length; index++) {

        if (data[index].Mag.toString().split(".")[0].includes(searchTerm)) {


          var root = $("<div>").attr('class', 'container');
          body.append(root);
          //   var title1 = $("<h1>")
          //   .text(data.title)
          //   body.append(title1);
          var mag = $("<div>").attr('class', 'divwrap').text("The Magnidue is: " + data[index].Mag);
          console.log(mag);
          //   .text(id.title)
          //   body.append(id);
          root.append(mag);
          var dept = $("<div>").attr('class', 'divwrap').text("The Depth is: " + data[index].Depth);
          root.append(dept);
          var tajm = $("<div>").attr('class', 'divwrap').text("The Time is: " + data[index].Time);
          root.append(tajm);
          var lokal = $("<div>").attr('class', 'divwrap').text("The Locality is: " + data[index].Locality);
          root.append(lokal);

        }

      }

    })
    $('header').append(baton);
    // var divheadh = $('<h1>');
    // var magnitude = $("<div>").text()

  }

  //   this.displayMainBody = () => {
  // var left = $('<div').attr('class', 'leftdiv');
  // $('body').append(left).text();


  //   }


}

