import { Employee } from './employee.model';
import { NgModule } from '@angular/core';
describe('Employee', () => {
  it('should create an instance', () => {
    expect(new Employee()).toBeTruthy();
  });
});
