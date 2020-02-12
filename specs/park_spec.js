const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosau3;
  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Argentinosaurus', 'herbivore', 10);
    dinosaur3 = new Dinosaur('Allosaurus','omnivore', 40);
    park = new Park('Safari', 10);
  })

  it('should have a name', function () {
    const expected = 'Safari';
    assert.strictEqual(park.name, expected);
  });

  it('should have a ticket price', function () {
    const expected = 10;
    assert.strictEqual(park.ticketPrice, expected);
  });

  it('should have a collection of dinosaurs', function () {
    const expected = 'yes';
    assert.strictEqual(park.hasCollectionOfDinosaurs(),expected);
  });


  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur3);
    const expected = [dinosaur1,dinosaur2,dinosaur3];
    assert.deepStrictEqual(park.collectionOfDinosaurs,expected);
  });


  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur();
    const expected = [dinosaur1,dinosaur2];
    assert.deepStrictEqual(park.collectionOfDinosaurs,expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){

  });

  // it('should be able to find all dinosaurs of a particular species', function(){
  //   park.findParticularSpecie();
  //   const expected =
  // });

  it('should be able to calculate the total number of visitors per day', function(){
    const expected = 100;
    assert.deepStrictEqual(park.totalVisitors(), expected);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    const expected = 36500;
    assert.strictEqual(park.totalVisitors()*365, expected);
  });

  it('should be able to calculate total revenue for one year', function(){
    const expected = 
  });

});
