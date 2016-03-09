var PubFilter = function(allPubs, searchTerms){
  this.allPubs = allPubs;
  this.filtersToUse = searchTerms;
  this.filterResults = [];
}

PubFilter.prototype = {

  newFilterRequest: function(){
    this.filterResults = [];
    // run tests

    return this.filterResults;
  },

  boardGameFilter: function(){

  },

  pubQuizFilter: function(){

  },

  dartsFilter: function(){

  },

  poolFilter: function(){

  }
}

module.exports = PubFilter;