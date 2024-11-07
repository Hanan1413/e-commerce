import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

const Filters = () => {

  const {brandNames}= useLoaderData();
  return (
    <Form className=" align-baseline w-52 md:w-80 rounded-md px-8 py-4 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      SEARCH
      <FormInput
        type="search"
        name="search"
        size="input-sm"
        placeholder="search"
      />
      {/* Categories */}
      <FormInput
        name="category"
        // list={brandNames}
        size="input-sm"
        // list={MediaMetadata.categories}
        placeholder="search"
      />
      {/* Companies */}
      <FormSelect
      label='select brand'
        name="brand"
        list={brandNames}
        size="input-sm"
        type='select'
      />
      {/* Order */}
      {/* <FormSelect
        label="sort by"
        name="order"
        size="input-sm"
        list={["a-z", "z-a", "hight", "low"]}
        placeholder="search"
      /> */}
      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm ">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
};
export default Filters;
