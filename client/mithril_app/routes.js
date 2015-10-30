
//setup routes to start w/ the `#` symbol
m.route.mode = "hash";

m.route(document.getElementById("views"), "/home", {

  "/home": {
    controller: function(){
      Home.controller
    },
    view: function(ctrl,args,extras) {
      return ('.app', [
        m.component(App),
        m.component(Home)
      ])
    }
  },

  "/viewDeck/:deckId": {
    controller: function(){
      this.name = m.route.param('deckId');
      this.deck = Deck.find( this.name ); 
    },
    view: function(ctrl) {
      return m('.app', [
        m.component(App),
        m.component(viewDeck, { name: ctrl.name, deck: ctrl.deck })
      ])
    }
  },

  "/addCards/:deckId": {
    controller: function () {
      this.name = m.route.param('deckId');
      this.deck = Deck.find( this.name ); 
    },
    view: function (ctrl) {
      return m('.app', [
        m.component(App),
        m.component(addCards, { name: ctrl.name, deck: ctrl.deck })
      ]);
    }
  }, 

  "/newDeck": {
    controller: function () {
      newDeck.controller
    },
    view: function (ctrl) {
      console.log("newDeck view fn was run")
      return m('.app', [m.component(App, {}),
        m.component(newDeck, { name: ctrl.name })
      ]);
    }
  },

  "/deckDash/:deckId": {
    controller: function(){
      this.name = m.route.param('deckId');
      this.deck = Deck.find( this.name );
    },
    view: function(ctrl) {
      return m('.app', [
        m.component(App),
        m.component(deckDash, { name: ctrl.name, deck: ctrl.deck })
      ])
    }
  },

  "/settings": {
    controller: function(){},
    view: function() {
      return m('.app', [
        m.component(App),
        m.component(settings)
      ])
    }
  },

  "/shared": {
    controller: function(){},
    view: function() {
      return m('.app', [
        m.component(App),
        m.component(shared)
      ])
    }
  },

  "/about": {
    // controller: function(){},
    view: function() {
      return m('.app', [
        m.component(App),
        m.component(about)
      ])
    }
  }

});
