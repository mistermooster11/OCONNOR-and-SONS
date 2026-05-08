import type { ChannelPageData } from "@/components/custom/channel/types";
import oconnorSons from "./oconnor-sons";

const channelDataMap: Record<string, ChannelPageData> = {
  "oconnor-sons": oconnorSons,
};

export function getChannelData(slug: string): ChannelPageData | null {
  return channelDataMap[slug] ?? null;
}

export { channelDataMap };
