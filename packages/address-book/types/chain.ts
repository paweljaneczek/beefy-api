import { Mofi } from './mofi';
import type Token from './token';

export default interface Chain {
  readonly platforms: Record<string, Record<string, unknown>> & {
    mofi: Mofi;
  };
  readonly tokens: Record<string, Token>;
  readonly tokenAddressMap: Record<string, Token>;
}
