var ClientFormValidation = function () {
    var handleValidation1 = function () {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation

        var form1 = $('#form_sample_1');
        var error1 = $('.alert-danger', form1);
        var success1 = $('.alert-success', form1);
        form1.validate({
            ignore: [],
            errorClass: 'error',
            validClass: 'success',
            errorElement: 'span',
            rules: {
                name: {
                    minlength: 2,
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                textarea: {
                    required: true,
                    email: true
                },
                field: {
                    required: true,
                    phoneUS: true
                },
                url: {
                    required: true,
                    url: true
                },
                number: {
                    required: true,
                    number: true
                },
                digits: {
                    minlength: 4,
                    required: true,
                    digits: true
                },
                creditcard: {
                    required: true,
                    creditcard: true
                },
                occupation: {
                    minlength: 5
                },
                category: {
                    required: true
                },
            },
            invalidHandler: function (event, validator) {
                $('#errorDiv').show();
                success1.hide();
                error1.show();
                $(this).find('input[type=submit]').removeAttr('disabled');
                //App.scrollTo(error1, -200);
            },
            highlight: function (element, errorClass, validClass) {
                $(element).parents('div.check-val').addClass(errorClass);
                $(element).parents('div.check-val').next('div.' + validClass).fadeOut();
                $('#autocomplete-error').html('');
                $('#autocomplete-error').hide();
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).parents('div.check-val').removeClass(errorClass);
                $(element).parents('div.check-val').next('div.' + validClass).fadeIn();
            },
            success: function (label) {
                label
                        .closest('.validation').removeClass('has-error'); // set success class to the control group

            },
            submitHandler: function (form) {
                $('#errorDiv').hide();
                form.submit();
                $('#Submit').attr('disabled', 'disabled');
                $('.showLoder').show();
                $('#opacitylow').css({'opacity': 0.5});
                $('.showLoder').css({'opacity': 2.0});

            }
        });
    };
        var handleValidation10 = function () {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation

        var form1 = $('#addprofileform');
        var error1 = $('.alert-danger', form1);
        var success1 = $('.alert-success', form1);
        form1.validate({
            ignore: [],
            errorClass: 'error',
            validClass: 'success',
            errorElement: 'span',
            rules: {
                name: {
                    minlength: 2,
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                textarea: {
                    required: true,
                    email: true
                },
                field: {
                    required: true,
                    phoneUS: true
                },
                url: {
                    required: true,
                    url: true
                },
                number: {
                    required: true,
                    number: true
                },
                digits: {
                    minlength: 4,
                    required: true,
                    digits: true
                },
                creditcard: {
                    required: true,
                    creditcard: true
                },
                occupation: {
                    minlength: 5
                },
                category: {
                    required: true
                },
            },
            invalidHandler: function (event, validator) {
                $('#errorDiv').show();
                success1.hide();
                error1.show();
                $(this).find('input[type=submit]').removeAttr('disabled');
                //App.scrollTo(error1, -200);
            },
            highlight: function (element, errorClass, validClass) {
                $(element).parents('div.check-val').addClass(errorClass);
                $(element).parents('div.check-val').next('div.' + validClass).fadeOut();
                $('#autocomplete-error').html('');
                $('#autocomplete-error').hide();
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).parents('div.check-val').removeClass(errorClass);
                $(element).parents('div.check-val').next('div.' + validClass).fadeIn();
            },
            success: function (label) {
                label
                        .closest('.validation').removeClass('has-error'); // set success class to the control group

            },
            submitHandler: function (form) {
                $('#errorDiv').hide();
                form.submit();
//                $('#Submit').attr('disabled', 'disabled');
//                $('.showLoder').show();
//                $('#opacitylow').css({'opacity': 0.5});
//                $('.showLoder').css({'opacity': 2.0});
            }
        });
    };
    var handleValidation3 = function () {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation

        var form1 = $('#updateEditJobAlertPopUp');
        var error1 = $('.alert-danger', form1);
        var success1 = $('.alert-success', form1);
        form1.validate({
            ignore: [],
            errorClass: 'error',
            validClass: 'success',
            errorElement: 'span',
            rules: {
                name: {
                    minlength: 2,
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                textarea: {
                    required: true,
                    email: true
                },
                field: {
                    required: true,
                    phoneUS: true
                },
                url: {
                    required: true,
                    url: true
                },
                number: {
                    required: true,
                    number: true
                },
                digits: {
                    minlength: 4,
                    required: true,
                    digits: true
                },
                creditcard: {
                    required: true,
                    creditcard: true
                },
                occupation: {
                    minlength: 5
                },
                category: {
                    required: true
                }
            },
            invalidHandler: function (event, validator) {
                $('#errorDiv').show();
                success1.hide();
                error1.show();
                $(this).find('input[type=submit]').removeAttr('disabled');
                //App.scrollTo(error1, -200);
            },
            highlight: function (element, errorClass, validClass) {
                $(element).parents('div.check-val').addClass(errorClass);
                $(element).parents('div.check-val').next('div.' + validClass).fadeOut();
//			$('#locality-error').html('Please Enter Valid City');
                $('#autocomplete-error').html('');
                $('#autocomplete-error').hide();
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).parents('div.check-val').removeClass(errorClass);
                $(element).parents('div.check-val').next('div.' + validClass).fadeIn();
            },
            success: function (label) {
                label
                        .closest('.validation').removeClass('has-error'); // set success class to the control group

            },
            submitHandler: function (form) {
                $('#errorDiv').hide();
                form.submit();
                $('#Submit').attr('disabled', 'disabled');
                $('.showLoder').show();
                $('#opacitylow').css({'opacity': 0.5});
                $('.showLoder').css({'opacity': 2.0});

            }
        });
    }

    var handleValidation2 = function () {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation

        var form1 = $('#JobApplicationSearchJobContentForm');
        var error1 = $('.alert-danger', form1);
        var success1 = $('.alert-success', form1);
        form1.validate({
            ignore: [],
            errorClass: 'error',
            validClass: 'success',
            errorElement: 'span',
            rules: {
                name: {
                    minlength: 2,
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                field: {
                    required: true,
                    phoneUS: true
                },
                url: {
                    required: true,
                    url: true
                },
                number: {
                    required: true,
                    number: true
                },
                digits: {
                    minlength: 4,
                    required: true,
                    digits: true
                },
                creditcard: {
                    required: true,
                    creditcard: true
                },
                occupation: {
                    minlength: 5
                },
                category: {
                    required: true
                }

            },
            invalidHandler: function (event, validator) {
                $('#errorDiv').show();
                success1.hide();
                error1.show();
                $(this).find('input[type=submit]').removeAttr('disabled');
                //App.scrollTo(error1, -200);
            },
            highlight: function (element, errorClass, validClass) {
                $(element).parents('div.check-val').addClass(errorClass);
                $(element).parents('div.check-val').next('div.' + validClass).fadeOut();
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).parents('div.check-val').removeClass(errorClass);
                $(element).parents('div.check-val').next('div.' + validClass).fadeIn();
            },
            success: function (label) {
                label
                        .closest('.validation').removeClass('has-error'); // set success class to the control group

            },
            submitHandler: function (form) {
                $('#errorDiv').hide();
                form.submit();
                $('#Submit').attr('disabled', 'disabled');
                $('.showLoder').show();
                $('#opacitylow').css({'opacity': 0.5});
                $('.showLoder').css({'opacity': 2.0});

            }
        });
    }

    var handleValidation4 = function () {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation

        var form1 = $('#downloadsPopUp');
        var error1 = $('.alert-danger', form1);
        var success1 = $('.alert-success', form1);
        form1.validate({
            ignore: [],
            errorClass: 'error',
            validClass: 'success',
            errorElement: 'span',
            rules: {
                name: {
                    minlength: 2,
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                textarea: {
                    required: true,
                    email: true
                },
                field: {
                    required: true,
                    phoneUS: true
                },
                url: {
                    required: true,
                    url: true
                },
                number: {
                    required: true,
                    number: true
                },
                digits: {
                    minlength: 4,
                    required: true,
                    digits: true
                },
                creditcard: {
                    required: true,
                    creditcard: true
                },
                occupation: {
                    minlength: 5
                },
                category: {
                    required: true
                }
            },
            invalidHandler: function (event, validator) {
                $('#errorDiv').show();
                success1.hide();
                error1.show();
                $(this).find('input[type=submit]').removeAttr('disabled');
                //App.scrollTo(error1, -200);
            },
            highlight: function (element, errorClass, validClass) {
                $(element).parents('div.check-val').addClass(errorClass);
                $(element).parents('div.check-val').next('div.' + validClass).fadeOut();
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).parents('div.check-val').removeClass(errorClass);
                $(element).parents('div.check-val').next('div.' + validClass).fadeIn();
            },
            success: function (label) {
                label
                        .closest('.validation').removeClass('has-error'); // set success class to the control group

            },
            submitHandler: function (form) {
                $('#errorDiv').hide();
                form.submit();
                $('#Submit').attr('disabled', 'disabled');
                $('.showLoder').show();
                $('#opacitylow').css({'opacity': 0.5});
                $('.showLoder').css({'opacity': 2.0});
                setTimeout(function () {
                    $('#closeDownloadPopupId').trigger('click');
                    $('body').css({'opacity': 1});
                }, 1000);
            }
        });
    }
    // this use only candidate or company sign up
    var handleValidation5 = function () {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation

        var form1 = $('#verifyAccount');
        var error1 = $('.alert-danger', form1);
        var success1 = $('.alert-success', form1);
        form1.validate({
            ignore: [],
            errorClass: 'error',
            validClass: 'success',
            errorElement: 'span',
            rules: {
                name: {
                    minlength: 2,
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                textarea: {
                    required: true,
                    email: true
                },
                field: {
                    required: true,
                    phoneUS: true
                },
                url: {
                    required: true,
                    url: true
                },
                number: {
                    required: true,
                    number: true
                },
                digits: {
                    minlength: 4,
                    required: true,
                    digits: true
                },
                creditcard: {
                    required: true,
                    creditcard: true
                },
                occupation: {
                    minlength: 5
                },
                category: {
                    required: true
                },
                confirmPassword: {
                    equalTo: "#SalsurveyUserPassword"
                }
            },
            invalidHandler: function (event, validator) {
                success1.hide();
                error1.show();
                $(this).find('input[type=submit]').removeAttr('disabled');
                //App.scrollTo(error1, -200);
            },
            highlight: function (element, errorClass, validClass) {
                $(element).parents('div.check-val').addClass(errorClass);
                $(element).parents('div.check-val').next('div.' + validClass).fadeOut();
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).parents('div.check-val').removeClass(errorClass);
                $(element).parents('div.check-val').next('div.' + validClass).fadeIn();
            },
            success: function (label) {
                label
                        .closest('.validation').removeClass('has-error'); // set success class to the control group

            },
            submitHandler: function (form) {
                form.submit();
                $('#Submit').attr('disabled', 'disabled');
                // $('.showLoder').show();
                // $('#opacitylow').css({'opacity': 0.5});
                //  $('.showLoder').css({'opacity': 2.0});

            }
        });
    }
    // this use only apply job application popup
    var handleValidation6 = function () {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation

        var form1 = $('#form_sample_applyJob');
        var error1 = $('.alert-danger', form1);
        var success1 = $('.alert-success', form1);
        form1.validate({
            ignore: [],
            errorClass: 'error',
            validClass: 'success',
            errorElement: 'span',
            rules: {
                name: {
                    minlength: 2,
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                textarea: {
                    required: true,
                    email: true
                },
                field: {
                    required: true,
                    phoneUS: true
                },
                url: {
                    required: true,
                    url: true
                },
                number: {
                    required: true,
                    number: true
                },
                digits: {
                    minlength: 4,
                    required: true,
                    digits: true
                },
                creditcard: {
                    required: true,
                    creditcard: true
                },
                occupation: {
                    minlength: 5
                },
                category: {
                    required: true
                },
                confirmemail: {
                    equalToEmail: "#JobApplicationEmail"
                }
            },
            invalidHandler: function (event, validator) {
                success1.hide();
                error1.show();
                $('#showfileUploadError').text('');
                $('#fileSizeUploadError').text('');
                $(this).find('input[type=submit]').removeAttr('disabled');
                //App.scrollTo(error1, -200);
            },
            highlight: function (element, errorClass, validClass) {
                $(element).parents('div.check-val').addClass(errorClass);
                $(element).parents('div.check-val').next('div.' + validClass).fadeOut();
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).parents('div.check-val').removeClass(errorClass);
                $(element).parents('div.check-val').next('div.' + validClass).fadeIn();
            },
            success: function (label) {
                label
                        .closest('.validation').removeClass('has-error'); // set success class to the control group

            },
            submitHandler: function (form) {
                form.submit();
                $('#Submit').attr('disabled', 'disabled');
                $('.showLoder').show();
                $('#opacitylow').css({'opacity': 0.5});
                $('.showLoder').css({'opacity': 2.0});

            }
        });
    }
    var handleValidation7 = function () {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation

        var form1 = $('#signupFormLogin');
        var error1 = $('.alert-danger', form1);
        var success1 = $('.alert-success', form1);
        form1.validate({
            ignore: [],
            errorClass: 'error',
            validClass: 'success',
            errorElement: 'span',
            rules: {
                name: {
                    minlength: 2,
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                textarea: {
                    required: true,
                    email: true
                },
                field: {
                    required: true,
                    phoneUS: true
                },
                url: {
                    required: true,
                    url: true
                },
                number: {
                    required: true,
                    number: true
                },
                digits: {
                    minlength: 4,
                    required: true,
                    digits: true
                },
                creditcard: {
                    required: true,
                    creditcard: true
                },
                occupation: {
                    minlength: 5
                },
                category: {
                    required: true
                },
                confirmPassword: {
                    equalTo: "#SalsurveyUserPassword"
                }
            },
            invalidHandler: function (event, validator) {
                success1.hide();
                error1.show();
                $(this).find('input[type=submit]').removeAttr('disabled');
                //App.scrollTo(error1, -200);
            },
            highlight: function (element, errorClass, validClass) {
                $(element).parents('div.check-val').addClass(errorClass);
                $(element).parents('div.check-val').next('div.' + validClass).fadeOut();
                $('#autocomplete-error').html('');
                $('#autocomplete-error').hide();
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).parents('div.check-val').removeClass(errorClass);
                $(element).parents('div.check-val').next('div.' + validClass).fadeIn();
            },
            success: function (label) {
                label
                        .closest('.validation').removeClass('has-error'); // set success class to the control group

            },
            submitHandler: function (form) {
                form.submit();
                $('#Submit').attr('disabled', 'disabled');
                $('.showLoder').show();
                $('#opacitylow').css({'opacity': 0.5});
                $('.showLoder').css({'opacity': 2.0});
            }
        });
    };
    var handleValidation8 = function () {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation

        var form1 = $('#form_card_details');
        var error1 = $('.alert-danger', form1);
        var success1 = $('.alert-success', form1);
        form1.validate({
            ignore: [],
            errorClass: 'error',
            validClass: 'success',
            errorElement: 'span',
            rules: {
                name: {
                    minlength: 2,
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true,
                    number: true
                },
                contact: {
                    minlength: 2,
                    required: true
                },
                textarea: {
                    required: true,
                    email: true
                },
                field: {
                    required: true,
                    phoneUS: true
                },
                url: {
                    required: true,
                    url: true
                },
                number: {
                    required: true,
                    number: true
                },
                digits: {
                    minlength: 4,
                    required: true,
                    digits: true
                },
                creditcard: {
                    required: true,
                    creditcard: true
                },
                occupation: {
                    minlength: 5
                },
                category: {
                    required: true
                }
            },
            invalidHandler: function (event, validator) {
                success1.hide();
                error1.show();
                $(this).find('input[type=submit]').removeAttr('disabled');

                //App.scrollTo(error1, -200);
            },
            highlight: function (element, errorClass, validClass) {
                $(element).parents('div.check-val').addClass(errorClass);
                /* Input box show red */
                $('span.error:not(:empty)').prev('input').addClass('custom-input-error');
                $(element).parents('div.check-val').next('div.' + validClass).fadeOut();
                $('#autocomplete-error').html('');
                $('#autocomplete-error').hide();
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).parents('div.check-val').removeClass(errorClass);
                /* Input box show red */
                $('span.error').prev('input').removeClass('custom-input-error');
                $(element).parents('div.check-val').next('div.' + validClass).fadeIn();
            },
            success: function (label) {
                label
                        .closest('.validation').removeClass('has-error'); // set success class to the control group

            },
            submitHandler: function (form) {
                form.submit();
                $('#Submit').attr('disabled', 'disabled');
                $('.showLoder').show();
                $('#opacitylow').css({'opacity': 0.5});
                $('.showLoder').css({'opacity': 2.0});
            }
        });
    };
    
     var handleValidation9 = function () {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation

        var form1 = $('#archiveJobform');
        var error1 = $('.alert-danger', form1);
        var success1 = $('.alert-success', form1);
        form1.validate({
            ignore: [],
            errorClass: 'error',
            validClass: 'success',
            errorElement: 'span',
            rules: {
                name: {
                    minlength: 2,
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                textarea: {
                    required: true,
                    email: true
                },
                field: {
                    required: true,
                    phoneUS: true
                },
                url: {
                    required: true,
                    url: true
                },
                number: {
                    required: true,
                    number: true
                },
                digits: {
                    minlength: 4,
                    required: true,
                    digits: true
                },
                creditcard: {
                    required: true,
                    creditcard: true
                },
                occupation: {
                    minlength: 5
                },
                category: {
                    required: true
                }
            },
            invalidHandler: function (event, validator) {
                $('#errorDiv').show();
                success1.hide();
                error1.show();
                $(this).find('input[type=submit]').removeAttr('disabled');
                //App.scrollTo(error1, -200);
            },
            highlight: function (element, errorClass, validClass) {
                $(element).parents('div.check-val').addClass(errorClass);
                $(element).parents('div.check-val').next('div.' + validClass).fadeOut();
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).parents('div.check-val').removeClass(errorClass);
                $(element).parents('div.check-val').next('div.' + validClass).fadeIn();
            },
            success: function (label) {
                label
                        .closest('.validation').removeClass('has-error'); // set success class to the control group

            },
            submitHandler: function (form) {
                $('#errorDiv').hide();
                form.submit();
                $('#Submit').attr('disabled', 'disabled');
                $('.showLoder').show();
                $('#opacitylow').css({'opacity': 0.5});
                $('.showLoder').css({'opacity': 2.0});
                setTimeout(function () {
                    $('#closeDownloadPopupId').trigger('click');
                    $('body').css({'opacity': 1});
                }, 1000);
            }
        });
    }
    return {
        //main function to initiate the module
        init: function () {
            handleValidation1();
            handleValidation2();
            handleValidation3();
            handleValidation4();
            handleValidation5();
            handleValidation6();
            handleValidation7();
            handleValidation8();
            handleValidation9();
            handleValidation10();
        }
    };
}();


$('.tooltip').each(function () {
    $('a.help1').qtip({// Grab some elements to apply the tooltip to
        content: {
            text: 'My common piece of text here'
        }
    });

});