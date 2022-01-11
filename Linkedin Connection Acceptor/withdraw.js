setInterval(()=>{
   for(var i = 0; i < 10; i = i + 1)
   {
      function demo() {
         document
         .querySelectorAll(
         '.invitation-card__action-btn.artdeco-button--tertiary')[0].click();
         return Promise.resolve("Success");
       }
       demo().then(
         (message) => {
           document
            .querySelectorAll(
            '.artdeco-button--primary')[0].click();
         }
       )
   
}},1000)
