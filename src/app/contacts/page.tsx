"use client";
import { ContactsPage, ProfilePage } from "@/components/templates/profile_page";
import MyApp from "@/components/atoms/myapp";

export default function Contacts() {
  return <MyApp Component={ContactsPage} pageProps={undefined} />;
}
