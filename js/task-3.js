const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// First way
const callbackImg = ({ url, alt }) => {
  const imgRef = document.createElement("img");
  imgRef.src = url;
  imgRef.alt = alt;
  const itemRef = document.createElement("li");
  itemRef.append(imgRef);
  return itemRef;
};

const createListOfElements = (options) => {
  return options.map(callbackImg);
};

const galleryListRef = document.querySelector(".gallery");

galleryListRef.append(...createListOfElements(images));
