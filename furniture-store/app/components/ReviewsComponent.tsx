import React from 'react';
import Footer from '../components/Footer';
import TopHeaderButtonless from '../components/TopHeaderButtonless';

interface Review {
  name: string;
  rating: number;
  title: string;
  reviewText: string;
  date: string;
}

interface ReviewsProps {
  reviews: Review[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {

  const renderRating = (rating: number) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<svg key={i} className="hi-mini hi-star inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" /></svg>
      );
    }
    return stars;
  };

  return (
    <>
      <div className="font-frank dark">
        <TopHeaderButtonless title="Reviews" />
        <div className="bg-white dark:text-gray-100 dark:bg-gray-900">
          <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Reviews Summary */}
            <section className="lg:col-span-4">
              <div className="space-y-3">
                <h2 className="text-lg font-bold">Customer Reviews</h2>
                <div className="space-x-2 flex items-center">
                  <div className="inline-flex items-center text-amber-500 bg-amber-50 border border-amber-200 px-2 py-1 rounded-lg dark:bg-amber-900/25 dark:border-amber-900/50">
                    <svg
                      className="hi-mini hi-star inline-block w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="hi-mini hi-star inline-block w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="hi-mini hi-star inline-block w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="hi-mini hi-star inline-block w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="hi-mini hi-star inline-block w-5 h-5 text-amber-500/40"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h4 className="inline-block">
                    <strong>4.5</strong> out of <strong>5.0</strong> stars
                  </h4>
                </div>

              </div>
              <div className="py-5 space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="flex-none w-14 text-sm font-medium">5 stars</div>
                  <div className="grow flex items-center w-full h-2 bg-gray-100 rounded-lg overflow-hidden dark:bg-gray-600">
                    <div role="progressbar" aria-valuenow={78} aria-valuemin={0} aria-valuemax={100} className="flex items-center justify-center self-stretch transition-all duration-500 ease-out bg-amber-500 text-white text-sm font-semibold" style={{ width: '78%' }} />
                  </div>
                  <div className="w-12 text-xs font-medium text-right text-gray-600 dark:text-gray-400">78%</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-none w-14 text-sm font-medium">4 stars</div>
                  <div className="grow flex items-center w-full h-2 bg-gray-100 rounded-lg overflow-hidden dark:bg-gray-600">
                    <div role="progressbar" aria-valuenow={8} aria-valuemin={0} aria-valuemax={100} className="flex items-center justify-center self-stretch transition-all duration-500 ease-out bg-amber-500 text-white text-sm font-semibold" style={{ width: '8%' }} />
                  </div>
                  <div className="w-12 text-xs font-medium text-right text-gray-600 dark:text-gray-400">8%</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-none w-14 text-sm font-medium">3 stars</div>
                  <div className="grow flex items-center w-full h-2 bg-gray-100 rounded-lg overflow-hidden dark:bg-gray-600">
                    <div role="progressbar" aria-valuenow={5} aria-valuemin={0} aria-valuemax={100} className="flex items-center justify-center self-stretch transition-all duration-500 ease-out bg-amber-500 text-white text-sm font-semibold" style={{ width: '5%' }} />
                  </div>
                  <div className="w-12 text-xs font-medium text-right text-gray-600 dark:text-gray-400">5%</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-none w-14 text-sm font-medium">2 stars</div>
                  <div className="grow flex items-center w-full h-2 bg-gray-100 rounded-lg overflow-hidden dark:bg-gray-600">
                    <div role="progressbar" aria-valuenow={3} aria-valuemin={0} aria-valuemax={100} className="flex items-center justify-center self-stretch transition-all duration-500 ease-out bg-amber-500 text-white text-sm font-semibold" style={{ width: '3%' }} />
                  </div>
                  <div className="w-12 text-xs font-medium text-right text-gray-600 dark:text-gray-400">3%</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-none w-14 text-sm font-medium">1 star</div>
                  <div className="grow flex items-center w-full h-2 bg-gray-100 rounded-lg overflow-hidden dark:bg-gray-600">
                    <div role="progressbar" aria-valuenow={6} aria-valuemin={0} aria-valuemax={100} className="flex items-center justify-center self-stretch transition-all duration-500 ease-out bg-amber-500 text-white text-sm font-semibold" style={{ width: '6%' }} />
                  </div>
                  <div className="w-12 text-xs font-medium text-right text-gray-600 dark:text-gray-400">6%</div>
                </div>
              </div>
              <hr className="mb-5 border-gray-200/75 dark:border-gray-700/50" />
              <div>
                <h3 className="font-semibold mb-1">Review this product</h3>
                <p className="text-sm font-medium text-gray-500 mb-5 dark:text-gray-400/75">
                  Share your thoughts with other customers
                </p>
                <button
                  type="button"
                  className="w-full inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
                >
                  <svg
                    className="hi-mini hi-pencil-square inline-block w-5 h-5 opacity-25"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                    <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                  </svg>
                  <span>Write a customer review</span>
                </button>
              </div>
            </section>
            {/* END Reviews Summary */}

            {/* Reviews */}
            <div className="lg:col-span-8">
              {reviews.map((review, index) => (
                <>
                  {/* Customer Review */}
                  <div className="space-y-2 pt-4">
                    <div key={index} className="flex items-center space-x-1">
                      <a href="#" className="font-semibold text-black hover:text-gray-600 dark:text-white">
                        {review.name}
                      </a>
                      <svg className="hi-mini hi-check-badge inline-block w-5 h-5 text-emerald-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="sm:space-x-2 sm:flex sm:items-center">
                      <div className="flex items-center text-amber-500 mb-3 sm:mb-0">
                        {renderRating(review.rating)}
                      </div>
                      <h4 className="font-semibold inline-block">{review.title}</h4>
                    </div>
                    <p className="text-sm font-medium text-gray-600 leading-relaxed dark:text-gray-400">
                      {review.reviewText}
                    </p>
                    <p className="text-xs font-medium text-gray-500 leading-relaxed dark:text-gray-400/75">
                      Verified purchase, reviewed on {review.date}
                    </p>
                    <hr className="my-5 sm:my-10 border-gray-200/75 dark:border-gray-700/50" />
                  </div>
                  {/* END Customer Review */}
                </>
              ))}

            </div>
            {/* END Reviews */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Reviews;
