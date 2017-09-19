var {defineSupportCode, ParameterType } = require('cucumber');

defineSupportCode(function({BeforeAll, defineParameterType}) {


  let pageTransform = function(s) {

    return app.trans('Page', s)
  }

  let moduleTransform = function(s) {

    return app.trans('Module', s)
  }

  let orderTransform = function(s) {

    return s.replace(/st|nd|rd|th/g, "")
  }

  let noQuoteStringTransform = function(s) {

    return app.trans('Sample', s)
  }


/*
  let moduleTransform = function(s) {

    let viewMapping = {
      "Logged in header module": loggedInHeader,
    }
    if (viewMapping[s]) { return viewMapping[s] }

    return s

  }
  */

  defineParameterType( {
    regexp: /([a-zA-Z ]+) page/,
    transformer: pageTransform,
    typeName: 'page'
  })

  defineParameterType( {
    regexp: /([a-zA-Z ]+) module/,
    transformer: moduleTransform,
    typeName: 'module'
  })

  defineParameterType( {
    regexp: /(\d+st|\d+nd|\d+rd|\d+th)/,
    transformer: orderTransform,
    typeName: 'order'
  })

  defineParameterType( {
    regexp: /([a-zA-Z0-9 \+\@\,\.]+)/,
    transformer: noQuoteStringTransform,
    typeName: 'noQuoteString'
  })

  defineParameterType( {
    regexp: /([0-9]+)/,
    typeName: 'integer'
  })

/*
  defineParameterType( {
    regexp: /"(.*) module"/,
    transformer: moduleTransform,
    typeName: 'module'
  })
  */

})
