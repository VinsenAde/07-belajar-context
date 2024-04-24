import Heading from "./heading";
import Section2 from "./section2";
Heading;

export function Post({ title, body }: { title: string; body: string }) {
  return (
    <Section2 isFancy={true}>
      <h3> Profilku</h3>
      <h2> Nama : Vinsensius Ade Winata </h2>
      <h2> NIM : 2141720165</h2>
      <Heading>{title}</Heading>
      <p>
        <i>{body}</i>
      </p>
    </Section2>
  );
}
export function PostAbout({ title, body }: { title: string; body: string }) {
  return (
    <Section2 isFancy={true}>
      <h3> Tentangku</h3>
      <h2> Gamer Abadi </h2>
      <h2> Masih Silver</h2>
      <Heading>{title}</Heading>
      <p>
        <i>{body}</i>
      </p>
    </Section2>
  );
}
export function PostContact({ title, body }: { title: string; body: string }) {
  return (
    <Section2 isFancy={true}>
      <h3> PSSTTT!! HUBUNGI SAYA DISINI</h3>
      <h2> 082222222222 </h2>
      <h2> IG : vnssns.ad</h2>
      <Heading>{title}</Heading>
      <p>
        <i>{body}</i>
      </p>
    </Section2>
  );
}
