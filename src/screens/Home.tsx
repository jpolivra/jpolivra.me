import profile from "@assets/profile.jpeg";
import { SimpleIconLink } from "@components/SimpleIconLink";
import { TagLink } from "@components/TagLink";

export function Home() {
  return (
    <main className="py-10 px-7">
      <h1 className="text-4xl font-extrabold max-w-[650px] mb-8 m-auto">
        João Oliveira
      </h1>
      <article className="max-w-[650px] m-auto flex flex-col gap-5 mb-8">
        <p>Hi! I'm João Oliveira.</p>
        <p>
          {"Working at "}
          <TagLink
            title="Framework Digital"
            url="https://www.frameworkdigital.com.br/"
            iconUrl="https://static.wixstatic.com/media/98d7c3_494b456fb15241ba955f59824763eef1%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/98d7c3_494b456fb15241ba955f59824763eef1%7Emv2.png"
          />
        </p>
        <p>
          {`I'm a software engineer. I started my career at 2021 and since there
          I've been building agricultural technology at `}
          <TagLink
            title="Syngenta Digital"
            url="https://www.syngentadigital.ag/"
            iconUrl="https://www.syngentadigital.ag/wp-content/themes/syngentaldigital/app/images/favicon.png?v=2"
          />
          {`. Currently, I've been spenting my time learning about minecraft modding and
          computer graphics specifically WebGL, you can find some stuff I make`}
          here.
        </p>
      </article>
      <article className="max-w-[650px] m-auto flex flex-col-reverse gap-5 md:flex-row">
        <aside className="basis-1/2 flex flex-col gap-5">
          <p>
            I write blog posts about the things I am building and learning
            about. Sometimes, I also do some live coding streams on YouTube.
          </p>
          <p>Find me on</p>
          <p className="flex gap-2">
            <SimpleIconLink
              icon="i-simple-icons-github"
              title="GitHub"
              url="https://www.github.com/jpolivra"
            />
            <SimpleIconLink
              icon="i-simple-icons-youtube"
              title="YouTube"
              url="https://www.youtube.com/@joaooliveiradev"
            />
          </p>
        </aside>
        <div className="basis-1/2 p-1 rounded-lg">
          <img
            src={profile}
            className="rounded-lg m-auto"
            alt="myself in a monocromatic color palette"
          />
        </div>
      </article>
    </main>
  );
}
