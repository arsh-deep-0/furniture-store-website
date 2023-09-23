"use client";
import React from 'react';
import Reviews from '../components/ReviewsComponent'; // Adjust the import path as needed

const App: React.FC = () => {
  
  const reviews = [
    {
      name: "Harpreet Singh",
      rating: 5,
      title: "Excellent Service",
      reviewText: "I recently purchased furniture from this store, and I'm extremely happy with the quality and service. The furniture looks great in my home. Highly recommend!",
      date: "20 Sep 2023"
    },
    {
      name: "Aisha Ahmed",
      rating: 4,
      title: "Good Experience",
      reviewText: "I had a good experience shopping for furniture here. The staff was helpful, and the delivery was prompt. The furniture is of good quality.",
      "date": "18 Sep 2023"
    },
    {
      name: "Jaspreet Kaur",
      rating: 5,
      title: "Outstanding Quality",
      reviewText: "I bought a dining table set, and it's of outstanding quality. The woodwork and finish are excellent. Highly satisfied!",
      "date": "16 Sep 2023"
    },
    {
      name: "Gurpreet Singh",
      rating: 4,
      title: "Great Service",
      reviewText: "The staff provided great service. They helped me choose the right furniture for my home. The quality is impressive.",
      "date": "14 Sep 2023"
    },
    {
      name: "Rajinder Singh",
      rating: 5,
      title: "Decent Selection",
      reviewText: "They have a decent selection of furniture. I found what I needed, but the variety could be better.",
      "date": "13 Sep 2023"
    },
    {
      name: "Ravinder Kaur",
      rating: 4,
      title: "Good Experience",
      reviewText: "I had a good experience shopping for furniture here. The prices are reasonable, and the staff is helpful.",
      "date": "12 Sep 2023"
    },
    {
      name: "Sara Ahmed",
      rating: 5,
      title: "Excellent Store",
      reviewText: "This store is excellent. The furniture is beautiful, and the staff is friendly. I'm very happy with my purchase.",
      "date": "11 Sep 2023"
    },
    {
      name: "Amina Ali",
      rating: 5,
      title: "Highly Recommend",
      reviewText: "I had a wonderful shopping experience here. The furniture is top-notch, and the prices are reasonable. Highly recommend!",
      "date": "10 Sep 2023"
    },
   
    {
      name: "Omar Hassan",
      rating: 4,
      title: "Satisfied Customer",
      reviewText: "I'm a satisfied customer. The furniture quality and customer service are top-notch.",
      "date": "13 Sep 2023"
    },    
    {
      name: "Jasdeep Singh",
      rating: 4,
      title: "Satisfied Customer",
      reviewText: "I'm a satisfied customer. The furniture is sturdy and well-made. Delivery was prompt too.",
      "date": "10 Sep 2023"
    },
    {
      name: "Amrita Kaur",
      rating: 5,
      title: "Highly Recommend",
      reviewText: "I highly recommend this store. They have a beautiful collection of furniture. I love my new sofa!",
      "date": "9 Sep 2023"
    },
    {
      name: "Jaswinder Kaur",
      rating: 4,
      title: "Good Service",
      reviewText: "Good service, friendly staff. I found a nice dining table here that fits perfectly in my home.",
      "date": "8 Sep 2023"
    },
    {
      name: "Baljit Kaur",
      rating: 3,
      title: "Average Experience",
      reviewText: "My shopping experience here was average. The furniture is decent, but nothing extraordinary.",
      "date": "27 Jul 2023"
    },
    {
      name: "Harminder Singh",
      rating: 5,
      title: "Exceptional Service",
      reviewText: "The service I received here was exceptional. The staff went above and beyond to assist me. Highly impressed!",
      "date": "9 Jul 2023"
    },
    {
      name: "Youssef Malik",
      rating: 4,
      title: "Good Value",
      reviewText: "I got good value for my money. The furniture is durable, and I'm satisfied with my purchase.",
      "date": "28 Jun 2023"
    },
    {
      name: "Fatima Khan",
      rating: 4,
      title: "Satisfied Customer",
      reviewText: "I'm a satisfied customer. The furniture looks great in my home, and the prices are competitive.",
      "date": "24 Jun 2023"
    },
    {
      name: "Harpreet Singh",
      rating: 5,
      title: "Amazing Furniture",
      reviewText: "I found amazing furniture here. The quality and craftsmanship are top-notch. Highly recommend!",
      "date": "1 Jun 2023"
    },
    {
      name: "Zahra Mansoor",
      rating: 5,
      title: "Highly Recommend",
      reviewText: "Highly recommend this furniture store. I got a fantastic dining table, and it's sturdy.",
      "date": "24 May 2023"
    },
    {
      name: "Kuldeep Kaur",
      rating: 4,
      title: "Great Selection",
      reviewText: "The store has a great selection of furniture. I'm happy with my purchase. Prices are reasonable too.",
      "date": "22 May 2023"
    },
    {
      name: "Simranjit Singh",
      rating: 5,
      title: "Impressive Designs",
      reviewText: "I'm impressed with the unique designs of their furniture. The craftsmanship is commendable.",
      "date": "18 May 2023"
    },
    {
      name: "Sukhdev Singh",
      rating: 4,
      title: "Prompt Delivery",
      reviewText: "The delivery was prompt, and the furniture was in perfect condition. I would shop here again.",
      "date": "15 May 2023"
    },
    {
      name: "Baljit Kaur",
      rating: 3,
      title: "Average Experience",
      reviewText: "My shopping experience here was average. The furniture is decent, but nothing extraordinary.",
      "date": "11 May 2023"
    },
    {
      name: "Harminder Singh",
      rating: 5,
      title: "Exceptional Service",
      reviewText: "The service I received here was exceptional. The staff went above and beyond to assist me. Highly impressed!",
      "date": "9 May 2023"
    },
    {
      name: "Youssef Malik",
      rating: 4,
      title: "Good Value",
      reviewText: "I got good value for my money. The furniture is durable, and I'm satisfied with my purchase.",
      "date": "30 April 2023"
    },
    {
      name: "Fatima Khan",
      rating: 4,
      title: "Satisfied Customer",
      reviewText: "I'm a satisfied customer. The furniture looks great in my home, and the prices are competitive.",
      "date": "30 April 2023"
    },
    {
      name: "Harpreet Singh",
      rating: 5,
      title: "Amazing Furniture",
      reviewText: "I found amazing furniture here. The quality and craftsmanship are top-notch. Highly recommend!",
      "date": "29 April 2023"
    },
    {
      name: "Zahra Mansoor",
      rating: 5,
      title: "Highly Recommend",
      reviewText: "Highly recommend this furniture store. I got a fantastic dining table, and it's sturdy.",
      "date": "24 April 2023"
    },
    {
      name: "Kuldeep Kaur",
      rating: 4,
      title: "Great Selection",
      reviewText: "The store has a great selection of furniture. I'm happy with my purchase. Prices are reasonable too.",
      "date": "19 April 2023"
    },
    {
      name: "Rajbir Singh",
      rating: 3,
      title: "Could Be Better",
      reviewText: "While the furniture is decent, I think it could be better in terms of variety. Staff is friendly though.",
      "date": "13 April 2023"
    },
    {
      name: "Manpreet Kaur",
      rating: 5,
      title: "Excellent Experience",
      reviewText: "I had an excellent shopping experience here. The staff was knowledgeable, and I got exactly what I wanted.",
      "date": "4 April 2023"
    },
    {
      name: "Rajbir Singh",
      rating: 3,
      title: "Could Be Better",
      reviewText: "While the furniture is decent, I think it could be better in terms of variety. Staff is friendly though.",
      "date": "3 April 2023"
    },
    {
      name: "Manpreet Kaur",
      rating: 5,
      title: "Excellent Experience",
      reviewText: "I had an excellent shopping experience here. The staff was knowledgeable, and I got exactly what I wanted.",
      "date": "17 Mar 2023"
    },
    {
      name: "Omar Hassan",
      rating: 4,
      title: "Satisfied Customer",
      reviewText: "I'm a satisfied customer. The furniture quality and customer service are top-notch.",
      "date": "13 Mar 2023"
    },    
    {
      name: "Jasdeep Singh",
      rating: 4,
      title: "Satisfied Customer",
      reviewText: "I'm a satisfied customer. The furniture is sturdy and well-made. Delivery was prompt too.",
      "date": "5 Feb 2023"
    },
    {
      name: "Amrita Kaur",
      rating: 5,
      title: "Highly Recommend",
      reviewText: "I highly recommend this store. They have a beautiful collection of furniture. I love my new sofa!",
      "date": "16 Jan 2023"
    },
    {
      name: "Jaswinder Kaur",
      rating: 4,
      title: "Good Service",
      reviewText: "Good service, friendly staff. I found a nice dining table here that fits perfectly in my home.",
      "date": "8 Jan 2023"
    },
    {
      name: "Baljit Kaur",
      rating: 3,
      title: "Average Experience",
      reviewText: "My shopping experience here was average. The furniture is decent, but nothing extraordinary.",
      "date": "27 Oct 2022"
    },
    {
      name: "Harminder Singh",
      rating: 5,
      title: "Exceptional Service",
      reviewText: "The service I received here was exceptional. The staff went above and beyond to assist me. Highly impressed!",
      "date": "17 Aug 2022"
    },
    {
      name: "Youssef Malik",
      rating: 4,
      title: "Good Value",
      reviewText: "I got good value for my money. The furniture is durable, and I'm satisfied with my purchase.",
      "date": "28 April 2022"
    },
    {
      name: "Fatima Khan",
      rating: 4,
      title: "Satisfied Customer",
      reviewText: "I'm a satisfied customer. The furniture looks great in my home, and the prices are competitive.",
      "date": "24 April 2022"
    },
    {
      name: "Harpreet Singh",
      rating: 5,
      title: "Amazing Furniture",
      reviewText: "I found amazing furniture here. The quality and craftsmanship are top-notch. Highly recommend!",
      "date": "1 Dec 2021"
    },
    {
      name: "Zahra Mansoor",
      rating: 5,
      title: "Highly Recommend",
      reviewText: "Highly recommend this furniture store. I got a fantastic dining table, and it's sturdy.",
      "date": "14 Sep 2021"
    },
    {
      name: "Kuldeep Kaur",
      rating: 4,
      title: "Great Selection",
      reviewText: "The store has a great selection of furniture. I'm happy with my purchase. Prices are reasonable too.",
      "date": "2 Jun 2021"
    },
    {
      name: "Rajbir Singh",
      rating: 3,
      title: "Could Be Better",
      reviewText: "While the furniture is decent, I think it could be better in terms of variety. Staff is friendly though.",
      "date": "3 Mar 2021"
    },
    {
      name: "Manpreet Kaur",
      rating: 5,
      title: "Excellent Experience",
      reviewText: "I had an excellent shopping experience here. The staff was knowledgeable, and I got exactly what I wanted.",
      "date": "4 Jan 2021"
    },
    {
      name: "Omar Hassan",
      rating: 4,
      title: "Satisfied Customer",
      reviewText: "I'm a satisfied customer. The furniture quality and customer service are top-notch.",
      "date": "13 Nov 2020"
    },    
    {
      name: "Jasdeep Singh",
      rating: 4,
      title: "Satisfied Customer",
      reviewText: "I'm a satisfied customer. The furniture is sturdy and well-made. Delivery was prompt too.",
      "date": "5 Nov 2020"
    },
    {
      name: "Amrita Kaur",
      rating: 5,
      title: "Highly Recommend",
      reviewText: "I highly recommend this store. They have a beautiful collection of furniture. I love my new sofa!",
      "date": "6 oct 2020"
    },
    {
      name: "Jaswinder Kaur",
      rating: 4,
      title: "Good Service",
      reviewText: "Good service, friendly staff. I found a nice dining table here that fits perfectly in my home.",
      "date": "8 May 2020"
    },
    

            
            
    
    

  ];

  return (
    <div>
      {/* Use the Reviews component and pass the reviews prop */}
      <Reviews reviews={reviews} />
    </div>
  );
};

export default App;
