import ProfileCard from "./ProfileCard";
import sarahImage from "./assets/sarah.jpg";
import michaelImage from "./assets/michael.jpg";
import emmaImage from "./assets/emma.jpg";

const profiles = [
  {
    image: sarahImage,
    name: "Sarah Johnson",
    jobTitle: "Front-End Developer",
    bio: "I love creating beautiful and user-friendly websites.",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    image: michaelImage,
    name: "Michael Smith",
    jobTitle: "UX Designer",
    bio: "I enjoy designing simple and enjoyable user experiences.",
    skills: ["Figma", "UX Research", "Prototyping"]
  },
  {
    image: emmaImage,
    name: "Emma Williams",
    jobTitle: "Web Designer",
    bio: "I create modern and creative designs for the web.",
    skills: ["HTML", "CSS", "Web Design"]
  }
];
function App() {
  return (
   <div className="page-container">
      <h1>Reusable Profile Card</h1>

 <div className="profiles-container">
      {profiles.map(function(profile) {
        return (
          <ProfileCard
          key={profile.name}
          image={profile.image}
          name={profile.name}
          jobTitle={profile.jobTitle}
          bio={profile.bio}
          skills={profile.skills}
          />
        );

      })}

 </div> 
</div>
  );
}

export default App;