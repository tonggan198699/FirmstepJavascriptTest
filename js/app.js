/* Using AJAX to retrieve JSON data from products.json file and
  uses template string to join all relevant information and storing
  it onto an empty array before appending it to the html body.
*/
$.getJSON("products.json", function(obj) {
    var items = [];
    $.each(obj, function(key, value) {
      items.push(`
                      <li rel="${value.specs["manufacturer"]} ${value.specs["storage"]} ${value.specs["os"]} ${value.specs["camera"]}"
                      id="${value.id}">
                          <a href="#" class="product-photo">
                            <img src="${value.image["small"]}" height="130" alt="${value.name}">
                          </a>
                          <h2><a href="#">${value.name}</a></h2>
                            <ul class="product-description">
                              <li><span>Manufacturer: </span>${value.specs["manufacturer"]}</li>
                              <li><span>Storage: </span>${value.specs["storage"]} GB</li>
                              <li><span>OS: </span>${value.specs["os"]}</li>
                              <li><span>Camera: </span>${value.specs["camera"]} Mpx</li>
                              <li><span>Description: </span>${value.description}</li>
                            </ul>
                          <p class="product-price">£${value.price}</p>
                        </li>
                      `);
                    });

              $( "<ul/>", {
                "class": "products-list",
                html: items.join( "" )
              }).appendTo( "body" );
          });


/* Phone Filter
  By passing in rel values and matching it to the id of each individual checkbox
  It then appends to the li element with either 'display:none' or 'display:inline-block'
  depending on the filter match results.
*/
var filters = '.filter-criteria1,.filter-criteria2,.filter-criteria3,.filter-criteria4';
$(filters).delegate('input[type=checkbox]', 'change', function() {

  let $lists = $('.products-list > li'),
      $checked = $('input:checked');
  if ($checked.length) {
      var selector = '';
      $($checked).each(function(index, element) {
          selector += "[rel~='" + element.id + "']";
      });
      $lists.hide();
      $('.products-list > li').filter(selector).show();
  } else {
      $lists.show();
  }

  // To check if filter has no results
  if( $('.products-list > li').is(':visible') ) {
      // do nothing
  }else {
    alert("Sorry! there are no phones matching your results, please try again");
  }

});

// Clear filter button to reset the filter
$("#clear-filters").click(function(){
    $( "input:checkbox:checked" ).prop( "checked", false );
});
