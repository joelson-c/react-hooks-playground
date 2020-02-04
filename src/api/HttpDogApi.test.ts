/**
 * @jest-environment node
 */

import nock from 'nock';

import HttpDogApi from './HttpDogApi';

function getApiMock() {
  const baseUrl = process.env.REACT_APP_API_URL;

  return nock(baseUrl!);
}

describe('HttpDogApi', () => {
  describe('fetchBreedList', () => {
    test('should return the breed list', async () => {
      const expectedResult = [
        'affenpinscher', 'australian'
      ];
      const testAnwserObj = {
        message: {
          affenpinscher: [],
          australian: [
            'shepherd'
          ],
        },
        status: 'success'
      };
      getApiMock().get('/breeds/list/all').reply(200, testAnwserObj);
      expect.assertions(1);

      const httpApi = new HttpDogApi();
      const result = await httpApi.fetchBreedList();

      expect(result).toEqual(expect.arrayContaining(expectedResult));
    });

    test('should throw if the api anwsers with a http error code', async () => {
      const expectedErrorMessage = 'Server error';
      getApiMock().get('/breeds/list/all').reply(500, { message: expectedErrorMessage });

      const httpApi = new HttpDogApi();
      expect.assertions(1);

      try {
        await httpApi.fetchBreedList();
      } catch (e) {
        const err = e as Error;
        expect(err.message).toEqual(expectedErrorMessage);
      }
    });
  });
  describe('fetchImageUrl', () => {
    test('should return the breed list', async () => {
      const expectedResult = 'testUrl';
      const testDogBreed = 'testBreed';
      const testAnwserObj = {
        message: expectedResult,
        status: 'success'
      };
      getApiMock().get(`/breed/${testDogBreed}/images/random`).reply(200, testAnwserObj);
      expect.assertions(1);

      const httpApi = new HttpDogApi();
      const result = await httpApi.fetchDogImageUrl(testDogBreed);

      expect(result).toEqual(expectedResult);
    });

    test('should throw if the api anwsers with a http error code', async () => {
      const testDogBreed = 'testBreed';
      const expectedErrorMessage = 'Server error';
      getApiMock().get(`/breed/${testDogBreed}/images/random`).reply(500, { message: expectedErrorMessage });

      const httpApi = new HttpDogApi();
      expect.assertions(1);

      try {
        await httpApi.fetchDogImageUrl(testDogBreed);
      } catch (e) {
        const err = e as Error;
        expect(err.message).toEqual(expectedErrorMessage);
      }
    });
  });
});