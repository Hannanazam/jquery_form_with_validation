$(document).ready(function($) {
        
				$("#register-form").validate({
                rules: {
                    name: "required",                    
                    password: {
                        required: true,
                        minlength: 6
                    },
                   city: "required",
                  gender: "required"
                 
                },
                messages: {
                    name: "Please enter your Name",                   
                    password: {
                        required: "Please provide a password",
                        minlength: "Your password must be at least 6 characters long"
                    },
                  city: "Please enter your city",
                  gender: "This field is required"
                },
                 errorPlacement: function(error, element) 
        {
            if ( element.is(":radio") ) 
            {
                error.appendTo( element.parents('.form-group') );
            }
            else 
            { // This is the default behavior 
                error.insertAfter( element );
            }
         },
                submitHandler: function(form) {
                    form.submit();
                }
                
            });
    });