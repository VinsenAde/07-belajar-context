"use client";
import { AboutPage, ProfilePage } from "@/components/templates/profile_page";
import MyApp from "@/components/atoms/myapp";

export default function About() {
  return <MyApp Component={AboutPage} pageProps={undefined} />;
}
