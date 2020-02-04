type TBreedList = string[];

export default interface IAppApi {
  fetchBreedList(): Promise<TBreedList>;
  fetchDogImageUrl(dogBreed: string): Promise<string>;
}
