//Change header when going to news page
const page_news = document.querySelector(".p-postnews");
if (page_news) {
  const header = document.querySelector(".c-header");
  header.style.position = "relative";
  const header_ele = document.querySelector(".c-header");
  const hidden = header_ele.querySelector(".c-header__text");
  hidden.style.display = "none";
  const addclass = document.querySelector(".c-header__list");
  addclass.classList.add("is-pagenews");
  const logonews = document.querySelector(".c-header__nav .c-header__logo");
  logonews.classList.add("is-logonews");
}
// handle from
// call function
/* eslint-disable */

function validator(options) {
  // save rules
  var selectorRules = {};
  function validate(inputElement, rule) {
    // value : inputElement.value
    // test : rule.test
    var errorElement = inputElement.parentElement.parentElement.querySelector(
      options.errorSelector
    );
    var errorMessage;
    // get the rule of selector
    var rules = selectorRules[rule.selector];
    // Iterate through the rules and check if there is an error then stop the checking
    for (var i = 0; i < rules.length; ++i) {
      errorMessage = rules[i](inputElement.value);
      if (errorMessage) {
        break;
      }
    }
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      // handle print out error message and add css
      errorElement.classList.add("is-marginl");
      inputElement.parentElement.parentElement.classList.add("invalid"); // ???
    } else {
      errorElement.innerText = "";
      inputElement.parentElement.parentElement.classList.remove("invalid"); // ???
    }
    return !errorMessage;
  }
  // get the element for the form to validate
  var formElement = document.querySelector(options.form);
  if (formElement) {
    // when click submit form
    formElement.onsubmit = function (e) {
      e.preventDefault();
      var isFormValid = true;
      //done when the user clicks submit, the validate message is displayed
      options.rules.forEach((rule) => {
        var inputElement = formElement.querySelector(rule.selector);
        var isValid = validate(inputElement, rule);
        if (!isValid) {
          isFormValid = false;
          const messagePlease = document.querySelector(".u-message__please");
          messagePlease.innerText = "蜈･蜉帛�螳ｹ繧堤｢ｺ隱阪＠縺ｦ縺上□縺輔＞縲�"; // ???
          //  const messageadd = document.querySelectorAll('.u-message');
        }
      });

      if (isFormValid) {
        if (typeof options.onsubmit === "function") {
          //get all property is name Do not get disabled properties
          var enableInputs = formElement.querySelectorAll(
            "[name]:not([disabled])"
          );
          // convert nodelist into array
          var formValue = Array.from(enableInputs).reduce((values, input) => {
            return (values[input.name] = input.value) && values;
          }, {});
          // return the data entered from the form
          options.onsubmit(formValue);
        } else {
          // submit with default behavior
          formElement.submit();
        }
      }
    };

    options.rules.forEach((rule) => {
      // Save the rules for each input
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }
      var inputElement = formElement.querySelector(rule.selector);
      if (inputElement) {
        //Handling the case when the onblur goes out
        inputElement.onblur = () => {
          validate(inputElement, rule);
        };
        // handle when the user enters the input, hide the error message
        inputElement.oninput = () => {
          var errorElement =
            inputElement.parentElement.parentElement.querySelector(
              options.errorSelector
            );
          errorElement.innerText = "";
          inputElement.parentElement.parentElement.classList.remove("invalid");
        };
      }
    });
  }
}
// 1 there is an error return an error message
// When valid, no error message is displayed
validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim()
        ? undefined
        : message || "莉頑律蜿ょ刈縺励※縺上□縺輔＞";
    },
  };
};

validator.isEmail = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value)
        ? undefined
        : message || "豁｣縺励＞繝｡繝ｼ繝ｫ蠖｢蠑上ｒ蜈･蜉帙＠縺ｦ縺上□縺輔＞";
    },
  };
};

validator.isPhone = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      return regex.test(value)
        ? undefined
        : message || "豁｣縺励＞髮ｻ隧ｱ逡ｪ蜿ｷ縺ｮ蠖｢蠑上ｒ蜈･蜉帙＠縺ｦ縺上□縺輔＞";
    },
  };
};

validator.content = function (selector, min, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.length > min
        ? undefined
        : message || `${min} 譁�ｭ嶺ｻ･荳翫�蜀�ｮｹ繧貞�蜉帙＠縺ｦ縺上□縺輔＞`;
    },
  };
};

validator({
  form: "#is-form",
  errorSelector: ".u-message",
  rules: [
    validator.isRequired(
      "#fullname",
      "縲取ｰ丞錐縲上ｒ蜈･蜉帙＠縺ｦ縺上□縺輔＞縲�"
    ),
    validator.isRequired(
      "#phone",
      "縲朱崕隧ｱ逡ｪ蜿ｷ縲上ｒ蜈･蜉帙＠縺ｦ縺上□縺輔＞縲�"
    ),
    validator.isPhone(
      "#phone",
      "髮ｻ隧ｱ逡ｪ蜿ｷ縺ｯ荳願ｨ�10譯√�謨ｰ蟄励→莉･荳九�繝輔か繝ｼ繝槭ャ繝医〒蜈･蜉帙＠縺ｦ縺上□縺輔＞ (123) 456-7890, (123)456-7890, 123.456.7890, 123-456-7890, +31636363634, 1234567890, 075-63546725"
    ),
    validator.isRequired(
      "#email",
      "縲弱Γ繝ｼ繝ｫ繧｢繝峨Ξ繧ｹ縲上ｒ蜈･蜉帙＠縺ｦ縺上□縺輔＞縲�"
    ),
    validator.isEmail(
      "#email",
      "辟｡蜉ｹ縺ｪ髮ｻ蟄舌Γ繝ｼ繝ｫ 髮ｻ蟄舌Γ繝ｼ繝ｫ縺ｫ縺ｯ @ 譁�ｭ励→譛蠕後�繝峨Γ繧､繝ｳ縺悟ｿ�ｦ√〒縺� 縲�"
    ),
    validator.isRequired(
      "#content",
      "縲弱♀蝠上＞蜷医ｏ縺帛�螳ｹ縲上ｒ蜈･蜉帙＠縺ｦ縺上□縺輔＞縲�"
    ),
    validator.content("#content", 2, `${2}譁�ｭ嶺ｻ･荳雁�蜉帙＠縺ｦ縺上□縺輔＞`),
  ],
  onsubmit: function (data) {
    console.log(data);
  },
});
