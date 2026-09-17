import { Navigate, useParams } from "react-router-dom";
import { getPublicInterestWatchCase } from "../data/publicInterestWatch";
import NewsDetail from "./NewsDetail";

export default function HotIssueDetail() {
  const { slug = "" } = useParams();
  const tracker = getPublicInterestWatchCase(slug);

  return tracker?.timeline?.length ? <Navigate to={`/monitoring/${tracker.slug}`} replace /> : <NewsDetail />;
}
