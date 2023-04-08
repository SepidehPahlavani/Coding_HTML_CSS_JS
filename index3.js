$('.tab').on("click", function(){
  
    if ($(this).hasClass("tab1")){
      // commented this line
      $(".tab1").addClass("active");
      $(".tab2").removeClass("active");
      $(".tab3").removeClass("active");
      $("#tabContent1").css("display", "block");
      $("#tabContent2").css("display", "none");
      $("#tabContent3").css("display", "none");
      element = document.querySelector('#tab1');
      element.style.color = '#F5DEE0';
      element = document.querySelector('#tab2');
      element.style.color = '#3C4390';
      element = document.querySelector('#tab3');
      element.style.color = '#3C4390';
    }
    else if ($(this).hasClass("tab2")){
      $(".tab2").addClass("active");
      $(".tab1").removeClass("active");
      $(".tab3").removeClass("active");
      $("#tabContent2").css("display", "block");
      $("#tabContent1").css("display", "none");
      $("#tabContent3").css("display", "none");
      element = document.querySelector('#tab2');
      element.style.color = '#F5DEE0';
      
      element = document.querySelector('#tab1');
      element.style.color = '#3C4390';
      element = document.querySelector('#tab3');
      element.style.color = '#3C4390';
      
    }
    else if ($(this).hasClass("tab3")){
        $(".tab3").addClass("active");
        $(".tab1").removeClass("active");
        $(".tab2").removeClass("active");
        $("#tabContent3").css("display", "block");
        $("#tabContent1").css("display", "none");
        $("#tabContent2").css("display", "none");
        element = document.querySelector('#tab3');
        element.style.color = '#F5DEE0';
        
        element = document.querySelector('#tab1');
        element.style.color = '#3C4390';
        element = document.querySelector('#tab2');
        element.style.color = '#3C4390';
      }
  });