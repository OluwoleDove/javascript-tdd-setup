
var chai = require('chai');
var expect = chai.assert;
var search;
var lib = require('./lib/class_oop.js');

'use strict';
  describe("findCriminal class, finds a criminal location", function() {

    it("The planet should be a type of `string`, and must be Earth", function() {
      search = new findCriminal('Earth');
      expect(typeof planet).toEqual(typeof "");
      expect(planet instanceof findCriminal).toBeTruthy();
    });

    it("The search should be called 'Unknown' if coordinates are not numbers", function() {
      expect(search.latitude).toEqual('Unknown');
      expect(search.longitude).toBe('Unknown');
    });

    it("Action should be Prepare for war if planet = Alien zone", function() {
      expect(search.Action).toBe('Prepare for war');
    });
    it("Action should be Continue search if planet = Earth", function() {
      expect(search.Action).toBe('Continue search');
    });

});