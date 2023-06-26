import React from "react";

function Main() {
  return (
    <div className="w-full h-[500px] bg-gray-200 flex justify-between items-center">
      <div className="h-full">
        <img
          src="https://64.media.tumblr.com/582b518b9f4b7915e548c8bc4feda8b6/tumblr_oqh7wyLbxB1rcnwcjo1_640.gif"
          alt="Paris"
          className="object-contain p-20 mb-20"
        />
      </div>

      <div className="h-90 flex flex-col gap-4 pr-40">
        <h2 className="text-3xl font-serif ...">
          Welcome To Captain Underpant's College!
        </h2>

        <p className="w-[600px]">
          After a hard day of cracking jokes, pulling pranks, and causing mayhem
          at school, George and Harold liked to rush to the old tree house in
          George’s backyard. Inside the tree house were two big old fluffy
          chairs, a table, a cupboard crammed with junk food, and a padlocked
          crate filled with pencils, pens, and stacks and stacks of paper.
          <br />
          Now, Harold loved to draw, and George loved to make up stories. And
          together, the two boys spent hours and hours writing and drawing their
          very own comic books. Over the years, they had created hundreds of
          their own comics, starring dozens of their own superheroes.But the
          all-time greatest superhero they ever made up had to be “The Amazing
          Captain Underpants.” <br />
          The two boys laughed and laughed.
        </p>

        <button
          type="button"
          class="text-bold text-black bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2 mt-5 h-10 w-1/3 ml-40"
        >
          Apply Here
        </button>
      </div>
    </div>
  );
}

export default Main;
