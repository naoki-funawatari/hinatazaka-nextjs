import useSWR from "swr";
import { SingleInfo } from "@/models";
import singles from "@/data/singles.json";

const fetchSingles = async (): Promise<SingleInfo[]> => singles;
const useSingles = () => useSWR("singles", fetchSingles);

export { fetchSingles, useSingles };
