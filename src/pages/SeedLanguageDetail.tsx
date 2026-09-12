import { useParams } from "react-router-dom";
import FreedomSeedLanguageDetail from "./FreedomSeedLanguageDetail";
import SeedLanguageDetailBase from "./SeedLanguageDetailBase";

export default function SeedLanguageDetail() {
  const { slug = "" } = useParams();
  if (slug === "freedom-as-citizen-agency") return <FreedomSeedLanguageDetail />;
  return <SeedLanguageDetailBase />;
}
