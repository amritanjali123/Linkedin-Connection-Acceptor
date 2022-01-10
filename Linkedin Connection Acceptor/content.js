

(function() {
        //alert("Hello")
        var connection = document
        .querySelectorAll(
        '.invitation-card__action-btn.artdeco-button--secondary');
        
        for(var i = 0; i < connection.length; i = i + 1)
           connection[i].click();

        document.body.appendChild(connection); 
  })();
