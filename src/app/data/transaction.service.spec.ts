import { TestBed } from '@angular/core/testing';

import { TransactionService } from './transaction.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { transactionPageFromPageDto } from '../model';
import { getMockTransactionPage, getMockTransactionPageDto, getMockTransactions } from '../../testing/mock-model';
import { cold } from 'jasmine-marbles';
import { HttpMethod } from '../../testing';

describe('CompanyService', () => {
  const BASE_URL = 'https://resttest.bench.co';
  let sut: TransactionService;
  let http: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    sut = TestBed.inject(TransactionService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(sut).toBeTruthy();
  });

  it('should have set the base url from the environment', () => {
    expect(sut.baseUrl).toEqual(environment.apiUrl);
  });

  it('should have "/transactions" for the path', () => {
    expect(sut.basePath).toEqual('/transactions');
  });

  describe('find(page: number): Observable<Page<Transaction>>', () => {
    it('should call GET with the page as a query parameter', () => {
      const data = getMockTransactionPageDto();
      const result = transactionPageFromPageDto(data);
      const expectedUrl = `${BASE_URL}/transactions/?1.json`;

      sut.find(1).subscribe(r => {
        expect(r).toEqual(result);
      });

      const request = httpController.expectOne(expectedUrl);
      expect(request.request.method).toEqual(HttpMethod.GET);
      request.flush(data);
      httpController.verify();
    });
  });

  describe('Foo testing', () => {
    it('should do what I expect', () => {


      const findJsonSpy = spyOn(sut, 'findJson');
      findJsonSpy.and.callFake((page: number) => {
        const p = getMockTransactionPage(page);
        return cold('(a|)', { a: p });
      });

      const transactions = getMockTransactions().concat(getMockTransactions(), getMockTransactions());/*?*/
      const expected = cold('(a|)', { a: transactions });

      expect(sut.findAll()).toBeObservable(expected);
      expect(findJsonSpy).toHaveBeenCalledTimes(3);

    });
  });

  describe('findJson(page: number): Observable<Page<Transaction>>', () => {
    it('should load data from the assets folder', () => {
      const expectedUrl = 'assets/json-data/page-1.json';
      const data = getMockTransactionPageDto();
      const result = transactionPageFromPageDto(data);

      sut.findJson(1)
         .subscribe(r => {
           expect(r).toEqual(result);
         });

      const request = httpController.expectOne(expectedUrl);
      request.flush(data);
      httpController.verify();
    });
  });
});
