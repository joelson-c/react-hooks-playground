import IAppApi from "../../api/IAppApi";

class HTTPDogAPI implements IAppApi {
  fetchBreedList() {
    return Promise.resolve([
      'affenpinscher',
      'african',
      'airedale',
      'australian',
      'shepherd'
    ]);
  }

  fetchDogImageUrl(dogBreed: string) {
    return Promise.resolve('testUrl');
  }
}

export default HTTPDogAPI;
