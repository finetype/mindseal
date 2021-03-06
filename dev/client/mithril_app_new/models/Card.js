window.Card = {};

Card.vm = function (card) {
// ViewModel for creating cards 
// usage example: Card.vm( { front: "front of card", back: "backofCard"  } )
  card = card || {};

  return {  
    front: card.front || '',
    back: card.back || '',
    tVal: card.tVal || App.mindSeal.userSettings.tValDefault, //this should be removed in the future, should always be derived
    timeLastSeen: card.timeLastSeen || moment().format(),
    toBeSeen: card.toBeSeen || moment().add(App.mindSeal.userSettings.tValDefault).format(),
    cMem: card.cMem || [],
    cScale: card.cScale || App.mindSeal.userSettings.cScaleDefault || {0: 0.9, 1: 1.2, 2: 1.8, 3: 2.5}
  }
}

Card.tValSetDefault = function(hours){ 
  // sets the default timeout for new cards to be seen.
  console.log("old tval: " + moment.duration(App.mindSeal.userSettings.tValDefault, 'milliseconds').asDays() + " days");
  App.mindSeal.userSettings.tValDefault = moment.duration(hours, 'h').asMilliseconds() ; 
  setMindSeal();
  console.log("new default tval: " + moment.duration(App.mindSeal.userSettings.tValDefault, 'milliseconds').asDays() + " days");
}

Card.counter = function(){
  if (moment(App.mindSeal.userSettings.lastCardReviewDate).format('MM-DD-YYYY') === moment().format('MM-DD-YYYY')) {
    App.mindSeal.userSettings.todayCounter++;
  }
  else {
    App.mindSeal.userSettings.lastCardReviewDate = moment().format();
    App.mindSeal.userSettings.todayCounter = 1;
  }
  App.mindSeal.userSettings.allTimeCounter++;
}
