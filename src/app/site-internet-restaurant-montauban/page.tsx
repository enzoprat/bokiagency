import type { Metadata } from "next";
import { TradePage } from "@/components/templates/TradePage";
import { buildTradeMetadata } from "@/components/templates/tradeMetadata";
import { getTradeBySlug } from "@/lib/data/trades";

const trade = getTradeBySlug("restaurant-montauban")!;

export const metadata: Metadata = buildTradeMetadata(trade);

export default function Page() {
  return <TradePage trade={trade} />;
}
