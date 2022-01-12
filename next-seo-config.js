const title = "Ki-Anime";
const description = "Aqui você encontra o anime perfeito para você, um site para encontrar animes do seu gosto";

const SEO = {
  title,
  description,
  canonical: "https://ki-anime.vercel.app",
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://ki-anime.vercel.app',
    title,
    description,
    images: [
      {
        url: "https://ki-anime.vercel.app/img/1-branco.png",
        alt: title,
        // width: 1280,
        // height: 720,
        width: 500,
        height: 500,
      },
    ],
  },
};

export default SEO;