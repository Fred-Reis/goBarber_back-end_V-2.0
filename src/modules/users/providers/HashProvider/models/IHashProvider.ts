export default interface IHashProvider {
  generatHash(payload: string): Promise<string>;
  compareHash(payload: string, hashed: string): Promise<boolean>;
}
