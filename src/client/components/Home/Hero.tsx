import { ArrowRightIcon } from "@heroicons/react/20/solid";
export default () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-slate-900 via-base-300 to-slate-900">
      <div className="hero-content text-center">
        <div className="m-w-md">
          <h1 className="text-5xl font-bold text-primary">Hello Universe</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            fugiat ut assumenda excepturi exercitationem quasi. In deleniti
            eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-secondary btn-lg">
            Get Started <ArrowRightIcon height={24} width={24} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
