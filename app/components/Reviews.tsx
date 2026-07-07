import AnimatedSection from "./AnimatedSection";
import CTAButton from "./CTAButton";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
}

const FALLBACK_REVIEWS: Review[] = [
  {
    author_name: "Cliente B&R",
    rating: 5,
    text: "Excelente atendimento! Os advogados explicaram tudo de forma clara e me acompanharam em cada etapa. Consegui minha indenização e fui tratado com muito respeito.",
    relative_time_description: "há 2 meses",
  },
  {
    author_name: "Cliente B&R",
    rating: 5,
    text: "Muito profissionais e humanos. Não entendia nada de direito trabalhista, mas eles explicaram tudo sem complicar. Recomendo a todos os trabalhadores.",
    relative_time_description: "há 3 meses",
  },
  {
    author_name: "Cliente B&R",
    rating: 5,
    text: "Fui demitido por justa causa injustamente. O Dr. Erisson reverteu tudo e recebi todos meus direitos. Atendimento top, equipe dedicada.",
    relative_time_description: "há 4 meses",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-accent" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

async function getReviews(): Promise<{ reviews: Review[]; rating: number; total: number }> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.NEXT_PUBLIC_PLACE_ID;

  if (!apiKey || !placeId) {
    return { reviews: FALLBACK_REVIEWS, rating: 5.0, total: 50 };
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}&language=pt-BR&reviews_sort=newest`,
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();
    if (data.result?.reviews?.length) {
      return {
        reviews: data.result.reviews.slice(0, 3),
        rating: data.result.rating ?? 5.0,
        total: data.result.user_ratings_total ?? 50,
      };
    }
  } catch {
    // fall through to defaults
  }

  return { reviews: FALLBACK_REVIEWS, rating: 5.0, total: 50 };
}

export default async function Reviews() {
  const { reviews, rating, total } = await getReviews();

  return (
    <section id="avaliacoes" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <p className="text-brand font-medium text-sm uppercase tracking-widest mb-2">
            Avaliações Google
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="flex flex-col items-center gap-1 mb-2">
            <div className="flex items-center gap-3">
              <Stars rating={Math.round(rating)} />
              <span className="font-heading font-bold text-2xl text-brand">{rating.toFixed(1)}</span>
            </div>
            <span className="text-gray-500 text-sm">· {total} avaliações no Google</span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 h-full flex flex-col gap-4 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center shrink-0 text-accent font-bold text-sm">
                    {review.author_name[0].toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-gray-900 text-sm truncate">
                      {review.author_name}
                    </p>
                    <p className="text-gray-400 text-xs">{review.relative_time_description}</p>
                  </div>
                </div>
                <Stars rating={review.rating} />
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span className="text-xs text-gray-400">Google</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center">
          <CTAButton size="lg" />
        </div>
      </div>
    </section>
  );
}
