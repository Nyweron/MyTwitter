  $(document).ready(function() {
      $('#contact_form').bootstrapValidator({
              // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
              feedbackIcons: {
                  valid: 'glyphicon glyphicon-ok',
                  invalid: 'glyphicon glyphicon-remove',
                  validating: 'glyphicon glyphicon-refresh'
              },
              fields: {
                  nickname: {
                      validators: {
                          stringLength: {
                              min: 1,
                          },
                          notEmpty: {
                              message: 'Please supply your Nickname'
                          }
                      }
                  },
                  password: {
                      validators: {
                          stringLength: {
                              min: 1,
                          },
                          notEmpty: {
                              message: 'Please supply your Password'
                          }
                      }
                  },
                  first_name: {
                      validators: {
                          stringLength: {
                              min: 2,
                          },
                      }
                  },
                  last_name: {
                      validators: {
                          stringLength: {
                              min: 2,
                          },
                      }
                  },
                  email: {
                      validators: {
                          notEmpty: {
                              message: 'Please supply your email address'
                          },
                          emailAddress: {
                              message: 'Please supply a valid email address'
                          }
                      }
                  },

                  comment: {
                      validators: {
                          stringLength: {
                              min: 10,
                              max: 200,
                              message: 'Please enter at least 10 characters and no more than 200'
                          },
                          notEmpty: {
                              message: 'Please supply a description of your project'
                          }
                      }
                  }
              }
          })
          .on('success.form.bv', function(e) {
              $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
              $('#contact_form').data('bootstrapValidator').resetForm();

              // Prevent form submission
              e.preventDefault();

              // Get the form instance
              var $form = $(e.target);

              // Get the BootstrapValidator instance
              var bv = $form.data('bootstrapValidator');

              // Use Ajax to submit form data
              $.post($form.attr('action'), $form.serialize(), function(result) {
                  console.log(result);
              }, 'json');
          });
  });