import Container from "@/components/Container";
import Activities from "@/components/activities/Activities";
import CareerTalks from "@/components/career-talks/CareerTalks";
import Goals from "@/components/goals/Goals";
import Header from "@/components/header/Header";
import Tutorials from "@/components/tutorials/Tutorials";
import HttpRequest from "@/utils/HttpRequest";

export default function Home({ activities, tutorials, talks }) {
  return (
    <>
      <Header />
      <Container>
        <Goals />
        <Activities activities={activities} />
        <Tutorials tutorials={tutorials} />
        <CareerTalks talks={talks} />
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  const activities = await new HttpRequest().get("activities");
  const tutorials = await new HttpRequest().get("tutorials");
  const talks = await new HttpRequest().get("talks");

  return {
    props: {
      activities: activities.data.activities,
      tutorials: tutorials.data.tutorials,
      talks: talks.data.talks,
    },
  };
}
