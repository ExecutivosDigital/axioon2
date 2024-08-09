"use client";
import { twMerge } from "tailwind-merge";
import { EllipsisVertical } from "lucide-react";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { DonutChartWithFooterData } from "@/components/global/DonutChartWithFooterData";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useMentionsDataContext } from "@/context/MentionsData";

interface CommentsDonutGraphProps {
  CommentsDonutGraphData: {
    ChartOptions: {
      series: number[];
      options: ApexOptions;
    };
    footerData: {
      title: string;
      color: string;
      value: number;
    }[];
  };
}

interface CommentsByGenderProps {
  male: number;
  female: number;
  unknown: number;
}

interface SeriesProps {
  series: number[];
}

export function CommentsDonutGraph({
  CommentsDonutGraphData,
}: CommentsDonutGraphProps) {
  const [instagramComments, setInstagramComments] =
    useState<CommentsByGenderProps>();
  const [commentsByGender, setCommentsByGender] = useState<SeriesProps>();
  const { isGettingData, mentionsData } = useMentionsDataContext();
  const [footerData, setFooterData] = useState([
    {
      title: "Homem",
      color: "bg-sky-900",
      value: 1624,
    },
    {
      title: "Mulher",
      color: "bg-sky-400",
      value: 1267,
    },
    {
      title: "Indefinido",
      color: "bg-sky-200",
      value: 162,
    },
  ]);

  useEffect(() => {
    if (mentionsData) {
      setInstagramComments(mentionsData.mentions.commentsByGender);
    }
  }, [mentionsData]);

  useEffect(() => {
    const genderValues = [instagramComments];
    const summedValues = genderValues.reduce(
      (acc, curr) => {
        if (curr) {
          acc!.male += curr.male;
          acc!.female += curr.female;
          acc!.unknown += curr.unknown;
        }
        return acc;
      },
      {
        male: 0,
        female: 0,
        unknown: 0,
      },
    );

    setCommentsByGender({
      series: [summedValues!.male, summedValues!.female, summedValues!.unknown],
    });

    setFooterData([
      {
        title: "Homem",
        color: "bg-sky-900",
        value: summedValues!.male,
      },
      {
        title: "Mulher",
        color: "bg-sky-400",
        value: summedValues!.female,
      },
      {
        title: "Indefinido",
        color: "bg-sky-200",
        value: summedValues!.unknown,
      },
    ]);
  }, [instagramComments]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Comentários por Gênero"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      {isGettingData ? (
        <div className="h-full w-full bg-gradient-to-r from-gray-10 via-gray-20 to-gray-10" />
      ) : (
        <DonutChartWithFooterData
          ChartOptions={CommentsDonutGraphData.ChartOptions}
          series={commentsByGender ? commentsByGender?.series : []}
          footerData={footerData.map((data) => {
            return (
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <div
                    className={twMerge("h-2 w-2 rounded-full", data.color)}
                  />
                  <span
                    key={data.title}
                    className="text-center text-xs text-zinc-500 lg:text-sm 2xl:text-base"
                  >
                    {data.title}
                  </span>
                </div>
                <strong className="text-sm lg:text-base 2xl:text-lg">
                  {data.value}
                </strong>
              </div>
            );
          })}
        />
      )}
      <BaseCardFooter />
    </BaseCard>
  );
}
