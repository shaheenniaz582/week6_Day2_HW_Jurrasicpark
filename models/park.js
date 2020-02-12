const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs =[dinosaur1, dinosaur2];
};

Park.prototype.hasCollectionOfDinosaurs = function (){
  if(this.collectionOfDinosaurs != []){
    return 'yes';
  }
  else{
    return 'no';
  }

};

Park.prototype.addDinosaur = function (dinosaur) {
  this.collectionOfDinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (){
  this.collectionOfDinosaurs.pop();
};

// Park.prototype.totalVisitors = function (){
//   total = 0;
//   for(var vistor in  )
// };
