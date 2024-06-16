import React from "react";
import Link from "next/link";

const NextGeneration: React.FC = () => {
  return (
    <div className=" text-black text-small text-center">
      <p>
        Site web conceptualisé et développé par <br className="ph:hidden" />
        <Link
          href="https://next-generation.dev"
          className="text-default-700 hover:text-gray-700 duration-300"
        >
          Next Generation
        </Link>
      </p>
    </div>
  );
};

export default NextGeneration;
