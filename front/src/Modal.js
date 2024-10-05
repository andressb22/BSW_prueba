const buttonModal = document.querySelector("#buttonModal");
const textModal = document.querySelector("#textModal");
const modalIco = document.querySelector("#modalIco");
const Modal = document.querySelector("#Modal");
const SUCCESTYPE = 1;
const ERRORTYPE = 2;

let urlSelected = "";
let typeSelected = 1;

export const activeModal = (type, text, url) => {
  textModal.innerText = text;
  Modal.style.display = "flex";
  if (type == SUCCESTYPE) {
    modalIco.innerHTML = `
        <svg viewBox="0 0 606 606" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="303" cy="303" r="303" fill="#A0FF74"/>
            <circle cx="303" cy="303" r="251.644" fill="#21222A"/>
            <path d="M174.61 328.678L256.779 385.169L431.389 154.068L472.474 184.881L272.186 457.068L143.796 369.763L174.61 328.678Z" fill="#A0FF74"/>
        </svg>
        `;

    typeSelected = type;
    urlSelected = url;
    return;
  }

  modalIco.innerHTML = `
        <svg
            viewBox="0 0 606 606"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="303" cy="303" r="303" fill="#FF7C74" />
            <ellipse cx="303" cy="303" rx="252.5" ry="252.5" fill="#21222A" />
            <path
              d="M140.951 176.264L176.327 140.951L297.613 267.068L418.9 140.951L454.276 176.264L332.989 302.38L449.222 423.452L413.847 458.764L297.613 337.693L181.38 458.764L140.951 423.452L262.238 302.38L140.951 176.264Z"
              fill="#FF7C74"
            />
        </svg>`;
};

const handleClick = (event) => {
    Modal.style.display = "none"
    if(typeSelected == SUCCESTYPE) window.location.href = urlSelected
}

buttonModal.addEventListener("click", handleClick);
