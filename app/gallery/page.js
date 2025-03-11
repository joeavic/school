// pages/gallery.js
'use client'
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Gallery.module.css';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Sample gallery items - replace with your actual content
  const galleryItems = [
    {
      id: 1,
      title: 'School Building',
      description: 'Front view of our main campus building',
      category: 'campus',
      imagePath: '/images/gallery/campus-building.jpg',
    },
    {
      id: 2,
      title: 'Science Lab',
      description: 'Students engaged in chemistry experiments',
      category: 'academics',
      imagePath: '/images/gallery/science-lab.jpg',
    },
    {
      id: 3,
      title: 'Annual Sports Day',
      description: 'Highlights from our annual sports competition',
      category: 'events',
      imagePath: '/images/gallery/sports-day.jpg',
    },
    {
      id: 4,
      title: 'Library',
      description: 'Our well-stocked library with study areas',
      category: 'campus',
      imagePath: '/images/gallery/library.jpg',
    },
    {
      id: 5,
      title: 'Art Exhibition',
      description: 'Student artwork display from last semester',
      category: 'events',
      imagePath: '/images/gallery/art-exhibition.jpg',
    },
    {
      id: 6,
      title: 'Computer Lab',
      description: 'Students learning programming skills',
      category: 'academics',
      imagePath: '/images/gallery/computer-lab.jpg',
    },
    {
      id: 7,
      title: 'Graduation Ceremony',
      description: 'Class of 2024 graduation day',
      category: 'events',
      imagePath: '/images/gallery/graduation.jpg',
    },
    {
      id: 8,
      title: 'Cafeteria',
      description: 'Student dining area serving nutritious meals',
      category: 'campus',
      imagePath: '/images/gallery/cafeteria.jpg',
    },
  ];

  const categories = ['all', 'campus', 'academics', 'events'];
  
  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Photo Gallery | School Name</title>
        <meta name="description" content="Browse our school gallery showcasing campus, events, and student activities." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Photo Gallery</h1>
        
        <div className={styles.filterContainer}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterButton} ${activeFilter === category ? styles.active : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className={styles.gallery}>
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className={styles.galleryItem}
              onClick={() => openLightbox(item)}
            >
              <div className={styles.imageContainer}>
                <Image 
                  src={item.imagePath} 
                  alt={item.title}
                  width={600}
                  height={400}
                  className={styles.image}
                  priority={item.id <= 4}
                />
              </div>
              <div className={styles.galleryInfo}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className={styles.category}>{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className={styles.noResults}>No gallery items found for this category.</p>
        )}
      </main>

      {selectedImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeLightbox}>×</button>
            <div className={styles.lightboxImageContainer}>
              <Image 
                src={selectedImage.imagePath} 
                alt={selectedImage.title}
                fill
                className={styles.lightboxImage}
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
            <div className={styles.lightboxInfo}>
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      <footer className={styles.footer}>
        <Link href="/">
          Back to Home
        </Link>
      </footer>
    </div>
  );
}