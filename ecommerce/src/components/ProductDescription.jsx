import React from "react";

const ProductDescription = () => {
  return (
    <div className="mt-20">
      <div className="flex gap-3 mb-4">
        <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">
          Description
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Care Guide
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Size Guide
        </button>
      </div>
      <div className="flex flex-col pb-16">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla facilis
          nesciunt doloribus, delectus aliquam nam inventore porro, totam
          nostrum obcaecati ipsa soluta illum natus, nemo numquam amet
          veritatis! Mollitia earum nostrum reprehenderit non nihil soluta
          recusandae nam eos, officia alias.
        </p>
        <p className="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          repudiandae, enim incidunt quia atque in eaque accusantium possimus
          unde esse ut velit aspernatur distinctio earum assumenda, et illo
          ipsam? Ex.
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
