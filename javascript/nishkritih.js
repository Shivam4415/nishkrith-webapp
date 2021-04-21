(function (window, document, undefined) {
  var N = {
    version: "0.1",
    assert: false, // commented production code contains 'if (N.assert'
    debug: false,
  };

  function expose() {
    var oldM = window.N;

    N.noConflict = function () {
      window.N = oldM;
      return this;
    };

    window.N = N;
  }

  // define M as a global M variable, saving the original M to restore later if needed
  if (typeof window !== "undefined") {
    expose();
  }

  N.Util = {
    isNullOrUndefined: function (x) {
      return x === null || x === undefined;
    },
    isNullUndefinedOrEmpty: function (x) {
      return x === null || x === undefined || !x.length;
    },
  };

  N.isNullOrUndefined = N.Util.isNullOrUndefined;
  N.isNullUndefinedOrEmpty = N.Util.isNullUndefinedOrEmpty;

  N.Enum = {
    Color: {
      Red: 1,
      Blue: 2,
      Green: 3,
    },
    Size: {
      Small: 1,
      Medium: 2,
      Large: 3,
    },
    ObjectType: {
      Product: "Product",
      Me: "Me",
    },
  };

  N.Color = N.Enum.Color;
  N.Size = N.Enum.Size;
  N.ObjectType = N.Enum.ObjectType;

  N.Validators = {
    pageValidators: [],

    attachValidator: function (el) {
      var validator = $(el);

      validator.attr("hidden", "");

      var data = validator.data();

      var identifyControlBy = data["mplIdentifyControlBy"] || "id";

      // If a form-control with same identifier appears multiple times in html,
      // use data-nsk-validator-boundary tag in the common parent of validator and form-control
      // so that validator validates form-control within that boundary only.
      var boundary = validator.closest("[data-nsk-validator-boundary]");

      var control = $(
        "[" + identifyControlBy + "='" + data["mplValidateControl"] + "'",
        boundary.length ? boundary : null
      ).first();

      var group = data["mplValidatorGroup"] || "";

      var message = data["mplValidatorError"];

      var type = (data["mplValidator"] || "").toLowerCase();

      var element = data["mplValidatorElement"] || "";

      var validateOnBlur =
        data["mplValidationOnblur"] == undefined
          ? true
          : data["mplValidationOnblur"] === false
          ? false
          : true;

      if (type != "") {
        if (!control.is(":checkbox") || !control.is("select"))
          control.focus(function (e) {
            validator.attr("hidden", "");
            control.removeClass("uk-form-danger");
          });

        var params = {
          control: control,
          validator: validator,
          message: message,
          element: element,
        };
        var func = null;
        switch (type) {
          case "required":
            {
              if (control.is(":checkbox")) {
                func = N.Validators.isChecked;
              } else if (control.is("select")) {
                func = N.Validators.isChosenSelected;
              } else {
                func = N.Validators.required;
              }
            }
            break;

          case "email":
            func = N.Validators.email;
            break;

          case "password":
            func = N.Validators.password;
            break;

          case "number":
            func = N.Validators.number;
            break;

          case "match":
            {
              params["controlMatch"] = $("#" + data["mplValidateControlFrom"]);
              func = N.Validators.match;
            }
            break;

          case "recaptcha":
            func = N.Validators.recaptcha;
            break;

          case "state": {
            func = N.Validators.state;
            if (data["mplInfoControl"]) {
              params["infoControl"] = $(
                "[" + identifyControlBy + "='" + data["mplInfoControl"] + "'",
                boundary.length ? boundary : null
              ).first();
            }
            break;
          }
        }

        if (control.is("select") && func != null) {
          control.change(function () {
            func(params);
          });
        }

        if (validateOnBlur && func !== null) {
          if (control.is(":checkbox") || control.is("select"))
            control.change(function () {
              func(params);
            });
          else {
            control.blur(function () {
              func(params);
            });
          }
        }

        N.Validators.pageValidators.push({
          group: group,
          func: func,
          params: params,
        });
      }
    },

    required: function (params) {
      var control = params.control;
      var validator = params.validator;
      var message = params.message || "*Required";

      if (!control) return true;

      if (control.length == 0) return true;

      if (control.is(":disabled")) return true;

      if (!control.is(":visible")) return true;

      if (!validator) return true;

      if (validator.length == 0) return true;

      if (control.val().trim().length > 0) {
        control.addClass("uk-form-success");
        validator.attr("hidden", "");
        return true;
      } else {
        control.removeClass("uk-form-success").addClass("uk-form-danger");
        validator.text(message).removeAttr("hidden");
        return false;
      }
    },

    password: function (params) {
      var control = params.control;
      var validator = params.validator;

      if (!control) return true;

      if (control.length == 0) return true;

      if (control.is(":disabled")) return true;

      if (!control.is(":visible")) return true;

      if (!validator) return true;

      if (validator.length == 0) return true;

      var password = control.val().trim();
      if (password.length > 0) {
        if (N.Global.regexPassword.test(password)) {
          control.addClass("uk-form-success");
          validator.attr("hidden", "");
          return true;
        } else {
          control.removeClass("uk-form-success").addClass("uk-form-danger");
          validator
            .text(
              "Your password should have minimum of 8 characters with at least 1 letter and 1 number or special character."
            )
            .removeAttr("hidden");
          return false;
        }
      } else {
        control.removeClass("uk-form-success").addClass("uk-form-danger");
        validator.text("Please enter your password.").removeAttr("hidden");
        return false;
      }
    },

    match: function (params) {
      var control1 = params.control;
      var control2 = params.controlMatch;
      var validator = params.validator;
      var message = params.message;

      if (!control1) return true;

      if (control1.length == 0) return true;

      if (!control2) return true;

      if (control2.length == 0) return true;

      // var validator = $(validatorId);

      if (validator.length == 0) return true;

      var text1 = control1.val().trim();
      var text2 = control2.val().trim();

      if (text1 === text2 && text1.length != 0) {
        control1.addClass("uk-form-success");
        validator.attr("hidden", "");
        return true;
      } else {
        control1.removeClass("uk-form-success").addClass("uk-form-danger");
        validator.text(message).removeAttr("hidden");
        //validator.text("Please make sure your password match.").removeAttr("hidden");
        return false;
      }
    },

    number: function (params) {
      var control = params.control;
      var validator = params.validator;

      if (!control) return true;

      if (control.length == 0) return true;

      if (control.is(":disabled")) return true;

      if (!control.is(":visible")) return true;

      if (!validator) return true;

      if (validator.length == 0) return true;

      var number = control.val().trim();
      if (number.length > 0) {
        if (N.Global.regexNumber.test(number)) {
          control.addClass("uk-form-success");
          validator.attr("hidden", "");
          return true;
        } else {
          control.removeClass("uk-form-success").addClass("uk-form-danger");
          validator.text("Please enter valid number.").removeAttr("hidden");
          return false;
        }
      } else {
        control.removeClass("uk-form-success").addClass("uk-form-danger");
        validator.text("Please enter a number.").removeAttr("hidden");
        return false;
      }
    },

    email: function (params) {
      var control = params.control;
      var validator = params.validator;
      var message = params.message || "Please enter your email.";

      if (!control) return true;

      if (control.length == 0) return true;

      if (control.is(":disabled")) return true;

      if (!control.is(":visible")) return true;

      if (!validator) return true;

      if (validator.length == 0) return true;

      var email = control.val().trim();
      if (email.length > 0) {
        if (N.Global.regexEmail.test(email) && /\s/g.test(email) == false) {
          control.addClass("uk-form-success");
          validator.attr("hidden", "");
          return true;
        } else {
          control.removeClass("uk-form-success").addClass("uk-form-danger");
          validator.text("Please enter valid email.").removeAttr("hidden");
          return false;
        }
      } else {
        control.removeClass("uk-form-success").addClass("uk-form-danger");
        validator.text(message).removeAttr("hidden");
        return false;
      }
    },

    isChecked: function (params) {
      var control = params.control;
      var validator = params.validator;
      var message = params.message || "Please check the box to continue.";

      if (control.length == 0) return true;

      if (control.is(":disabled")) return true;

      if (!control.is(":visible")) return true;

      if (validator.length == 0) return true;

      if (control.is(":checked")) {
        validator.attr("hidden", "");
        control.addClass("uk-checkbox-success");
        return true;
      } else {
        control.removeClass("uk-checkbox-success").addClass("uk-form-danger");
        validator.text(message).removeAttr("hidden");
        return false;
      }
    },

    isChosenSelected: function (params) {
      var control = params.control;

      var chosenControl = control.next();

      var validator = params.validator;
      var message = params.message || "Please select to continue.";

      if (control.length == 0) return true;

      if (chosenControl.length == 0) return true;

      if (!chosenControl.is(":visible")) return true;

      if (validator.length == 0) return true;

      //// first default value should be always -1
      //if (control.val() != -1) {
      //    validator.attr("hidden", "");
      //    chosenControl.children().first().addClass("uk-form-success")
      //    return true;
      //}
      //else {
      //    chosenControl.children().first().removeClass("uk-form-success").addClass("uk-form-danger");
      //    validator.text(message).removeAttr("hidden");
      //    return false;
      //}

      if (control.val() == -1 || control.val() == undefined) {
        chosenControl
          .children()
          .first()
          .removeClass("uk-form-success")
          .addClass("uk-form-danger");
        validator.text(message).removeAttr("hidden");
        return false;
      } else {
        validator.attr("hidden", "");
        chosenControl.children().first().addClass("uk-form-success");
        return true;
      }
    },

    state: function (params) {
      var infoControl = params.infoControl;

      if (!(infoControl && infoControl.length)) return true;

      //Deciding validation error message depends on country value
      var message =
        infoControl.val() == "US"
          ? "Please enter your state."
          : "Please enter your province.";

      params.message = message;

      return N.Validators.isChosenSelected(params);
    },

    recaptcha: function (params) {
      var control = params.control;
      var validator = params.validator;
      var message = params.message || "Please check the box to continue.";

      if (control.length == 0) return true;

      if (control.is(":disabled")) return true;

      if (validator.length == 0) return true;

      if (control.is(":visible")) {
        if (typeof grecaptcha != "undefined") {
          if (grecaptcha.getResponse().length !== 0) {
            validator.attr("hidden", "");
            return true;
          }
        }

        validator.text(message).removeAttr("hidden");
        return false;
      }
      return true;
    },

    pageValidate: function (group) {
      group = group || "";
      var validated = true;
      for (var i = 0; i < N.Validators.pageValidators.length; i++) {
        try {
          var validator = N.Validators.pageValidators[i];
          if (validator.group === group)
            if (!validator.func(validator.params)) validated = false;
        } catch (ex) {
          console.error(ex.message);
        }
      }
      return validated;
    },

    isFirstSubmit: function ($element) {
      var isSubmitted = $element.data("submitted");
      if (!isSubmitted) {
        $element.data("submitted", true);
        return true;
      }
      return false;
    },

    reset: function (group) {
      group = group || "";
      for (var i = 0; i < N.Validators.pageValidators.length; i++) {
        var validator = N.Validators.pageValidators[i];
        if (validator.group === group) {
          if (validator.params.control.is("select")) {
            validator.params.control
              .next()
              .children()
              .first()
              .removeClass("uk-form-success")
              .removeClass("uk-form-danger");
          } else {
            validator.params.control
              .removeClass("uk-form-success")
              .removeClass("uk-form-danger");
          }
          validator.params.validator.attr("hidden", "");
        }
      }
    },

    // using for dynamic created controls like claculation on filter
    removeValidate: function (group) {
      group = group || "";
      N.Validators.pageValidators = N.Validators.pageValidators.filter(
        function (el) {
          return el.group !== group;
        }
      );
    },
  };

  N.Urls = {
    apiUrl: "https://nk-config-be.herokuapp.com",
    localApiUrl: "http://localhost:1337"
  }

  if (document.addEventListener) {
    // Used to associate functions on document on load event
    document.addEventListener(
      "DOMContentLoaded",
      (function () {
        var domReady = function () {
          setTimeout(_init);
        };
        var _init = function () {
          // Add Validator controls
          $("*[data-nsk-validator]").each(function (index, value) {
            M.Validators.attachValidator(value);
          });
        };
        if (
          document.readyState == "complete" ||
          document.readyState == "interactive"
        ) {
          setTimeout(domReady);
        }

        return domReady;
      })()
    );
  }

  N.pageValidate = N.Validators.pageValidate;
  N.Validators.reset = N.Validators.reset;
  N.Validators.attachValidator = N.Validators.attachValidator;
  N.isFirstSubmit = N.Validators.isFirstSubmit;
  N.apiUrl = N.Urls.apiUrl;
  N.localApiUrl = N.Urls.localApiUrl;

  N.Modal = {};

  N.Page = {};

  N.Control = {};
})(window, document);

function chr(num) {
  return String.fromCharCode(num);
}
