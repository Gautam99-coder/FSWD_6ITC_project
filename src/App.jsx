import DefaultProps from './component/defaultProps.jsx';
import GreetingClass from './component/ITC.jsx';
import PropExample from './component/prop_example.jsx';
import UserCard1 from './component/usercardcomp.jsx';
function App() {
  const customfunction=()=>{
    console.log("Custom onClick executed.");
  }
  return (
    <>
      {/* <GreetingClass /> */}
      <UserCard1 />
      <PropExample
      img_url="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2ac41f74056361.5c1faf697fd88.jpg"
      button_txt="Save" data="Gautam Bro"/>
      <PropExample
      img_url="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2ac41f74056361.5c1faf697fd88.jpg"
      button_txt="Save" data="Gautam Bro"/>
      <DefaultProps/>
      <DefaultProps onclick={customfunction}/>
      <DefaultProps text="Press Here "/>
      <DefaultProps
      text="Press Here "
      onclick={customfunction}/>
    </>
  );
}

export default App;
