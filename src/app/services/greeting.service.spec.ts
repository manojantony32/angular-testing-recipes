/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { GreetingService } from './greeting.service';

//Test Suite
// The describe(string, function) function defines what we call a Test Suite, a collection of individual Test Specs.
fdescribe('GreetingService', () => {
  fdescribe('Manually instantiating service', () => {
    let service: GreetingService;

    // beforeEach runs before each test and is used for the setup part of a test. afterEach runs after each test 
    // and is used for the teardown part of a test. 
    // You can also use beforeAll and afterAll, and these run once before or after all tests
    beforeEach(() => {
      service = new GreetingService();
    });

    afterEach(() => {
      service = null;
    });

    // Test Spec
    // The it(string, function) function defines an individual Test Spec, this contains one or more Test Expectations.
    it('should greet properly', () => {
      expect(service.sayHi('Juri')).toBe('Hi, Juri');
    // The expect(actual) expression is what we call an Expectation. In conjunction with a Matcher it describes 
    // an expected piece of behaviour in the application.
    });
  });

  // The matcher(expected) expression is what we call a Matcher. It does a boolean comparison with the expected value passed in vs. 
  // the actual value passed to the expect function, if they are false the spec fails.

  // expect(array).toContain(member);
  // expect(fn).toThrow(string);
  // expect(fn).toThrowError(string);
  // expect(instance).toBe(instance);
  // expect(mixed).toBeDefined();
  // expect(mixed).toBeFalsy();
  // expect(mixed).toBeNull();
  // expect(mixed).toBeTruthy();
  // expect(mixed).toBeUndefined();
  // expect(mixed).toEqual(mixed);
  // expect(mixed).toMatch(pattern);
  // expect(number).toBeCloseTo(number, decimalPlaces);
  // expect(number).toBeGreaterThan(number);
  // expect(number).toBeLessThan(number);
  // expect(number).toBeNaN();
  // expect(spy).toHaveBeenCalled();
  // expect(spy).toHaveBeenCalledTimes(number);
  // expect(spy).toHaveBeenCalledWith(...arguments);
  

  describe('Configuring via TestBed', () => {
    beforeEach(() => {
      // The TestBed is the most important of the Angular testing utilities. 
      // The TestBed creates a dynamically-constructed Angular test module that emulates an Angular @NgModule.
      TestBed.configureTestingModule({
      // The TestBed.configureTestingModule() method takes a metadata object that can have most of the properties of an @NgModule.
        providers: [GreetingService]
      });
    });

    describe('Injecting via testcase level inject', () => {
      it(
        'should have a service instance',
        inject([GreetingService], (service: GreetingService) => {
          expect(service).toBeDefined();
        })
      );
    });

    describe('Injecting via test suite level inject', () => {
      let service: GreetingService;

      beforeEach(
        inject([GreetingService], (s: GreetingService) => {
          service = s;
        })
      );

      it('should have a service instance', () => {
        expect(service).toBeDefined();
      });
    });

    describe('Injecting via TestBed.get()', () => {
      let service: GreetingService;

      beforeEach(() => {
        service = TestBed.get(GreetingService);
      });

      it('should have a service instance', () => {
        expect(service).toBeDefined();
      });
    });

    describe('Testing service functions', () => {
      it(
        'should greet properly',
        inject([GreetingService], (service: GreetingService) => {
          expect(service.sayHi('Juri')).toBe('Hi, Juri');
        })
      );
    });
  });
});
