import Image from "next/image";
import Link from "next/link";
import StyledLink from "../components/StyledLink";

function FeatureItem({ title, subtitle, icon, isLeftAligned, color }) {
  return (
    <div
      className={`${
        isLeftAligned ? "has-text-left-desktop" : "has-text-right-desktop"
      } mb-6`}
    >
      <div className={`icon has-text-${color || "primary"} is-large mb-2`}>
        <i className={`fas ${icon} fa-3x`} />
      </div>
      <h3 className="title has-text-weight-bold is-spaced is-5">{title}</h3>
      <p className="subtitle is-6 has-text-grey">{subtitle}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section className="hero section is-block is-relative is-medium">
      <div className="container">
        <div className="columns is-vcentered is-variable is-desktop">
          <div className="column is-8 is-offset-2">
            <h1 className="title has-text-weight-bold is-1 is-size-2-mobile is-spaced">
              The only Todo App you'll ever need
            </h1>
          </div>
        </div>
        <div className="columns is-vcentered is-variable is-4 is-desktop mt-6">
          <div className="column is-12 is-2-desktop">
            <div>
              <FeatureItem
                title="Powerful"
                subtitle="Todo like you've never done before"
                icon="fa-check-double"
                color="danger"
              />
              <FeatureItem
                title="Organized"
                subtitle="Never miss anything"
                icon="fa-list-ol"
              />
              <FeatureItem
                title="Watertight"
                subtitle="Todo where you do best"
                icon="fa-bath"
                color="info"
              />
            </div>
          </div>
          <div className="column is-1" />
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
          <div className="column is-1" />
          <div className="column is-12 is-2-desktop">
            <div>
              <FeatureItem
                isLeftAligned
                title="Easy"
                subtitle="Anyone can do it"
                icon="fa-baby"
              />
              <FeatureItem
                isLeftAligned
                title="Goodbye paper"
                subtitle="Don't write anything down, todo it!"
                icon="fa-book-dead"
                color="danger"
              />
              <FeatureItem
                isLeftAligned
                title="Intelligent"
                subtitle="It knows what's to be done so you can to do"
                icon="fa-brain"
                color="warning"
              />
            </div>
          </div>
        </div>
        <div className="is-spaced has-text-centered">
          <Link href="/" passHref>
            <StyledLink>To done it</StyledLink>
          </Link>
        </div>
      </div>
    </section>
  );
}
