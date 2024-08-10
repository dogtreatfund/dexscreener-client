import { Pair, PairSchema } from "./types";
import { z } from "zod";

export interface DexScreenerClientApi {
  getPairsByTokenAddresses: (args: {
    tokenAddresses: string[];
  }) => Promise<GetPairsByTokenAddresses>;
}

export const GetPairsByTokenAddressesSchema = z.object({
  schemaVersion: z.string(),
  pairs: z.array(PairSchema),
});
type GetPairsByTokenAddresses = z.infer<typeof GetPairsByTokenAddressesSchema>;

export const DexScreenerClient = () => {
  const baseUrl = `https://api.dexscreener.com/latest`;
  const getPairsByTokenAddresses: DexScreenerClientApi["getPairsByTokenAddresses"] =
    ({ tokenAddresses }) => {
      return fetch(`${baseUrl}/dex/tokens/${tokenAddresses.join(",")}`)
        .then((res) => res.json())
        .then((data) => {
          return GetPairsByTokenAddressesSchema.parse(data);
        });
    };
  return {
    getPairsByTokenAddresses,
  };
};
