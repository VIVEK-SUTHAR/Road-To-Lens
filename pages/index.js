import { useQuery } from "@apollo/client";
import AllPosts from "../components/AllPosts";
import Profile from "../components/Profile.js";
import recommendedProfilesQuery from "../queries/recommendedProfilesQuery";
export default function Home() {
  const { loading, error, data } = useQuery(recommendedProfilesQuery);
  console.log(data);
  console.log(typeof data);
  if (loading) return 'Loading..';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <div className="flex flex-row justify-between">
        <AllPosts />
        <div className=" bg-[#2a2a2a] my-11 rounded-lg max-h-screen overflow-y-scroll min-w-min">
          <h2 className="text-4xl text-center text-red-50">Recommende Profiles</h2>
          {data.recommendedProfiles.map((profile, index) => {
            console.log(`Profile ${index}:`, profile);
            return <Profile key={profile.id} profile={profile} displayFullProfile={false} />;
          })}
        </div>
      </div>
    </>
  )
}