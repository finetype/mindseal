(function(){
  window.Landing = {};

  Landing.view = function(ctrl){  
    return m(".cow.valign-wrapper", [
      m(".row", [
        m(".card-panel.col.m5.offset-m1.l4.offset-l2.s12.top-bottom-pad-mar.valign-wrapper", [
          m(".col.s12", [
            m(".container.card-content", [
              m("h5", [" What is ",m("i", "mind:seal"),"? "]),
              m("p.home-text", "\n                Welcome to our site. This is a site. This is ipsum lorem.\n                This is a llame. This is not how you spell llama. This is:\n                alpaca. duck. dhcukecn auiosdhniuashnd fiusdfnisudhfiusahdfi\n                Welcome to our site. This is a site. This is ipsum lorem.\n                \n                thi\n              ")
            ])
          ])
        ]),
        m(".hoverable.card-panel.col.s12.m5.l4.top-bottom-pad-mar.valign-wrapper", [
          m("form.col.s12", [
            m(".container.card-content", [
              m(".row", [
                m(".input-field.col.s12", [
                  m("input.validate[id='username'][type='text']", {onchange: m.withAttr("value", ctrl.username)}),
                  m("label[for='username']", "Username")
                ])
              ]),
              m(".row", [
                m(".input-field.col.s12", [
                  m("input.validate[id='password'][type='password']", {onchange: m.withAttr("value", ctrl.password)}),
                  m("label[for='password']", "Password")
                ])
              ]),
              m(".row", [
                m(".input-field.col.s12", [
                  m("input.validate[id='email'][type='email']", {onchange: m.withAttr("value", ctrl.email)}),
                  m("label[for='email']", "Email")
                ])
              ]),
              m("a.col.s4.waves-effect.waves-light.btn-large", {onclick:ctrl.signUp}, [m("i.material-icons.right", "cloud"),"Sign Up"]),
              m("a.col.s4.waves-effect.waves-light.btn-large", {onclick:ctrl.login}, [m("i.material-icons.right", "cloud"),"Login"])
            ])
          ])
        ])
      ])
    ])
  };

  Landing.controller = function(args){
    ctrl = this;

    ctrl.username = m.prop();
    ctrl.password = m.prop();
    ctrl.email    = m.prop()
    
    ctrl.signUp   = function(){
      User.signUp(ctrl.username(), ctrl.password(), ctrl.email())
    }
    
    ctrl.login    = function(){
      User.login(ctrl.username(), ctrl.password())
    }

    ctrl.forgot   = function(){
      //User.forgot(ctrl.email())
    }

    if (/*logged in*/typeof App === 'object' && typeof App.mindSeal === 'object') {
      console.log("App.mindSeal is an object")
      m.route("/home");
    }
  };
})()