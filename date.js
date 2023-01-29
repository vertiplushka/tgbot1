function formatDate(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
  
    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    var yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;
  
    return dd + '.' + mm + '.' + yy;
  }
  
  var a = new Date();
  console.log( formatDate(a) );

  var b = new Date();
  b.setDate(b.getDate() + 1)
  console.log( formatDate(b) );
  

  var c = new Date();
  c.setDate(c.getDate() + 2)
  console.log( formatDate(c) );


  var d = new Date();
  d.setDate(d.getDate() + 4)
  console.log( formatDate(d) );