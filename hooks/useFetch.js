import axios from "axios";
import { useQuery } from "react-query";

const API_URL =
  "https://apisf.p2pcdn.xyz/api/v1/unique-tournament/17/season/41886/statistics";

const fetchTournamentStatistics = (
  page,
  orderGoal,
  group,
  minApps,
  accumulation
) => {
  return axios.get(
    `${API_URL}?limit=20&order=${orderGoal}&accumulation=total&group=${group}&offset=${
      20 * (page - 1)
    }&minApps=${minApps}&accumulation=${accumulation}`
  );
};

const useTournamentStatistics = (
  page,
  orderGoal,
  group,
  minApps,
  accumulation
) => {
  return useQuery({
    queryKey: [
      "tournamentStatistics",
      page,
      orderGoal,
      group,
      minApps,
      accumulation,
    ],
    queryFn: () =>
      fetchTournamentStatistics(page, orderGoal, group, minApps, accumulation),
    cacheTime: 15000,
    staleTime: 10000,
  }); // Wrap the fetch call in a function
};

export default useTournamentStatistics;
