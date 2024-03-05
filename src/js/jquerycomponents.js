$(document).ready(function() {
    //ФОРМА ДЛЯ НОМЕРА ТЕЛЕФОНА

    $('.phone-field').inputmask("+7(999)999-9999");
    
    // добавляем правило для валидации телефона
    jQuery.validator.addMethod("checkMaskPhone", function(value, element) {
        return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value); 
    });
     
    // получаем нашу форму по class
    var form = $('.info-form__form');
    
    // включаем валидацию в форме
    form.validate();
    
    // вешаем валидацию на поле с телефоном по классу
    $.validator.addClassRules({
        'phone-field': {
            required: true,
            checkMaskPhone: true,
        },
        'name-info': {
            required: true,
        },
    }); 
 

     //E-mail Ajax Send
    $(".info-form__form").submit(function() { //Change
        if (form.valid()) {
            var th = $(this);
            const curentPopup = document.getElementById('popup');
            popupOpen(curentPopup);
            $.ajax({
                type: "POST",
                url: "php/mail.php", //Change
                data: th.serialize()
            }).done(function() {
                //alert("Thank you!");
                //hiddenAlertPopup();
                setTimeout(function() {
                    // Done Functions
                    alert("Thank you!");
                    //hiddenAlertPopup();
                    th.trigger("reset");
                }, 100);
            });
            return false;};
    }); 
});





