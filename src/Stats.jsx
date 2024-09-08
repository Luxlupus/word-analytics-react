/* eslint-disable react/prop-types */

export default function Stats({
  numberOfChar,
  instaCharLeft,
  facebookCharLeft,
  numberOfWords,
}) {
  return (
    <section className="stats">
      <Stat heading="Words" number={numberOfWords} />
      <Stat heading="Character" number={numberOfChar} />
      <Stat heading="Instagram" number={instaCharLeft} />
      <Stat heading="Facebook" number={facebookCharLeft} />
    </section>
  );
}

function Stat({ number, heading }) {
  return (
    <section className="stat">
      <span
        //manipulating css with react --> use `` and ternary
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{heading}</h2>
    </section>
  );
}
