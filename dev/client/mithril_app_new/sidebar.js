(function(){
  window.Sidebar = {};

  Sidebar.view = function(ctrl){  
    return m("div",[
      m("ul.side-nav.fixed.blue-grey.darken-1[id='slide-out']", [
        m("h3.center-align.logo", "mind:seal"),
        m("li[class='username']", [m("a.nav-text", "User: " + App.mindSeal.userSettings.username)]), //make non hoverable... center, stylize larger
        m("li[class='sidebar-text']", [m("a.nav-text[href='#/home']", "My Decks")]),
        m("li[class='sidebar-text']", [m("a.nav-text[href='#/newDeck']", "Create New Deck")]),
        m("li[class='sidebar-text']", [m("a.nav-text[href='#/shared']", "Get Shared Decks")]),
        m("li[class='sidebar-text']", [m("a.nav-text[href='#/logout']", "Logout")]),
      ]),
      m("a.center-align", {onclick:function(){console.log("state:",window.menuState);window.toggleMenu()}},[m("i.s1.col.offset-s11.mdi-navigation-menu")])
    ])
  };

  Sidebar.controller = function(args){
    ctrl = this;
    window.menuState = 'hidden';
    ctrl.oldWidth    = window.innerWidth;
    if (window.innerWidth < 1000) {
      window.menuState = 'hidden'
    }
    // else {
    //   window.menuState = 'shown';
    //   $('.side-nav').velocity({left:0, delay:200});
    // }

    window.onresize = function(){
      if (window.innerWidth > 1000 && ctrl.oldWidth < 1000) {
        window.menuState = 'hidden';
        window.toggleMenu();
      } 
      else if (window.innerWidth < 1000 && ctrl.oldWidth > 1000) { 
        window.menuState = 'shown';
        window.toggleMenu();
      }
      ctrl.oldWidth = window.innerWidth;
    }

    // console.log("ctrl.menuState = " + window.menuState)

    window.toggleMenu = function(){
      console.log("window.menuState:",window.menuState)
      if (window.menuState === 'hidden'){
        window.menuState = 'shown';
        $('.side-nav.fixed').velocity({left: 0 }, 500);
        $('i.mdi-navigation-menu').velocity({'padding-left': 240 }, 500);
      }
      else if (window.menuState === 'shown'){
        window.menuState = 'hidden';
        $('.side-nav.fixed').velocity({left: -240}, 500);
        $('i.mdi-navigation-menu').velocity({'padding-left': 0 }, 500);
        $('i.mdi-navigation-menu').velocity("callout.shake");
      }
    }
  };
})()
