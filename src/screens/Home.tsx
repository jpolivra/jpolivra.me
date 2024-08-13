import profile from "@assets/profile.jpeg";

export function Home() {
  return (
    <main className="py-10 px-7">
      <h1 className="text-4xl font-extrabold max-w-[650px] mb-8 m-auto">
        João Oliveira
      </h1>
      <article className="max-w-[650px] m-auto flex flex-col gap-5 mb-8">
        <p>Hi! I'm João Oliveira.</p>
        <p>Working at Framework Digital</p>
        <p>
          I'm a software engineer. I started my career at 2021 and since there
          I've been building agricultural technology at Syngenta Digital.
          Currently, I've been spenting my time learning about computer graphics
          specifically with WebGL, you can find some stuff I make here.
        </p>
      </article>
      <article className="max-w-[650px] m-auto flex flex-col-reverse gap-5 md:flex-row">
        <aside className="basis-1/2 flex flex-col gap-5">
          <p>
            I write blog posts about the things I am building and learning
            about. Sometimes, I also do some live coding streams on YouTube.
          </p>
          <p>Find me on</p>
          <span>Github</span>
          <span>YouTube</span>
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
