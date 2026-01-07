import Card from "./components/Card/Card";
import Block from "./components/Block/Block"
import './App.css';
import image1 from "/public/1.png";
import image2 from "/public/2.png";
import image3 from "/public/3.png";
import image4 from "/public/4.png";
import image5 from "/public/5.png";
import image6 from "/public/6.png";
import image7 from "/public/7.png";
import image8 from "/public/8.png";
import image9 from "/public/9.png";
import image10 from "/public/10.png";
import image11 from "/public/11.png";


function App() {
 
  return (
     <div className="parent">
      <p>User Card</p>
      <div className="cards">
        <Card
        rasm={image1}
        name={"Emily Johnson"}
        ish={"Product Manager"}
        soxa={"Product Development"}
        ></Card>
        <Card 
         rasm={image2}
         name={"Arjun Patel"}
         ish={"Software Engineer"}
         soxa={"Technology"}
         ></Card>
         <Card 
         rasm={image3}
         name={"Carlos Hernández"}
         ish={"UI Designer"}
         soxa={"Design"}
         ></Card>
         <Card 
         rasm={image4}
         name={"Amina Idris"}
         ish={"Marketing Specialist"}
         soxa={"Marketing"}
         ></Card>
         <Card 
         rasm={image5}
         name={"Takumi Sato"}
         ish={"HR Specialist"}
         soxa={"Human Resources"}
         ></Card> 
         <Card 
         rasm={image6}
         name={"Chen Wei"}
         ish={"Data Analyst"}
         soxa={"Data Science"}
         ></Card>
         <Card 
         rasm={image7}
         name={"Emma Dubois"}
         ish={"Sales Manager"}
         soxa={"Sales"}
         ></Card>
           <Card 
         rasm={image8}
         name={"Igor Sokolov"}
         ish={"Quality Assurance"}
         soxa={"Quality Control"}
         ></Card>
      </div>
      <p>Info Card</p>
         <div className="blocks">
          <Block 
          surat={image9}
          title={"Unraveling the Mysteries of the Ocean"}
          text={"From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration. "}
          btn={"Read now"}
          ></Block> 
          <Block 
          surat={image10}
          title={"Discovering the World of Mountains"}
          text={"In this awe-inspiring exploration, we set out to uncover the beauty and allure of mountains, those ancient giants that tower over the landscape and evoke a sense of wonder and admiration."}
          btn={"Read now"}
          ></Block>
          <Block 
          surat={image10}
          title={"Discovering the World of Mountains"}
          text={"In this awe-inspiring exploration, we set out to uncover the beauty and allure of mountains, those ancient giants that tower over the landscape and evoke a sense of wonder and admiration."}
          btn={"Read now"}
          ></Block>
          <Block 
          surat={image10}
          title={"Discovering the World of Mountains"}
          text={"In this awe-inspiring exploration, we set out to uncover the beauty and allure of mountains, those ancient giants that tower over the landscape and evoke a sense of wonder and admiration."}
          btn={"Read now"}
          ></Block>
          <Block 
          surat={image11}
          title={"Exploring the Secrets of the Forest"}
          text={"Step into the mesmerizing realm of the forest, a sanctuary of life teeming with a symphony of sounds, scents, and vibrant green hues. "}
          btn={"Read now"}
          ></Block>
         </div>
     </div>
  )
}

export default App
