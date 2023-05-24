import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState(null);

  const handleCreate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);

    try {
      const res = await fetch(
        "https://backend-assgin.onrender.com/api/create-product",
        {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          body: formData,
        }
      );

      if (res.status === 201) window.alert("Product added successfully.");
      else window.alert("Some error occured, open console for more info.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
      <section>
        <h2 className="font-semibold text-lg">Add Product</h2>
        <form method="POST">
          <div className="relative flex flex-nowrap items-stretch my-5">
            <span
              className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid text-neutral-700 bg-neutral-100 border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6]"
              id="addon-wrapping"
            >
              Product Name
            </span>
            <input
              type="text"
              className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
              placeholder="Product Name"
              aria-label="Product Name"
              aria-describedby="addon-wrapping"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="relative mb-5 flex flex-wrap items-stretch">
            <span className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 bg-neutral-100">
              Price $
            </span>
            <input
              type="Number"
              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none "
              aria-label="Amount (to the nearest dollar) "
              placeholder="Product Price"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="relative flex flex-wrap items-stretch mb-5">
            <span className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 bg-neutral-100">
              Product Description
            </span>
            <textarea
              className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
              aria-label="With textarea"
              placeholder="Product Description"
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-5">
            <label
              htmlFor="formFile"
              className="mb-2 inline-block text-neutral-700"
            >
              Select Product Image
            </label>
            <input
              className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normaltransition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem]  file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 hover:text-neutral-700 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none text-neutral-200 "
              type="file"
              id="formFile"
              placeholder="Product Image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>
          <button
            type="submit"
            onClick={handleCreate}
            className="border bg-black/[.9] text-white rounded-lg py-2 px-3 hover:bg-white/[.9] hover:text-black hover:border-spacing-1 border-black duration-200 capitalize my-2 "
          >
            Add Product
          </button>
        </form>
      </section>
    </main>
  );
};

export default AddProduct;
