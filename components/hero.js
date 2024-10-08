import React from 'react';
import Image from 'next/image';
import styles from '../styles/hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className="container mx-auto py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-5xl font-bold text-orange-500 mb-4">Spice Odyssey</h1>
            <h2 className="text-2xl font-medium mb-4">Experience Authentic Indian Flavors</h2>
            <p className="text-lg text-gray-600 mb-8">
              Spice Odyssey is a vibrant Indian restaurant dedicated to serving authentic and flavorful dishes. Our passionate team of chefs uses only the freshest ingredients and traditional techniques to create a truly unforgettable culinary experience.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded">
              View Our Menu
            </button>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/assets/images/restaurant-interior.jpg"
              alt="Spice Odyssey Restaurant Interior"
              width={700}
              height={400}
              className={styles.heroImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;