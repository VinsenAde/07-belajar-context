"use client";
import { ProfilePage } from "@/components/templates/profile_page";
import MyApp from "@/components/atoms/myapp";

export default function Profile() {
  return <MyApp Component={ProfilePage} pageProps={undefined} />;
}
