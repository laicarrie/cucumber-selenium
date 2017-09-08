var {defineSupportCode, ParameterType } = require('cucumber');

defineSupportCode(function({BeforeAll, defineParameterType}) {

  let pageTransform = function(s) {

    let viewMapping = {
      "Login page": LoginPage,
      "Search page": SearchPage,
      "Search Result page": SearchResultPage,
      "Job Ad page": JobAdPage,
      "Complete Your Profile page": CompleteYourProfilePage,
      "Sign up page": SignUpPage,
      "Forgot password page": ForgotPasswordPage
    }
    
    return viewMapping[s]
  
  }

  let moduleTransform = function(s) {

    let viewMapping = {
      "Logged in header module": loggedInHeader,
    }
    if (viewMapping[s]) { return viewMapping[s] }

    return s
  
  }

  defineParameterType( {
    regexp: /.* page/,
    transformer: pageTransform,
    typeName: 'page'
  })
/*
  defineParameterType( {
    regexp: /"(.*) module"/,
    transformer: moduleTransform,
    typeName: 'module'
  })
  */

  defineParameterType( {
    regexp: /.* module/,
    transformer: moduleTransform,
    typeName: 'module'
  })

})

