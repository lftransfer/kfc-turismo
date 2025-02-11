import { useState, useEffect } from "react";

const images = ["./img06.jpg", "./img04.jpg", "./img01.jpg", "./img05.jpg"];

export default function ImgHeader() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={images[index]}
      alt="Imagem do Cabeçalho"
      width="650"
      height="550"
      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
      loading="lazy"
    />
  );
}
