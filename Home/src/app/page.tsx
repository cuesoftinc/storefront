import {
  ForDev,
  Hero,
  JoinUs,
  OpenSource,
  OurOffering,
  OurService,
  StoreHome,
} from "@/components/homerafce";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.home__page}>
      <Hero />
      <StoreHome />
      <OurOffering
        mainHeading={"Our Offerings"}
        subHeading={"Key Features"}
        headOne={"Discover Unique Products"}
        headTwo={"Seamless Buying Experience"}
        headThree={"Empower Sellers"}
        headFour={"Customizable Storefronts"}
        headFive={"Efficient Order Management"}
        contentOne={
          "Explore a curated selection of hand- picked items, ranging from hand- made crafts to cutting edge technology"
        }
        contentTwo={
          "Enjoy a smooth and secure shopping journey with very easy navigation, secure transactions and personalizes recommendations"
        }
        contentThree={
          "For Sellers: Showcase your items to a global audience, mange inventory effortlessly, and build a loyal customer base"
        }
        contentFour={
          "Sellers can create unique stores that reflects their brand identity, making it easy for customers to connect with their products"
        }
        contentFive={
          "Streamline your business operations with integrated order management, making it easy to track, process, and fulfill orders"
        }
      />
      <OurService />
      <ForDev />
      <OpenSource />
      <JoinUs />
      <OurOffering
        mainHeading={"Our Offerings"}
        subHeading={"Storefront for Your Business"}
        headOne={"Powerful E-commerce Solutions"}
        headTwo={"Extendable Features"}
        headThree={"Scalable Capabilities"}
        headFour={"Secure User Access"}
        headFive={"Total Control and Security"}
        contentOne={
          "Tailor Storefront to meet your specific business requirements. Easily adapt and scale the platform based on the unique needs of your online store"
        }
        contentTwo={
          "Integrate seamlessly with your current apps, whether it’s Salesforce or React. Enhance functionalities with a smooth integration experience using Storefront"
        }
        contentThree={
          "Leverage Role-Based Access Control (RBAC) with customizable rules. Benefit from audit logging, single sign-on, back up, authentication integration, etc"
        }
        contentFour={
          "Ensure user authentication with secure sign-ups and logins. Utilize Google and GitHub Auth, SAML, or OIDC from popular providers for more security"
        }
        contentFive={
          "Host Storefront securely on your terms for total control, privacy, and data  security. Enjoy full access to internal data sources and APIs"
        }
      />
    </main>
  );
}
