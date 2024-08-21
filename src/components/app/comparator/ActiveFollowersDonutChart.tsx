"use client";
import { ApexOptions } from "apexcharts";
import { EllipsisVertical } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { DonutChartWithFooterData } from "@/components/global/DonutChartWithFooterData";
import { useComparatorDataContext } from "@/context/ComparatorData";
import { Skeleton } from "@/components/global/Skeleton";

interface ActiveFollowersDonutChartProps {
  FollowersDonutChartData: {
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

interface SeriesProps {
  series: number[];
}

export function ActiveFollowersDonutChart({
  FollowersDonutChartData,
}: ActiveFollowersDonutChartProps) {
  const { activeUserData, isGettingData } = useComparatorDataContext();
  const [facebookFollowers, setFacebookFollowers] = useState<number>();
  const [instagramFollowers, setInstagramFollowers] = useState<number>();
  const [tiktokFollowers, setTiktokFollowers] = useState<number>();
  const [youtubeFollowers, setYoutubeFollowers] = useState<number>();
  const [followers, setFollowers] = useState<SeriesProps>();
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
    if (activeUserData) {
      setFacebookFollowers(
        activeUserData.profileEvolution.facebook.find(
          (item) => item.name === "Seguidores",
        )?.value,
      );
      setInstagramFollowers(
        activeUserData.profileEvolution.instagram.find(
          (item) => item.name === "Seguidores",
        )?.value,
      );
      setTiktokFollowers(
        activeUserData.profileEvolution.tiktok.find(
          (item) => item.name === "Seguidores",
        )?.value,
      );
      setYoutubeFollowers(
        activeUserData.profileEvolution.youtube.find(
          (item) => item.name === "Seguidores",
        )?.value,
      );
    }
  }, [activeUserData]);

  useEffect(() => {
    setFollowers({
      series: [
        facebookFollowers!,
        instagramFollowers!,
        tiktokFollowers!,
        youtubeFollowers!,
      ],
    });

    setFooterData([
      {
        title: "Facebook",
        color: "bg-sky-900",
        value: facebookFollowers!,
      },
      {
        title: "Instagram",
        color: "bg-sky-700",
        value: instagramFollowers!,
      },
      {
        title: "TikTok",
        color: "bg-sky-400",
        value: tiktokFollowers!,
      },
      {
        title: "Youtube",
        color: "bg-sky-200",
        value: youtubeFollowers!,
      },
    ]);
  }, [
    facebookFollowers,
    instagramFollowers,
    tiktokFollowers,
    youtubeFollowers,
  ]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Seguidores Candidato 1"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-[17rem] w-11/12" />
      ) : (
        <DonutChartWithFooterData
          series={followers ? followers?.series : []}
          ChartOptions={FollowersDonutChartData.ChartOptions}
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
