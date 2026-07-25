export type Testimonial = {
  author: string;
  text: string;
  rating: number;
  source: "Google";
};

// Avis réels laissés sur la fiche Google Business de Boki Agency.
export const TESTIMONIALS: Testimonial[] = [
  {
    author: "Jules Bertrand",
    text: "Service très efficace et rapide, avec un site au top réalisé en moins de trois jours. Je recommande fortement.",
    rating: 5,
    source: "Google",
  },
  {
    author: "Odile Ibanez",
    text: "Un excellent rapport qualité-prix et une réactivité remarquable. Je recommande fortement.",
    rating: 5,
    source: "Google",
  },
  {
    author: "Tom Maury",
    text: "Très bon rapport qualité-prix. Lucas a été à l'écoute de toutes mes idées et a su toutes les coordonner. Je recommande.",
    rating: 5,
    source: "Google",
  },
];

export const TESTIMONIALS_AGGREGATE = {
  rating: 5.0,
  count: 6,
};

// Lien vers la fiche Google (avis publics).
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Boki+Agency+Montauban";
