var slideIndex1 = 1;
        showSlides1(slideIndex1);
        function plusSlides1(n) {
          showSlides1(slideIndex1 += n);
        }
        function showSlides1(n) {
          var i1;
          var slides1 = document.getElementsByClassName("mySlides1");
          if(n > slides1.length) {
            slideIndex1 = 1
          }
          if(n < 1) {
            slideIndex1 = slides1.length
          }
          for(i1 = 0; i1 < slides1.length; i1++) {
            slides1[i1].style.display = "none";
          }
          
          slides1[slideIndex1 - 1].style.display = "block";
        }
        var slideIndex2 = 1;
        showSlides2(slideIndex2);
        function plusSlides2(n) {
          showSlides2(slideIndex2 += n);
        }
        function showSlides2(n) {
          var i2;
          var slides2 = document.getElementsByClassName("mySlides2");
          if(n > slides2.length) {
            slideIndex2 = 1
          }
          if(n < 1) {
            slideIndex2 = slides2.length
          }
          for(i2 = 0; i2 < slides2.length; i2++) {
            slides2[i2].style.display = "none";
          }
          
          slides2[slideIndex2 - 1].style.display = "block";
        }