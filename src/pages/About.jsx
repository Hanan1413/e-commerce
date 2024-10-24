const About = () => {
  return (
    <div className=" py-20">
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center ">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl ">
          We love
        </h1>
        <div className="stats bg-black shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Shop.Co
            </div>
          </div>
        </div>
      </div>
      <p className="mt-12 text-lg leading-8 max-w-2xl mx-auto text-center">
        Welcome to Shop.co, your one-stop destination for quality products at
        unbeatable prices! We're a dedicated e-commerce platform that brings
        together a wide range of items, from everyday essentials to the latest
        trends, all in one place. Our mission is simple: to make shopping
        convenient, affordable, and enjoyable for everyone.
      </p>

      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto text-center">
        At Shop.co, we understand the value of your time and money. That's why
        we've carefully curated a collection of top-notch products from trusted
        brands and local artisans to ensure that you get the best without
        compromise. Whether you're looking for the latest fashion, home
        essentials, or unique gifts, we have something for everyone.
      </p>
    </div>
  );
};

export default About;
