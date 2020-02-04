import IAppApi from './IAppApi';

type TApiShape<MessageType> = {
  message: MessageType | string
}

type TApiBreedListResponse = {
  [x: string]: string[]
}

class HttpDogApi implements IAppApi {
  async fetchBreedList() {
    const response = await fetch(`${this.getApiBaseUrl()}/breeds/list/all`);
    const apiResponseObj = await response.json() as TApiShape<TApiBreedListResponse>;

    if (!response.ok) {
      throw Error(apiResponseObj.message as string);
    }

    return [
      ...Object.keys(apiResponseObj.message as TApiBreedListResponse)
    ]
  }

  async fetchDogImageUrl(dogBreed: string) {
    const response = await fetch(`${this.getApiBaseUrl()}/breed/${dogBreed}/images/random`);
    const apiResponseObj = await response.json() as TApiShape<string>;

    if (!response.ok) {
      throw Error(apiResponseObj.message);
    }

    return apiResponseObj.message;
  }

  private getApiBaseUrl() {
    const baseUrl = process.env.REACT_APP_API_URL;

    if (!baseUrl) {
      throw Error('Invalid API base url.');
    }

    return baseUrl;
  }
}

export default HttpDogApi;
