import { activeModal } from "./Modal.js";

const logOut = document.querySelector("#logOut");
const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
let map;
const credentials = sessionStorage.getItem("credentials");

if (!credentials) {
  // Si no existen credenciales enviar al inicio
  window.location.href = "/index.html";
}

const parser = new DOMParser();
// A marker with a custom inline SVG.
const pinSvgString = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_17_2)">
<mask id="mask0_17_2" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
<path d="M40 0H0V40H40V0Z" fill="white"/>
</mask>
<g mask="url(#mask0_17_2)">
<path d="M18.3493 1.81733C22.1238 -0.600174 24.9773 0.625847 26.0007 1.01761C33.6748 3.95423 30.9281 12.3518 27.2916 16.712C21.6482 23.4778 3.19627 36.7082 0.888428 21.4898C8.81811 23.4573 15.5454 19.2806 21.9199 11.6417C27.2118 5.29897 24.0552 0.570805 16.1849 3.09947L18.3493 1.81841V1.81733Z" fill="url(#paint0_linear_17_2)"/>
<path d="M31.9947 3.95435C42.5935 17.5863 19.1032 34.6858 7.54565 33.3368C14.907 40.0475 23.4341 35.6517 30.1625 29.5993C40.4582 20.3405 41.3986 11.3224 31.9947 3.95435Z" fill="url(#paint1_linear_17_2)"/>
<path d="M39.9999 21.4888C36.3052 31.9834 29.0851 38.543 17.5146 39.8306C29.9878 41.4127 39.3658 31.678 39.9999 21.4888Z" fill="#002E4C"/>
<path d="M18.2772 2.29669C13.5666 7.9638 30.6683 27.1765 39.9989 21.49C38.3489 42.8558 -3.65269 4.72823 16.2799 0.364847C16.2799 0.364847 20.5451 -0.539559 24.3271 0.497594C24.3271 0.497594 19.6371 0.661638 18.2772 2.29669Z" fill="url(#paint2_linear_17_2)"/>
<path d="M8.92184 3.40601C0.0884309 14.7683 20.0717 34.1277 35.1384 33.1132C29.1683 40.723 17.7908 35.7034 10.9439 29.5474C0.648136 20.2908 -1.12696 10.2398 8.92184 3.40601Z" fill="url(#paint3_linear_17_2)"/>
<path d="M0.397829 16.4929C1.56361 29.4028 9.57202 38.8926 24.1438 39.5866C8.23585 42.5275 -2.20766 28.2351 0.397829 16.4929Z" fill="url(#paint4_linear_17_2)"/>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_17_2" x1="6.4998" y1="6" x2="33.7498" y2="35.25" gradientUnits="userSpaceOnUse">
<stop stop-color="#2CBBDF"/>
<stop offset="1" stop-color="#002E4C"/>
</linearGradient>
<linearGradient id="paint1_linear_17_2" x1="7.49989" y1="4.00013" x2="35.2499" y2="33.7501" gradientUnits="userSpaceOnUse">
<stop stop-color="#2CBBDF"/>
<stop offset="1" stop-color="#002E4C"/>
</linearGradient>
<linearGradient id="paint2_linear_17_2" x1="33.75" y1="5.50012" x2="3.99995" y2="33.0002" gradientUnits="userSpaceOnUse">
<stop stop-color="#26DFC6"/>
<stop offset="1" stop-color="#2CBBDF"/>
</linearGradient>
<linearGradient id="paint3_linear_17_2" x1="33.75" y1="5.75" x2="5.25" y2="33.75" gradientUnits="userSpaceOnUse">
<stop stop-color="#26DFC6"/>
<stop offset="1" stop-color="#2CBBDF"/>
</linearGradient>
<linearGradient id="paint4_linear_17_2" x1="33.7499" y1="5.50001" x2="3.74989" y2="32.25" gradientUnits="userSpaceOnUse">
<stop stop-color="#26DFC6"/>
<stop offset="1" stop-color="#13B4E0"/>
</linearGradient>
<clipPath id="clip0_17_2">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>
`;
const pinSvg = parser.parseFromString(
  pinSvgString,
  "image/svg+xml"
).documentElement;

const initMap = async () => {
  const { Map } = await google.maps.importLibrary("maps");

  const dataUser = JSON.parse(credentials);

  const map = new Map(document.getElementById("map"), {
    center: { lat: 4.6269757, lng: -74.1133698 },
    zoom: 14,
    mapId: "Map_id",
  });

  new AdvancedMarkerElement({
    map,
    position: { lat: 4.6269757, lng: -74.1133698 },
  });

  new AdvancedMarkerElement({
    map,
    position: dataUser.coord,
    content: pinSvg,
  });
};

initMap();

const closeSession = () => {
  sessionStorage.clear()
  activeModal(1, "Session closed correctly", "/index.html");
};

logOut.addEventListener("click", closeSession);
