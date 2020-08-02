// closes the panel on click outside
var container = $('#contact-panel');

$(container).on("click", function (e) {
    if (!container.is(e.target) // if the target of the click isn't the container...
    && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
        container.removeClass('is-active');
      } 
  });
  
  