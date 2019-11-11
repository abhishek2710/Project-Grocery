import { TestBed } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeService = TestBed.get(EmployeeService);
    expect(service).toBeTruthy();
  });
});
