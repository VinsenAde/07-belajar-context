import Heading from "../atoms/heading";
import { Post, PostAbout, PostContact } from "../atoms/post";
import Section2 from "../atoms/section2";
import AllPosts from "../organisms/allpost";

export function ProfilePage() {
  return (
    <Section2 isFancy={true}>
      <Heading>Profil Saya</Heading>
      <Post title="Hello traveller!" body="Baca tentang petualangan saya." />
      <AllPosts />
    </Section2>
  );
}
export function ContactsPage() {
  return (
    <Section2 isFancy={true}>
      <Heading>Contacts Saya</Heading>
      <PostContact
        title="Hello traveller!"
        body="Baca tentang petualangan saya."
      />
      <AllPosts />
    </Section2>
  );
}
export function AboutPage() {
  return (
    <Section2 isFancy={true}>
      <Heading>About Saya</Heading>
      <PostAbout
        title="Hello traveller!"
        body="Baca tentang petualangan saya."
      />
      <AllPosts />
    </Section2>
  );
}
