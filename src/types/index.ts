/**
 * Different seasons of Mistria
 */
export type Season = 'spring'
| 'summer'
| 'fall'
| 'winter';

/**
 * Data defining a crop type.
 */
export interface Crop {
  name: string;

  seasons: Season[];

  cost: number;

  yield: number;

  sell: number;

  days: number;

  regrow: number;

  museum: boolean;

  sapling: boolean;
}
