import { ChevronDown } from "lucide-react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { ListItemWithSentiment } from "@/components/global/List/ListItemWithSentiment";

interface WordsListProps {
  WordsListData: {
    name: string;
    sentiment: string;
    value: number;
  }[];
}

export function WordsList({ WordsListData }: WordsListProps) {
  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Lista de Palavras"
        children={
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span>Ver todos</span>
            <ChevronDown size={14} />
          </div>
        }
      />
      <div className="flex h-full max-h-[35vh] w-full flex-col gap-8 overflow-y-scroll p-4">
        {WordsListData.map((word, index) => (
          <ListItemWithSentiment key={index} ListItemWithSentimentData={word} />
        ))}
      </div>
    </BaseCard>
  );
}
