import axios from "axios";
import { useQuery } from "react-query";

const API_URL =
  "https://apisf.p2pcdn.xyz/api/v1/unique-tournament/17/season/41886/statistics/info";

const fetchTeamAndNation = () => {
  return axios.get(`${API_URL}`);
};

const useTeamAndNation = () => {
  return useQuery({
    queryKey: ["teamAndNation"],
    queryFn: () => fetchTeamAndNation(),
  }); // Wrap the fetch call in a function
};

export default useTeamAndNation;
