import { v4 as uuid } from "uuid";
import { features } from "../../data/pageData";

export default function Features() {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl space-y-3">
          <h3 className="font-semibold text-primary">Features</h3>
          <p className="text-3xl text-secondary font-semibold sm:text-4xl">
            Do more with less complexity
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            congue, nisl eget molestie varius
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-x-12 divide-y divide-accent [&>.feature-1]:pl-0 sm:grid-cols-2 sm:gap-y-8 sm:divide-y-0 lg:divide-x lg:grid-cols-3 lg:gap-x-0">
            {features.map((item, idx) => (
              <li
                key={uuid()}
                className={`feature-${idx + 1} space-y-3 py-8 lg:px-12 sm:py-0`}
              >
                <div className="w-12 h-12 border text-primary rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-lg text-secondary font-semibold">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
