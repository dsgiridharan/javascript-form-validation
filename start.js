var subjectObject = {
  india: {
    tamilnadu: ["chennai", "madurai", "Tiruchy"],
    kerala: ["kochi", "Munnar", "alapuzha"],
    karnataka: ["banglore", "jain nagar", "hampi"],
  },
  usa: {
    newyork: ["edison", "princeson", "newark"],
    washington: ["arlington", "sprin field", "silver spring"],
    califonria: ["san deigo", "los angeles", "san jose"],
  },
};
window.onload = function () {
  var countrySel = document.getElementById("country");
  var stateSel = document.getElementById("state");
  var citySel = document.getElementById("city");
  for (var x in subjectObject) {
    countrySel.options[countrySel.options.length] = new Option(x, x);
  }
  countrySel.onchange = function () {
    citySel.length = 1;
    stateSel.length = 1;
    for (var y in subjectObject[this.value]) {
      stateSel.options[stateSel.options.length] = new Option(y, y);
    }
  };
  stateSel.onchange = function () {
    citySel.length = 1;
    var z = subjectObject[countrySel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      citySel.options[citySel.options.length] = new Option(z[i], z[i]);
    }
  };
};
