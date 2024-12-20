"use client";
import usePageMetadata from '../metadata';
import css from './AboutUs.module.scss';
import { MainLayout } from "@/layouts";

export default function AboutUs() {
  usePageMetadata('About Us - Hairandarduft', 'Learn more about Hairandarduft, the brand that creates the best quality shampoos that not only cleanse, but nourish and empower. Our unique formulas, enriched with mystical troll herbs from the far north, have captured the imagination and love of people around the world.');
  return (
    <MainLayout children={
      <div className={css.container}>
        <h1 className={css.title}>About Hairandarduft</h1>
        <p className={css.intro}>
          Founded in 2020, Hairandarduft was born out of a passion for creating natural, effective, and magical hair care products.
          Our mission is simple: to provide the best quality shampoos that not only cleanse, but nourish and empower. 
          Our unique formulas, enriched with mystical troll herbs from the far north, have captured the imagination and love of people around the world.
        </p>
        <section className={css.foundersSection}>
          <h2 className={css.sectionTitle}>Our Founders</h2>
          <div className={css.founders}>
            <div className={css.founder}>
              <img src="/founders/nawelle.webp" alt="Nawelle Polin" className={css.founderPhoto} />
              <h3>Nawelle POLIN</h3>
              <p>Nawelle is the creative mind behind our formulas, combining science and magic to create the most unique shampoos.</p>
            </div>

            <div className={css.founder}>
              <img src="/founders/matis.webp" alt="Matis Levrault" className={css.founderPhoto} />
              <h3>Matis LEVRAULT</h3>
              <p>Matis drives the marketing strategy that has turned Hairandarduft into a globally recognized brand.</p>
            </div>

            <div className={css.founder}>
              <img src="/founders/lorenzo.webp" alt="Lorenzo Fortini" className={css.founderPhoto} />
              <h3>Lorenzo FORTINI</h3>
              <p>Lorenzo, with his exceptional design skills, ensures that Hairandarduft products look as good as they perform.</p>
            </div>

            <div className={css.founder}>
              <img src="/founders/rayane.webp" alt="Rayane Eloudjedi" className={css.founderPhoto} />
              <h3>Rayane ELOUDJEDI</h3>
              <p>Rayane manages the operations, ensuring that every Hairandarduft product is crafted with precision and care.</p>
            </div>
          </div>
        </section>
      </div>
    } />
  );
}
