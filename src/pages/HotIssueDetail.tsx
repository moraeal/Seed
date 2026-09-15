import { useParams } from "react-router-dom";
import { getPublicInterestWatchCase } from "../data/publicInterestWatch";
import NewsDetail from "./NewsDetail";
import PublicInterestWatchDetail from "./PublicInterestWatchDetail";

export default function HotIssueDetail() {
  const { slug = "" } = useParams();
  const tracker = getPublicInterestWatchCase(slug);

  return tracker?.timeline?.length ? <PublicInterestWatchDetail /> : <NewsDetail />;
}
