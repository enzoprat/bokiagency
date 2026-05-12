import type { Metadata } from "next";
import { CityPage } from "@/components/templates/CityPage";
import { buildCityMetadata } from "@/components/templates/cityMetadata";
import { getCityBySlug } from "@/lib/data/cities";

const city = getCityBySlug("beaumont-de-lomagne")!;

export const metadata: Metadata = buildCityMetadata(city);

export default function Page() {
  return <CityPage city={city} />;
}
