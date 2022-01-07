import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this site for my school GHS Qasimka</p>
      <p>I dedicated this site to My Mother and Lovely Son Zulqurnain Haider</p>
      <StaticImage
        alt="Image not found"
        src="E:\pictures\Zulqurnain.jpeg"
      />
      <p><font color ="blue" size = "30" face="Edwardian Script ITC">Zulqurnain Haider</font></p>
      <StaticImage
        alt="Image not found"
        src="E:\gatsby\step_00\ghs_qasimka_bwn_abid\yaqoob.jpeg"
      />
      <p><font color ="pink" size = "30" face="Edwardian Script ITC">Muhammad Yaqoob</font></p>
      <p>In This Moments I thanks to Sir Muhammad Yaqoob for his
         motivation and I congratulate him to 
        starting new carriar as lecturer.
      </p>
      <StaticImage
        alt="Image not found"
        src="E:\pictures\Amir.jpeg"
      />
      <p><font color ="green" size = "30" face="Edwardian Script ITC">Amir Shahzad</font></p>
      <p>I also mention here My compitent student Amir Shahzad for
         assesstance to complete this work </p>
      <StaticImage
        alt="Image not found"
        src="E:\pictures\kashif.jpeg"
      />
      <p><font color ="red" size = "30" face="Edwardian Script ITC">Muhammad Kashif</font></p>
      <p>I also mention here My cooperative student Muhammad
         Kashif for his coperation</p>
      <StaticImage
        alt="Image not found"
        src="E:\pictures\Abubaqar.jpeg"
      />
      <p><font color ="yellow" size = "30" face="Edwardian Script ITC">Abubakar</font></p>
      <p>I also thanks My classmate Abubakar for his guidance in this work</p>
      <StaticImage
        alt="Image not found"
        src="E:\pictures\Ali.jpeg"
      />
      <p><font color ="blue" size = "30" face="Edwardian Script ITC">Ali Ahmad</font></p>
      <p>I also to motivate my student Ali Ahmad to learn this Skill</p>
      <StaticImage
        alt="Image not found"
        src="E:\pictures\Adnan.jpeg"
      />
      <p><font color ="black" size = "30" face="Edwardian Script ITC">Adnan Ali</font></p>
      <p>I also to motivate My nephew Adnan Ali to learn this skill</p>
    </Layout>
  )
}

export default IndexPage