import styles from "./page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Barlow_Condensed } from "next/font/google";
import SlideIn from "../components/SlideIn";
import SkillIcon from "../components/SkillIcon";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // 必要なウェイトを指定
  display: "swap",
});

export default function page() {
  return (
    <>
      <Header />
      <section className={styles.aboutme}>
        <div className={`inner ${styles.aboutme_content}`}>
          <SlideIn>
            <h2
              className={`${styles.aboutme_title} ${barlowCondensed.className}`}
            >
              About me
            </h2>
          </SlideIn>

          <SlideIn delay={0.8}>
            <div className={styles.skills}>
              <SlideIn delay={1.2}>
                <h3 className={`text-[50px]! ${barlowCondensed.className}`}>
                  Skill
                </h3>
                <p>以下、私のスキルセットです。</p>
                <p>サイト制作は、Nuxt + microCMSの構成を推してます。</p>
                <p className="mb-[30px]!">もっぱらJAMstack構成推しです。</p>
              </SlideIn>
              <SlideIn as="dl" className={styles.skill_section} delay={1.3}>
                <dt className={barlowCondensed.className}>Design</dt>
                <dd>
                  <SkillIcon
                    src="/image/skill/Figma.png"
                    alt="Figma"
                    width={40}
                  />
                  <SkillIcon
                    src="/image/skill/illustrator.png"
                    alt="Illustrator"
                  />
                  <SkillIcon src="/image/skill/photoshop.png" alt="Photoshop" />
                </dd>
              </SlideIn>
              <SlideIn as="dl" className={styles.skill_section} delay={1.4}>
                <dt className={barlowCondensed.className}>Development</dt>
                <dd>
                  <SkillIcon src="/image/skill/html.png" alt="HTML" />
                  <SkillIcon src="/image/skill/css.png" alt="CSS" />
                  <SkillIcon src="/image/skill/js.png" alt="JavaScript" />
                  <SkillIcon
                    src="/image/skill/typescript.png"
                    alt="TypeScript"
                    width={38}
                  />
                  <SkillIcon src="/image/skill/react.svg" alt="React" />
                  <SkillIcon src="/image/skill/nextjs.png" alt="Next.js" />
                  <SkillIcon src="/image/skill/vue.js.png" alt="Vue.js" />
                  <SkillIcon
                    src="/image/skill/nuxt.png"
                    alt="Nuxt.js"
                    width={56}
                  />
                  <SkillIcon src="/image/skill/angular.png" alt="Angular" />
                  <SkillIcon
                    src="/image/skill/astro.png"
                    alt="Astro"
                    width={40}
                  />
                  <SkillIcon src="/image/skill/php.png" alt="PHP" />
                  <SkillIcon src="/image/skill/ruby.png" alt="Ruby on Rails" />
                  <SkillIcon src="/image/skill/mysql.png" alt="MySQL" />
                  <SkillIcon src="/image/skill/elephant.png" alt="PostgreSQL" />
                  <SkillIcon src="/image/skill/neon.png" alt="Neon" />
                  <SkillIcon src="/image/skill/vercel.png" alt="Vercel" />
                  <SkillIcon src="/image/skill/Wordpress.png" alt="WordPress" />
                  <SkillIcon
                    src="/image/skill/microCMS.png"
                    alt="microCMS"
                    width={44}
                  />
                  <SkillIcon src="/image/skill/shopify.png" alt="Shopify" />
                </dd>
              </SlideIn>
              <SlideIn as="dl" className={styles.skill_section} delay={1.5}>
                <dt className={barlowCondensed.className}>Tool</dt>
                <dd>
                  <SkillIcon
                    src="/image/skill/vscode.png"
                    alt="Visual Studio Code"
                  />
                  <SkillIcon src="/image/skill/docker.png" alt="Docker" />
                  <SkillIcon src="/image/skill/Github.png" alt="GitHub" />
                  <SkillIcon
                    src="/image/skill/chatgpt.png"
                    alt="ChatGPT"
                    width={60}
                  />
                  <SkillIcon
                    src="/image/skill/githubcopilot.svg"
                    alt="GitHub Copilot"
                    width={40}
                  />
                </dd>
              </SlideIn>
              <SlideIn as="dl" className={styles.skill_section} delay={1.3}>
                <dt className={barlowCondensed.className}>Marketing</dt>
                <dd>
                  <SkillIcon
                    src="/image/skill/googleanalytics.png"
                    alt="Google Analytics"
                    width={40}
                  />
                  <SkillIcon
                    src="/image/skill/googlesearchconsole.png"
                    alt="Google Search Console"
                  />
                  <SkillIcon src="/image/skill/hubspot.png" alt="HubSpot" />
                </dd>
              </SlideIn>
            </div>
          </SlideIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
