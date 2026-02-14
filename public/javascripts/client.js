// Function that inserts a special character at the current cursor position
function input(key) {
    var tbInput = document.getElementById("tbInput");
    var start = tbInput.selectionStart;
    var end = tbInput.selectionEnd;
    tbInput.value = tbInput.value.substring(0, start) + key.value + tbInput.value.substring(end);
    var newPos = start + key.value.length;
    tbInput.focus();
    tbInput.setSelectionRange(newPos, newPos);
}

$('#uppercaseKey').click(function(e) {
    e.preventDefault();
    var here = $('#VirtualKey');
    $('.btn', here).not(this).toArray().forEach(function (btn) {
        btn.defaultValue = btn.defaultValue.toUpperCase() === btn.defaultValue ? btn.defaultValue.toLowerCase() : btn.defaultValue.toUpperCase();
    });
    $('#tbInput').focus();
});

// uncheck checkboxes when "all" is selected
$('input.all-checkbox').on('change', function() {
    $('input.topic-checkbox').not(this).prop('checked', false);  
    checkboxHandler();
});

// uncheck the "all" checkbox when another box is checked
$('input.topic-checkbox').on('change', function() {
    $('input.all-checkbox').prop('checked', false);
    checkboxHandler();
});

// Calculate the maximum number of questions
function checkboxHandler() {
    var maxValue = 0;
    var inputElements = document.getElementsByClassName('topic-checkbox');
    var allCheckbox = document.getElementById('checkbox-all');
    
    if (allCheckbox.checked) {
        $('#numOfQuestions').attr("max", allCheckbox.value);
        return;
    }
    for (var i = 0; i < inputElements.length; i++) {
        if (inputElements[i].checked) {
            maxValue += Number(inputElements[i].value);
        }
    }
    $('#numOfQuestions').attr("max", maxValue);
}

// Go to next page when pressing the "Enter" key
$('#answerBody').keyup(function(event) {
    if (event.which === 13) {
        document.getElementsByClassName("nextPage")[0].click();
    }
});
$('.answerBody').keyup(function(event) {
    if (event.which === 13) {
        document.getElementsByClassName("nextPage")[0].click();
    }
});

// Validate password
var password         = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");

function validatePassword(){
    if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        confirm_password.setCustomValidity('');
    }
}

if (password && confirm_password) {
    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;    
}

// var offset = - new Date().getTimezoneOffset()/60;
// Cookies.set('tzoffset', offset, { expires: 7 });