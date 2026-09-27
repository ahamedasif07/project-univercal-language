import { Metadata } from "next";
import { NotFoundView } from "@/components/common/not-found-view";

export const metadata: Metadata = {
  title: "404 - Page Not Located | Universal Language",
  description: "The page or resource you are looking for does not exist on our global campus map.",
};

export default function MainNotFound() {
  return <NotFoundView />;
}
