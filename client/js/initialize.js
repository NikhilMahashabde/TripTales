import { renderHomePage } from "/js/components/homepage.js";
import { renderNavBar } from "/js/components/navbar.js";
import { renderTripList } from "/js/components/tripList.js";

// global vars.
let userEmail;
let userName = "";
let isAuthenticated;

//initialise state of app.
axios
  .get("/api/session")
  .then((response) => {
    isAuthenticated = response.data.isAuthenticated;

    if (isAuthenticated) {
      console.log("response.data on initialise:", response.data);
      userEmail = response.data.email;
      userName = response.data.name;
      renderNavBar(userName);
      renderTripList();
    } else {
      renderNavBar();
      renderHomePage();
    }
  })
  .catch(() => {});

// const backGroundImg = [
//   // "https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg",
//   // "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/24/146502.jpg",
//   // "https://cdn.clipkit.co/tenants/568/item_images/images/000/002/533/large/a2656a0b-b32e-41df-abc1-b7c52f84c90a.jpg?1560594545",
//   // "https://cdn.tourradar.com/s3/serp/original/2147_iyMRxiWm.jpg",
//   // "https://lp-cms-production.imgix.net/features/2017/11/GettyRF_543346423-1-ab159824d5bd.jpg?auto=format&w=1440&h=810&fit=crop&q=75",
//   // "https://scontent.ccdn.cloud/image/vivitravels-en/64389aa1-91ad-447f-a08d-30f950871a3d/maxw-960.jpg",
//   // "https://i.natgeofe.com/k/42e832f5-fd48-43ff-b338-091bdf4048ca/india-tajmahal_16x9.jpg?w=1200",
//   // "https://www.jigsaw.jp/img/goods/L/epo7738905093.jpg",
//   // "https://www.knt.co.jp/tabiplanet/image/kaigai_160413_mv.jpg",
//   // "https://dnp-production-uploaded-files.s3.ap-northeast-1.amazonaws.com/images/GvUcOJFfFGUnpqg59yLEN8C9JcqrKhbfsvMx83Vo.jpeg",
//   // "https://lp-cms-production.imgix.net/2023-02/shutterstock_776445706.jpg",
//   // "https://images.ctfassets.net/zmjc9gr9hbbf/4lgWS3rphBjUbkIRucP9jr/ecf1d37df85e7d1ea8d04dbe511a10a9/CAS35449.jpg?w=1980",
//   // "https://www.trailsofindochina.com/wp-content/uploads/2019/07/malaysia-hero-shot.jpg",
//   // "https://c.ndtvimg.com/2023-04/odh6uu3_dubai-generic-pixabay_625x300_06_April_23.jpg",
//   // "https://images.microcms-assets.io/assets/14d13bd618dc45c7b684223c0ca9d033/9fe5fcf7f57f4704b11b151614201099/shutterstock_610935047.jpg",
//   // "https://cdn.britannica.com/89/179589-138-3EE27C94/Overview-Great-Wall-of-China.jpg?w=800&h=450&c=crop",
//   // "https://www.weseektravel.com/wp-content/uploads/2022/05/landmarks-in-egypt-1-2.jpg",
//   // "https://gogen-yurai.jp/wp-content/uploads/219650798_675.jpg",
// ];

// const backGroundRandomIndex = Math.floor(Math.random() * backGroundImg.length);
// // get random background item
// const backgroundItem = backGroundImg[backGroundRandomIndex];
// document.body.style.background = `url(${backgroundItem})no-repeat center 0 / cover`;
