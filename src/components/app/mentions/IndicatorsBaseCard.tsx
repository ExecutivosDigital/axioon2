"use client";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { twMerge } from "tailwind-merge";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { useMentionsDataContext } from "@/context/MentionsData";

interface IndicatorsBaseCardProps {
  IndicatorsData: {
    name: string;
    value: number;
    trendingUp: boolean;
    trendingValue: string;
  };
  ChartOptions: {
    series: {
      name: string;
      data: number[];
    }[];
    options: ApexOptions;
  };
}

export function IndicatorsBaseCard({
  IndicatorsData,
  ChartOptions,
}: IndicatorsBaseCardProps) {
  const { isGettingData } = useMentionsDataContext();
  return (
    <BaseCard className="relative h-36 overflow-hidden p-0">
      {isGettingData ? (
        <div className="h-full w-full bg-gradient-to-r from-gray-10 via-gray-20 to-gray-10" />
      ) : (
        <div className="flex items-center justify-between p-2 lg:p-4">
          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-500 xl:text-xs 3xl:text-sm">
              {IndicatorsData.name}
            </span>
            <strong className="text-xs xl:text-sm 3xl:text-base">
              {IndicatorsData.value}
            </strong>
          </div>
          <div className="flex w-full lg:w-2/5">
            <ReactApexChart
              options={ChartOptions.options}
              series={ChartOptions.series}
              type="line"
            />
          </div>
          <div className="flex flex-col">
            <span
              className={twMerge(
                "text-[10px] font-semibold xl:text-xs 3xl:text-sm",
                IndicatorsData.trendingUp ? "text-green-500" : "text-red-500",
              )}
            >
              {IndicatorsData.trendingUp ? "+" : "-"}
              {IndicatorsData.trendingValue}
            </span>
            <span className="text-xs text-zinc-500 xl:text-sm 3xl:text-base">
              {IndicatorsData.name}
            </span>
          </div>
        </div>
      )}
    </BaseCard>
  );
}
