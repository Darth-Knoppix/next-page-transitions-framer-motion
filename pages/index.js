import Image from "next/image";
import Link from "next/link";
import StyledLink from "../components/StyledLink";

export default function Home() {
  return (
    <section className="hero section is-block is-relative is-medium">
      <div className="container">
        <div className="columns is-vcentered is-desktop">
          <div className="column">
            <figure className="image">
              <Image
                src="/assets/task.png"
                layout="responsive"
                width={780}
                height={501}
              />
            </figure>
          </div>
          <div className="column is-8-desktop has-text-centered-touch">
            <header>
              <h1 className="title has-text-weight-bold is-1 is-size-2-mobile is-spaced">
                The only Todo App you'll ever need
              </h1>
              <p className="subtitle">
                Imagine if you never had to write another Todo App example ever
                again. Now you don't have to imagine.
              </p>
            </header>
            <div className="buttons is-inline-flex mt-5">
              <Link href="/features" passHref>
                <StyledLink>Do it</StyledLink>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
