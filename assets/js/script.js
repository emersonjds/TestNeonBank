var claimCopy = ["Tipo um banco," + '<br/>' + "só que mais seguro."];

    document.addEventListener('DOMContentLoaded', function(){
      Typed.new('.first-title', {
        strings: claimCopy,
        typeSpeed: 70,
        backDelay: 4000,
        loop: true,
        contentType: 'html', 
        loopCount: false,
        backspace: function(curString, curStrPos){
          setTimeout(function() {
              if (self.arrayPos == 1){
                self.stopNum = 20;
              }
              else{
                self.stopNum = 0;
              }
            });
        }
      });
    });

