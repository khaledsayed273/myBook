import Aside from "../components/Aside";
import Section from "../components/Section";

export default function Home({searchParams}) {
  return (
    <>
      <Section />
      <Aside searchParams={searchParams} />
    </>
  )
}
