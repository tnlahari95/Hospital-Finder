
init()
function init() {
  var url = "https://api.covid19api.com/summary"

  var apidata = ``
  $.get(url, function (apidata) {
    console.log(apidata.Global)

    apidata = `
      <td>${apidata.Global.NewConfirmed}</td>
      <td>${apidata.Global.TotalConfirmed}</td>
      <td>${apidata.Global.NewDeaths}</td>
      <td>${apidata.Global.TotalDeaths}</td>
      <td>${apidata.Global.NewRecovered}</td>
      <td>${apidata.Global.TotalRecovered}</td>
      
      `
    $("#apidata").html(apidata)
  });

  var apiusdata = ``
  $.get(url, function (apiusdata) {
    console.log(apiusdata.Countries[181], "United States of America")

    apiusdata = `
      <td>${apiusdata.Countries[181].NewConfirmed}</td>
      <td>${apiusdata.Countries[181].TotalConfirmed}</td>
      <td>${apiusdata.Countries[181].NewDeaths}</td>
      <td>${apiusdata.Countries[181].TotalDeaths}</td>
      <td>${apiusdata.Countries[181].NewRecovered}</td>
      <td>${apiusdata.Countries[181].TotalRecovered}</td>
      
      `
    $("#apiusdata").html(apiusdata)
  });
}


function clearData() {
  $("#apidata").empty
  $("#apiusdata").empty
}

function refreshData() {
  clearData()
  init()
}
