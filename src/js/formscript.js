//jquery для number age макс символов 2 чтобы поставить
$('body').on('input', 'input[type="number"][maxlength]', function(){
	if (this.value.length > this.maxLength){
		this.value = this.value.slice(0, this.maxLength);
	}
});
//ФОРМА ДЛЯ НОМЕРА ТЕЛЕФОНА

$(document).ready(function() {

    $('.phone-field').inputmask("+7(999)999-9999");
    
    // добавляем правило для валидации телефона
    jQuery.validator.addMethod("checkMaskPhone", function(value, element) {
        return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value); 
    });
     
    // получаем нашу форму по class
    
    // включаем валидацию в форме
    var formSec = $('.third-section__form').validate();
    
    // вешаем валидацию на поле с телефоном по классу
    $.validator.addClassRules({
        'fullname': {
            required: true,
        },
        'email': {
            required: true,
            email: true,
        },
        'phone-field': {
            required: true,
            checkMaskPhone: true,
        },
        'age': {
            required: true,

            range: [18, 99],
        },
        'city': {
            required: true,
        },
    }); 

     //E-mail Ajax Send
    $(".third-section__form").submit(function() { //Change
        if (formSec.valid()) {
            var th = $(this);
            const curentPopup = document.getElementById('popup');
            popupOpen(curentPopup)
            $.ajax({
                type: "POST",
                url: "php/mail.php", //Change
                data: th.serialize()
            }).done(function() {
                //alert("Thank you!");
                //hiddenAlertPopup();
;
                setTimeout(function() {
                    // Done Functions
                    //hiddenAlertPopup();
                    th.trigger("reset");
                }, 100);
            });
            return false;};
    }); 
});
