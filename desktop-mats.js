const inner = [

    {
    image: "image/destiny_2_lightfall_lp_tile_d_tile_1_3.png__440x440_crop-scale_optimize_subsampling-2.webp",
    year: 2019,
    desc: "Latest certificate",
    place: "This place",
    },
    {
    image: "image/qck_prism_xl_destiny2_lightfall_pdp_img_buy_01.png__1850x800_crop-scale_optimize_subsampling-2.webp",
    year: 2019,
    desc: "Latest certificate",
    place: "This place",
    },
    {
    image: "image/qck_prism_xl_destiny2_lightfall_pdp_img_buy_02.png__1920x1080_crop-fit_optimize_subsampling-2.png",
    year: 2019,
    desc: "Latest certificate",
    place: "This place",
    },
    {
    image: "image/qck_prism_xl_destiny2_lightfall_pdp_img_buy_03.png__1920x1080_crop-fit_optimize_subsampling-2.png",
    year: 2019,
    desc: "Latest certificate",
    place: "This place",
    },
  
];

let displayText = document.querySelector(".inner");
inner.forEach((data) => {
  displayText.innerHTML += `
    <div class="card">
      <h4 class="display-5">${data.year}</h4>
      <div class="card-body">
        <img src="${data.image}" style="width:140px;">
        <p class="text-wheat">${data.desc} @ <span>${data.place}</span></p>
      </div>
    </div>`;
});

  